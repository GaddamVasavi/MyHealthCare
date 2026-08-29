import prisma from '../../database/prisma';
import { AppointmentStatus, DayOfWeek, NotificationType, InvoiceStatus } from '@prisma/client';
import crypto from 'crypto';

const DAY_MAP: Record<number, DayOfWeek> = {
  0: 'SUNDAY',
  1: 'MONDAY',
  2: 'TUESDAY',
  3: 'WEDNESDAY',
  4: 'THURSDAY',
  5: 'FRIDAY',
  6: 'SATURDAY',
};

export class AppointmentsService {
  static async getAvailableSlots(doctorId: string, dateStr: string) {
    const targetDate = new Date(dateStr);
    const dayOfWeek = DAY_MAP[targetDate.getDay()];

    // 1. Check if doctor is on leave
    const leave = await prisma.doctorLeave.findFirst({
      where: {
        doctorId,
        startDate: { lte: targetDate },
        endDate: { gte: targetDate },
      },
    });

    if (leave) {
      return {
        isAvailable: false,
        reason: 'Doctor is on leave on this date.',
        slots: [],
      };
    }

    // 2. Fetch doctor availability rules for this day of week
    const availability = await prisma.doctorAvailability.findFirst({
      where: {
        doctorId,
        dayOfWeek,
        isActive: true,
      },
    });

    if (!availability) {
      return {
        isAvailable: false,
        reason: `Doctor does not have scheduled consultations on ${dayOfWeek.toLowerCase()}s.`,
        slots: [],
      };
    }

    // 3. Fetch existing booked appointments on this date
    const bookedAppointments = await prisma.appointment.findMany({
      where: {
        doctorId,
        appointmentDate: targetDate,
        status: {
          notIn: [AppointmentStatus.CANCELLED],
        },
      },
      select: {
        startTime: true,
        endTime: true,
      },
    });

    const bookedSlotSet = new Set(bookedAppointments.map((a) => a.startTime));

    // 4. Generate all potential slots between startTime and endTime
    const [startH, startM] = availability.startTime.split(':').map(Number);
    const [endH, endM] = availability.endTime.split(':').map(Number);
    const slotDuration = availability.slotDurationMinutes || 30;

    let currentTotalMinutes = startH * 60 + startM;
    const endTotalMinutes = endH * 60 + endM;

    const slots: Array<{ startTime: string; endTime: string; isBooked: boolean }> = [];

    while (currentTotalMinutes + slotDuration <= endTotalMinutes) {
      const slotStartH = Math.floor(currentTotalMinutes / 60);
      const slotStartM = currentTotalMinutes % 60;
      const nextTotalMinutes = currentTotalMinutes + slotDuration;
      const slotEndH = Math.floor(nextTotalMinutes / 60);
      const slotEndM = nextTotalMinutes % 60;

      const startTimeStr = `${String(slotStartH).padStart(2, '0')}:${String(slotStartM).padStart(2, '0')}`;
      const endTimeStr = `${String(slotEndH).padStart(2, '0')}:${String(slotEndM).padStart(2, '0')}`;

      slots.push({
        startTime: startTimeStr,
        endTime: endTimeStr,
        isBooked: bookedSlotSet.has(startTimeStr),
      });

      currentTotalMinutes = nextTotalMinutes;
    }

    return {
      isAvailable: true,
      doctorAvailability: availability,
      slots,
    };
  }

