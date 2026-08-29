import prisma from '../../database/prisma';
import { MedicationStatus } from '@prisma/client';

export class MedicationsService {
  static async addMedication(patientId: string, data: any) {
    return prisma.medication.create({
      data: {
        patientId,
        name: data.name,
        dosage: data.dosage,
        frequency: data.frequency,
        durationDays: data.durationDays,
        startDate: data.startDate ? new Date(data.startDate) : new Date(),
        endDate: data.endDate ? new Date(data.endDate) : undefined,
        reminderTimes: data.reminderTimes ? JSON.stringify(data.reminderTimes) : undefined,
        notes: data.notes,
        status: MedicationStatus.ACTIVE,
      },
    });
  }

  static async getPatientMedications(patientId: string, status?: MedicationStatus) {
    const where: any = { patientId };
    if (status) {
      where.status = status;
    }
    return prisma.medication.findMany({
      where,
      orderBy: { startDate: 'desc' },
    });
  }

  static async updateMedicationStatus(medicationId: string, status: MedicationStatus, notes?: string) {
    return prisma.medication.update({
      where: { id: medicationId },
      data: {
        status,
        notes: notes || undefined,
      },
    });
  }

  static async deleteMedication(patientId: string, medicationId: string) {
    const medication = await prisma.medication.findFirst({
      where: { id: medicationId, patientId },
    });
    if (!medication) {
      throw { statusCode: 404, message: 'Medication record not found', code: 'NOT_FOUND' };
    }
    await prisma.medication.delete({ where: { id: medicationId } });
    return true;
  }
}
