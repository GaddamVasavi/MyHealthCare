import prisma from '../../database/prisma';
import { FHIRResourceBuilder } from './fhir/fhirResourceBuilder';
import { HL7Serializer, HL7Parser } from './hl7/hl7Serializer';

export class InteropService {
  /**
   * Export Patient Data as FHIR R4 Bundle
   */
  public static async exportPatientFHIRBundle(patientId: string) {
    const patient: any = await prisma.patient.findUnique({
      where: { id: patientId },
      include: {
        user: true,
        address: true,
        conditions: true,
        allergies: true,
        vitalSigns: { orderBy: { recordedAt: 'desc' }, take: 10 },
        medications: { where: { status: 'ACTIVE' } },
      },
    });

    if (!patient) {
      throw { statusCode: 404, message: 'Patient record not found', code: 'NOT_FOUND' };
    }

    return FHIRResourceBuilder.buildPatientRecordBundle(patient);
  }

  /**
   * Export Patient ADT message in HL7 v2.5.1
   */
  public static async exportPatientHL7ADT(patientId: string) {
    const patient = await prisma.patient.findUnique({
      where: { id: patientId },
      include: { address: true },
    });

    if (!patient) {
      throw { statusCode: 404, message: 'Patient record not found', code: 'NOT_FOUND' };
    }

    const hl7String = HL7Serializer.serializePatientADT(patient);
    return {
      format: 'HL7_V2_5_1',
      messageType: 'ADT^A08',
      rawMessage: hl7String,
    };
  }

  /**
   * Export Lab Order as HL7 v2.5.1 ORU^R01
   */
  public static async exportLabOrderHL7ORU(labOrderId: string) {
    const labOrder = await prisma.labOrder.findUnique({
      where: { id: labOrderId },
      include: {
        patient: { include: { address: true } },
        doctor: true,
        results: true,
      },
    });

    if (!labOrder) {
      throw { statusCode: 404, message: 'Lab order not found', code: 'NOT_FOUND' };
    }

    const hl7String = HL7Serializer.serializeLabResultsORU(labOrder);
    return {
      format: 'HL7_V2_5_1',
      messageType: 'ORU^R01',
      rawMessage: hl7String,
    };
  }

  /**
   * Ingest and parse arbitrary HL7 message
   */
  public static parseHL7Message(rawMessage: string) {
    return HL7Parser.parse(rawMessage);
  }
}
