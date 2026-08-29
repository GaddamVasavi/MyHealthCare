import { z } from 'zod';

export const createPrescriptionSchema = z.object({
  body: z.object({
    patientId: z.string().uuid('Valid patient ID is required'),
    medicalRecordId: z.string().uuid().optional(),
    validUntil: z.string().optional(),
    generalAdvice: z.string().optional(),
    followUpDate: z.string().optional(),
    items: z
      .array(
        z.object({
          medicineName: z.string().min(1, 'Medicine name is required'),
          form: z.string().default('TABLET'),
          dosage: z.string().min(1, 'Dosage is required (e.g. 500mg)'),
          frequency: z.string().min(1, 'Frequency is required (e.g. 1-0-1)'),
          durationDays: z.number().min(1).default(7),
          instructions: z.string().optional(),
        })
      )
      .min(1, 'At least one medicine must be prescribed'),
  }),
});