  static async bookAppointment(data: {
    patientId: string;
    doctorId: string;
    appointmentDate: string;
    startTime: string;
    endTime: string;
    reason: string;
  }) {
    const targetDate = new Date(data.appointmentDate);

    // Double-booking check in a database transaction with serializable-like lock guarantee
    return prisma.$transaction(async (tx) => {
      // 1. Fetch doctor details
      const doctor = await tx.doctor.findUnique({
        where: { id: data.doctorId },
        include: { user: true },
      });

      if (!doctor || !doctor.isAvailable || doctor.deletedAt) {
        throw { statusCode: 400, message: 'Doctor is not available for bookings', code: 'DOCTOR_UNAVAILABLE' };
      }

      // 2. Check if doctor is on leave
      const leave = await tx.doctorLeave.findFirst({
        where: {
          doctorId: data.doctorId,
          startDate: { lte: targetDate },
          endDate: { gte: targetDate },
        },
      });

      if (leave) {
        throw { statusCode: 400, message: 'Doctor is on scheduled leave on this date', code: 'DOCTOR_ON_LEAVE' };
      }

      // 3. Check for existing conflicting appointment
      const conflict = await tx.appointment.findFirst({
        where: {
          doctorId: data.doctorId,
          appointmentDate: targetDate,
          startTime: data.startTime,
          status: { notIn: [AppointmentStatus.CANCELLED] },
        },
      });

      if (conflict) {
        throw {
          statusCode: 409,
          message: 'The requested time slot has already been booked. Please choose another time slot.',
          code: 'SLOT_ALREADY_BOOKED',
        };
      }

      const patient = await tx.patient.findUnique({
        where: { id: data.patientId },
        include: { user: true },
      });

      if (!patient) {
        throw { statusCode: 404, message: 'Patient not found', code: 'NOT_FOUND' };
      }

      const appointmentNumber = `APT-${Date.now().toString().slice(-6)}-${crypto.randomBytes(2).toString('hex').toUpperCase()}`;

      // 4. Create appointment
      const appointment = await tx.appointment.create({
        data: {
          appointmentNumber,
          patientId: data.patientId,
          doctorId: data.doctorId,
          appointmentDate: targetDate,
          startTime: data.startTime,
          endTime: data.endTime,
          reason: data.reason,
          consultationFee: doctor.consultationFee,
          status: AppointmentStatus.CONFIRMED,
        },
        include: {
          doctor: { include: { specialization: true } },
          patient: true,
        },
      });

      // 5. Generate Consultation Invoice
      const invoiceNumber = `INV-${Date.now().toString().slice(-6)}-${crypto.randomBytes(2).toString('hex').toUpperCase()}`;
      await tx.invoice.create({
        data: {
          invoiceNumber,
          patientId: data.patientId,
          appointmentId: appointment.id,
          subtotal: doctor.consultationFee,
          tax: 0,
          discount: 0,
          totalAmount: doctor.consultationFee,
          dueAmount: doctor.consultationFee,
          status: InvoiceStatus.PENDING,
          dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          items: {
            create: {
              description: `Consultation with Dr. ${doctor.firstName} ${doctor.lastName}`,
              quantity: 1,
              unitPrice: doctor.consultationFee,
              totalPrice: doctor.consultationFee,
            },
          },
        },
      });

      // 6. Notify Patient and Doctor
      await tx.notification.createMany({
        data: [
          {
            userId: patient.userId,
            title: 'Appointment Confirmed',
            message: `Your appointment with Dr. ${doctor.firstName} ${doctor.lastName} is confirmed for ${targetDate.toLocaleDateString()} at ${data.startTime}.`,
            type: NotificationType.APPOINTMENT,
            linkUrl: `/patient/appointments/${appointment.id}`,
          },
          {
            userId: doctor.userId,
            title: 'New Appointment Booked',
            message: `Patient ${patient.firstName} ${patient.lastName} has booked a consultation for ${targetDate.toLocaleDateString()} at ${data.startTime}.`,
            type: NotificationType.APPOINTMENT,
            linkUrl: `/doctor/appointments/${appointment.id}`,
          },
        ],
      });

      return appointment;
    });
  }

  static async rescheduleAppointment(
    appointmentId: string,
    data: { appointmentDate: string; startTime: string; endTime: string; reason?: string },
    userRole: string,
    userId: string
  ) {
    const targetDate = new Date(data.appointmentDate);

    return prisma.$transaction(async (tx) => {
      const existing = await tx.appointment.findUnique({
        where: { id: appointmentId },
        include: { doctor: true, patient: true },
      });

      if (!existing) {
        throw { statusCode: 404, message: 'Appointment not found', code: 'NOT_FOUND' };
      }

      if (userRole === 'PATIENT' && existing.patient.userId !== userId) {
        throw { statusCode: 403, message: 'Unauthorized to modify this appointment', code: 'FORBIDDEN' };
      }

      if (userRole === 'DOCTOR' && existing.doctor.userId !== userId) {
        throw { statusCode: 403, message: 'Unauthorized to modify this appointment', code: 'FORBIDDEN' };
      }

      if (([AppointmentStatus.COMPLETED, AppointmentStatus.CANCELLED] as AppointmentStatus[]).includes(existing.status)) {
        throw {
          statusCode: 400,
          message: `Cannot reschedule appointment with status: ${existing.status}`,
          code: 'INVALID_STATUS_TRANSITION',
        };
      }

      // Check slot conflict
      const conflict = await tx.appointment.findFirst({
        where: {
          doctorId: existing.doctorId,
          appointmentDate: targetDate,
          startTime: data.startTime,
          id: { not: appointmentId },
          status: { notIn: [AppointmentStatus.CANCELLED] },
        },
      });

      if (conflict) {
        throw {
          statusCode: 409,
          message: 'The requested reschedule slot is already taken.',
          code: 'SLOT_ALREADY_BOOKED',
        };
      }

      const updated = await tx.appointment.update({
        where: { id: appointmentId },
        data: {
          appointmentDate: targetDate,
          startTime: data.startTime,
          endTime: data.endTime,
          status: AppointmentStatus.RESCHEDULED,
          notes: data.reason ? `Rescheduled: ${data.reason}` : existing.notes,
        },
        include: {
          doctor: { include: { specialization: true } },
          patient: true,
        },
      });

      await tx.notification.createMany({
        data: [
          {
            userId: existing.patient.userId,
            title: 'Appointment Rescheduled',
            message: `Your appointment with Dr. ${existing.doctor.firstName} ${existing.doctor.lastName} has been rescheduled to ${targetDate.toLocaleDateString()} at ${data.startTime}.`,
            type: NotificationType.APPOINTMENT,
            linkUrl: `/patient/appointments/${updated.id}`,
          },
          {
            userId: existing.doctor.userId,
            title: 'Appointment Rescheduled',
            message: `Appointment with ${existing.patient.firstName} ${existing.patient.lastName} was rescheduled to ${targetDate.toLocaleDateString()} at ${data.startTime}.`,
            type: NotificationType.APPOINTMENT,
            linkUrl: `/doctor/appointments/${updated.id}`,
          },
        ],
      });

      return updated;
    });
  }

