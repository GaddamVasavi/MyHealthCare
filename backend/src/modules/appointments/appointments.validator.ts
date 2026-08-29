import { z } from 'zod';
import { AppointmentStatus } from '@prisma/client';

export const bookAppointmentSchema = z.object({
  body: z.object({
    doctorId: z.string().uuid('Valid doctor ID is required'),
    patientId: z.string().uuid().optional(), // Can be omitted if booked by patient themselves
    appointmentDate: z.string().refine((d) => !isNaN(Date.parse(d)), { message: 'Valid date is required' }),
    startTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Format HH:MM (24h)'),
    endTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Format HH:MM (24h)'),
    reason: z.string().min(1, 'Reason for appointment is required'),
  }),
});

export const rescheduleAppointmentSchema = z.object({
  body: z.object({
    appointmentDate: z.string().refine((d) => !isNaN(Date.parse(d)), { message: 'Valid date is required' }),
    startTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Format HH:MM (24h)'),
    endTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Format HH:MM (24h)'),
    reason: z.string().optional(),
  }),
});

export const updateAppointmentStatusSchema = z.object({
  body: z.object({
    status: z.nativeEnum(AppointmentStatus),
    cancellationReason: z.string().optional(),
    notes: z.string().optional(),
  }),
});
