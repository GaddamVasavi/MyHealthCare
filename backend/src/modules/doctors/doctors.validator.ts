import { z } from 'zod';
import { DayOfWeek } from '@prisma/client';

export const updateDoctorProfileSchema = z.object({
  body: z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    phone: z.string().optional(),
    specializationId: z.string().uuid().optional(),
    qualifications: z.string().optional(),
    experienceYears: z.number().min(0).optional(),
    consultationFee: z.number().min(0).optional(),
    clinicName: z.string().optional(),
    clinicAddress: z.string().optional(),
    languages: z.string().optional(),
    biography: z.string().optional(),
    profileImage: z.string().optional(),
    isAvailable: z.boolean().optional(),
  }),
});

export const setAvailabilitySchema = z.object({
  body: z.object({
    availabilities: z.array(
      z.object({
        dayOfWeek: z.nativeEnum(DayOfWeek),
        startTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Format HH:MM (24h)'),
        endTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Format HH:MM (24h)'),
        slotDurationMinutes: z.number().min(10).max(120).default(30),
        isActive: z.boolean().default(true),
      })
    ),
  }),
});

export const addDoctorLeaveSchema = z.object({
  body: z.object({
    startDate: z.string().refine((d) => !isNaN(Date.parse(d)), { message: 'Invalid start date' }),
    endDate: z.string().refine((d) => !isNaN(Date.parse(d)), { message: 'Invalid end date' }),
    reason: z.string().optional(),
  }),
});
