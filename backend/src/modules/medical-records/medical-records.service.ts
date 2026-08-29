import prisma from '../../database/prisma';
import crypto from 'crypto';
import { UserRole } from '@prisma/client';

export class MedicalRecordsService {
  static async createRecord(doctorId: string, data: any, ipAddress?: string, userAgent?: string) {
    const recordNumber = `REC-${Date.now().toString().slice(-6)}-${crypto.randomBytes(2).toString('hex').toUpperCase()}`;

    return prisma.$transaction(async (tx) => {
      // Calculate BMI if height and weight are provided
      let bmi: number | undefined;
      if (data.vitalSign?.weightKg && data.vitalSign?.heightCm) {
        const hMeters = data.vitalSign.heightCm / 100;
        bmi = parseFloat((data.vitalSign.weightKg / (hMeters * hMeters)).toFixed(1));
      }

      const record = await tx.medicalRecord.create({
        data: {
          recordNumber,
          doctorId,
          patientId: data.patientId,
          appointmentId: data.appointmentId,
          chiefComplaint: data.chiefComplaint,
          historyOfIllness: data.historyOfIllness,
          assessment: data.assessment,
          treatmentPlan: data.treatmentPlan,
          followUpDate: data.followUpDate ? new Date(data.followUpDate) : undefined,
          diagnoses: data.diagnoses
            ? {
                create: data.diagnoses.map((d: any) => ({
                  code: d.code,
                  description: d.description,
                  type: d.type || 'PRIMARY',
                  severity: d.severity,
                })),
              }
            : undefined,
          clinicalNotes: data.clinicalNotes
            ? {
                create: data.clinicalNotes.map((n: any) => ({
                  noteType: n.noteType || 'PROGRESS',
                  content: n.content,
                })),
              }
            : undefined,
          vitalSigns: data.vitalSign
            ? {
                create: {
                  patientId: data.patientId,
                  heightCm: data.vitalSign.heightCm,
                  weightKg: data.vitalSign.weightKg,
                  bmi,
                  systolicBp: data.vitalSign.systolicBp,
                  diastolicBp: data.vitalSign.diastolicBp,
                  heartRateBpm: data.vitalSign.heartRateBpm,
                  respiratoryRate: data.vitalSign.respiratoryRate,
                  temperatureCelsius: data.vitalSign.temperatureCelsius,
                  oxygenSaturationPct: data.vitalSign.oxygenSaturationPct,
                  bloodGlucoseMgDl: data.vitalSign.bloodGlucoseMgDl,
                  notes: data.vitalSign.notes,
                  recordedByRole: UserRole.DOCTOR,
                },
              }
            : undefined,
        },
        include: {
          doctor: { include: { specialization: true } },
          patient: true,
          diagnoses: true,
          clinicalNotes: true,
          vitalSigns: true,
        },
      });

      // If tied to an appointment, mark appointment as COMPLETED
      if (data.appointmentId) {
        await tx.appointment.update({
          where: { id: data.appointmentId },
          data: { status: 'COMPLETED' },
        });
      }

      // Update patient height & weight profile if provided
      if (data.vitalSign?.heightCm || data.vitalSign?.weightKg) {
        await tx.patient.update({
          where: { id: data.patientId },
          data: {
            heightCm: data.vitalSign.heightCm || undefined,
            weightKg: data.vitalSign.weightKg || undefined,
          },
        });
      }

      // Create Audit Log
      const doctor = await tx.doctor.findUnique({ where: { id: doctorId } });
      await tx.auditLog.create({
        data: {
          userId: doctor?.userId,
          action: 'CREATE',
          entity: 'MedicalRecord',
          entityId: record.id,
          details: `Doctor Dr. ${doctor?.firstName} ${doctor?.lastName} created medical record ${recordNumber} for patient ${data.patientId}`,
          ipAddress,
          userAgent,
        },
      });

      return record;
    });
  }

  static async getRecordById(id: string, userRole: string, userId: string, patientId?: string, doctorId?: string) {
    const record = await prisma.medicalRecord.findUnique({
      where: { id },
      include: {
        doctor: { include: { specialization: true } },
        patient: { include: { address: true, emergencyContact: true, healthProfile: true } },
        diagnoses: true,
        clinicalNotes: { orderBy: { createdAt: 'desc' } },
        vitalSigns: { orderBy: { recordedAt: 'desc' } },
        treatments: true,
        prescriptions: { include: { items: true } },
        labOrders: { include: { results: { include: { labTest: true } } } },
      },
    });

    if (!record) {
      throw { statusCode: 404, message: 'Medical record not found', code: 'NOT_FOUND' };
    }

    if (userRole === 'PATIENT' && record.patientId !== patientId) {
      throw { statusCode: 403, message: 'Unauthorized to view this medical record', code: 'FORBIDDEN' };
    }

    // Record audit trail of read
    await prisma.auditLog.create({
      data: {
        userId,
        action: 'READ',
        entity: 'MedicalRecord',
        entityId: record.id,
        details: `Medical record ${record.recordNumber} accessed by user (${userRole})`,
      },
    });

    return record;
  }

  static async getPatientMedicalHistory(
    targetPatientId: string,
    userRole: string,
    userId: string,
    callerPatientId?: string
  ) {
    if (userRole === 'PATIENT' && callerPatientId !== targetPatientId) {
      throw { statusCode: 403, message: 'Unauthorized to access another patient history', code: 'FORBIDDEN' };
    }

    const [records, vitals, prescriptions, labOrders] = await Promise.all([
      prisma.medicalRecord.findMany({
        where: { patientId: targetPatientId },
        include: {
          doctor: { include: { specialization: true } },
          diagnoses: true,
          clinicalNotes: true,
          vitalSigns: true,
        },
        orderBy: { visitDate: 'desc' },
      }),
      prisma.vitalSign.findMany({
        where: { patientId: targetPatientId },
        orderBy: { recordedAt: 'desc' },
        take: 50,
      }),
      prisma.prescription.findMany({
        where: { patientId: targetPatientId },
        include: {
          doctor: { include: { specialization: true } },
          items: true,
        },
        orderBy: { issuedDate: 'desc' },
      }),
      prisma.labOrder.findMany({
        where: { patientId: targetPatientId },
        include: {
          doctor: true,
          results: { include: { labTest: true } },
        },
        orderBy: { orderedDate: 'desc' },
      }),
    ]);

    await prisma.auditLog.create({
      data: {
        userId,
        action: 'READ',
        entity: 'PatientMedicalHistory',
        entityId: targetPatientId,
        details: `Full medical history reviewed for patient ${targetPatientId}`,
      },
    });

    return {
      records,
      vitals,
      prescriptions,
      labOrders,
    };
  }

  static async addClinicalNote(recordId: string, data: any) {
    return prisma.clinicalNote.create({
      data: {
        medicalRecordId: recordId,
        noteType: data.noteType || 'PROGRESS',
        content: data.content,
      },
    });
  }

  static async addDiagnosis(recordId: string, data: any) {
    return prisma.diagnosis.create({
      data: {
        medicalRecordId: recordId,
        code: data.code,
        description: data.description,
        type: data.type || 'PRIMARY',
        severity: data.severity,
      },
    });
  }
}
