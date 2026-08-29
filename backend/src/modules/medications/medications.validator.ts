import { z } from 'zod';
import { MedicationStatus } from '@prisma/client';

export const createMedicationSchema = z.object({
  body: z.object({
    patientId: z.string().uuid().optional(),
    name: z.string().min(1, 'Medication name is required'),
    dosage: z.string().min(1, 'Dosage is required'),
    frequency: z.string().min(1, 'Frequency is required'),
    durationDays: z.number().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    reminderTimes: z.array(z.string()).optional(),
    notes: z.string().optional(),
  }),
});

export const updateMedicationStatusSchema = z.object({
  body: z.object({
    status: z.nativeEnum(MedicationStatus),
    notes: z.string().optional(),
  }),
});
