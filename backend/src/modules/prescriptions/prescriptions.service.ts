import prisma from '../../database/prisma';
import crypto from 'crypto';
import { NotificationType, MedicationStatus } from '@prisma/client';

export class PrescriptionsService {
  static async createPrescription(doctorId: string, data: any) {
    const prescriptionNumber = `RX-${Date.now().toString().slice(-6)}-${crypto.randomBytes(2).toString('hex').toUpperCase()}`;

    return prisma.$transaction(async (tx) => {
      const doctor = await tx.doctor.findUnique({
        where: { id: doctorId },
        include: { user: true },
      });

      if (!doctor) {
        throw { statusCode: 404, message: 'Doctor not found', code: 'NOT_FOUND' };
      }

      const patient = await tx.patient.findUnique({
        where: { id: data.patientId },
        include: { user: true },
      });

      if (!patient) {
        throw { statusCode: 404, message: 'Patient not found', code: 'NOT_FOUND' };
      }

      const prescription = await tx.prescription.create({
        data: {
          prescriptionNumber,
          doctorId,
          patientId: data.patientId,
          medicalRecordId: data.medicalRecordId,
          validUntil: data.validUntil ? new Date(data.validUntil) : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
          generalAdvice: data.generalAdvice,
          followUpDate: data.followUpDate ? new Date(data.followUpDate) : undefined,
          items: {
            create: data.items.map((item: any) => ({
              medicineName: item.medicineName,
              form: item.form || 'TABLET',
              dosage: item.dosage,
              frequency: item.frequency,
              durationDays: item.durationDays || 7,
              instructions: item.instructions,
            })),
          },
        },
        include: {
          items: true,
          doctor: { include: { specialization: true } },
          patient: true,
        },
      });

      // Automatically populate active Medication schedule for patient
      const today = new Date();
      for (const item of data.items) {
        const endDate = new Date();
        endDate.setDate(today.getDate() + (item.durationDays || 7));

        await tx.medication.create({
          data: {
            patientId: data.patientId,
            name: `${item.medicineName} (${item.dosage})`,
            dosage: item.dosage,
            frequency: item.frequency,
            durationDays: item.durationDays || 7,
            startDate: today,
            endDate,
            status: MedicationStatus.ACTIVE,
            prescribedBy: `Dr. ${doctor.firstName} ${doctor.lastName}`,
            notes: item.instructions,
          },
        });
      }

      // Notify patient
      await tx.notification.create({
        data: {
          userId: patient.userId,
          title: 'New Prescription Issued',
          message: `Dr. ${doctor.firstName} ${doctor.lastName} has prescribed medications for you.`,
          type: NotificationType.PRESCRIPTION,
          linkUrl: `/patient/prescriptions/${prescription.id}`,
        },
      });

      return prescription;
    });
  }

  static async getPrescriptionById(id: string, userRole: string, userId: string, patientId?: string, doctorId?: string) {
    const prescription = await prisma.prescription.findUnique({
      where: { id },
      include: {
        doctor: { include: { specialization: true } },
        patient: { include: { address: true, emergencyContact: true } },
        items: true,
      },
    });

    if (!prescription) {
      throw { statusCode: 404, message: 'Prescription not found', code: 'NOT_FOUND' };
    }

    if (userRole === 'PATIENT' && prescription.patientId !== patientId) {
      throw { statusCode: 403, message: 'Unauthorized to view this prescription', code: 'FORBIDDEN' };
    }

    return prescription;
  }

  static async listPrescriptions(query: any, userRole: string, patientId?: string, doctorId?: string) {
    const { page = 1, limit = 10 } = query;
    const pageNum = parseInt(page as string, 10);
    const limitNum = parseInt(limit as string, 10);
    const skip = (pageNum - 1) * limitNum;

    const where: any = {};
    if (userRole === 'PATIENT') {
      where.patientId = patientId;
    } else if (userRole === 'DOCTOR') {
      where.doctorId = doctorId;
    } else {
      if (query.patientId) where.patientId = query.patientId;
      if (query.doctorId) where.doctorId = query.doctorId;
    }

    const [total, prescriptions] = await Promise.all([
      prisma.prescription.count({ where }),
      prisma.prescription.findMany({
        where,
        include: {
          doctor: { include: { specialization: true } },
          patient: true,
          items: true,
        },
        orderBy: { issuedDate: 'desc' },
        skip,
        take: limitNum,
      }),
    ]);

    return {
      prescriptions,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages: Math.ceil(total / limitNum),
      },
    };
  }
}