  static async cancelAppointment(
    appointmentId: string,
    cancellationReason: string,
    userRole: string,
    userId: string
  ) {
    const existing = await prisma.appointment.findUnique({
      where: { id: appointmentId },
      include: { doctor: true, patient: true },
    });

    if (!existing) {
      throw { statusCode: 404, message: 'Appointment not found', code: 'NOT_FOUND' };
    }

    if (userRole === 'PATIENT' && existing.patient.userId !== userId) {
      throw { statusCode: 403, message: 'Unauthorized to cancel this appointment', code: 'FORBIDDEN' };
    }

    if (userRole === 'DOCTOR' && existing.doctor.userId !== userId) {
      throw { statusCode: 403, message: 'Unauthorized to cancel this appointment', code: 'FORBIDDEN' };
    }

    if (existing.status === AppointmentStatus.COMPLETED) {
      throw { statusCode: 400, message: 'Cannot cancel an already completed appointment', code: 'CANNOT_CANCEL' };
    }

    return prisma.$transaction(async (tx) => {
      const updated = await tx.appointment.update({
        where: { id: appointmentId },
        data: {
          status: AppointmentStatus.CANCELLED,
          cancellationReason,
        },
        include: {
          doctor: true,
          patient: true,
        },
      });

      // Update invoice if pending
      await tx.invoice.updateMany({
        where: {
          appointmentId,
          status: InvoiceStatus.PENDING,
        },
        data: {
          status: InvoiceStatus.CANCELLED,
        },
      });

      await tx.notification.createMany({
        data: [
          {
            userId: existing.patient.userId,
            title: 'Appointment Cancelled',
            message: `Your appointment for ${new Date(existing.appointmentDate).toLocaleDateString()} has been cancelled. Reason: ${cancellationReason}`,
            type: NotificationType.APPOINTMENT,
          },
          {
            userId: existing.doctor.userId,
            title: 'Appointment Cancelled',
            message: `Appointment with ${existing.patient.firstName} ${existing.patient.lastName} on ${new Date(existing.appointmentDate).toLocaleDateString()} has been cancelled.`,
            type: NotificationType.APPOINTMENT,
          },
        ],
      });

      return updated;
    });
  }

  static async updateAppointmentStatus(appointmentId: string, status: AppointmentStatus, notes?: string) {
    return prisma.appointment.update({
      where: { id: appointmentId },
      data: {
        status,
        notes: notes ? notes : undefined,
      },
      include: {
        doctor: { include: { specialization: true } },
        patient: true,
      },
    });
  }

  static async getAppointmentById(appointmentId: string) {
    const appointment = await prisma.appointment.findUnique({
      where: { id: appointmentId },
      include: {
        doctor: { include: { specialization: true } },
        patient: { include: { healthProfile: true, vitalSigns: { take: 1, orderBy: { recordedAt: 'desc' } } } },
        medicalRecord: { include: { vitalSigns: true, diagnoses: true, clinicalNotes: true, prescriptions: true } },
        invoice: { include: { items: true, payments: true } },
      },
    });

    if (!appointment) {
      throw { statusCode: 404, message: 'Appointment not found', code: 'NOT_FOUND' };
    }

    return appointment;
  }

  static async listAppointments(query: any, userRole: string, userId: string, patientId?: string, doctorId?: string) {
    const {
      status,
      date,
      startDate,
      endDate,
      page = 1,
      limit = 10,
    } = query;

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

    if (status) {
      where.status = status;
    }

    if (date) {
      where.appointmentDate = new Date(date);
    } else if (startDate || endDate) {
      where.appointmentDate = {};
      if (startDate) where.appointmentDate.gte = new Date(startDate);
      if (endDate) where.appointmentDate.lte = new Date(endDate);
    }

    const [total, appointments] = await Promise.all([
      prisma.appointment.count({ where }),
      prisma.appointment.findMany({
        where,
        include: {
          doctor: { include: { specialization: true } },
          patient: true,
          invoice: { select: { id: true, status: true, totalAmount: true } },
        },
        orderBy: [{ appointmentDate: 'desc' }, { startTime: 'desc' }],
        skip,
        take: limitNum,
      }),
    ]);

    return {
      appointments,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages: Math.ceil(total / limitNum),
      },
    };
  }
}
