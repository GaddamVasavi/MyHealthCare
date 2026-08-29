import { z } from 'zod';

export const createMedicalRecordSchema = z.object({
  body: z.object({
    patientId: z.string().uuid('Valid patient ID is required'),
    appointmentId: z.string().uuid().optional(),
    chiefComplaint: z.string().min(1, 'Chief complaint is required'),
    historyOfIllness: z.string().optional(),
    assessment: z.string().optional(),
    treatmentPlan: z.string().optional(),
    followUpDate: z.string().optional(),
    diagnoses: z
      .array(
        z.object({
          code: z.string().optional(),
          description: z.string().min(1, 'Diagnosis description is required'),
          type: z.string().default('PRIMARY'),
          severity: z.string().optional(),
        })
      )
      .optional(),
    clinicalNotes: z
      .array(
        z.object({
          noteType: z.string().default('PROGRESS'),
          content: z.string().min(1, 'Note content is required'),
        })
      )
      .optional(),
    vitalSign: z
      .object({
        heightCm: z.number().optional(),
        weightKg: z.number().optional(),
        systolicBp: z.number().optional(),
        diastolicBp: z.number().optional(),
        heartRateBpm: z.number().optional(),
        respiratoryRate: z.number().optional(),
        temperatureCelsius: z.number().optional(),
        oxygenSaturationPct: z.number().optional(),
        bloodGlucoseMgDl: z.number().optional(),
        notes: z.string().optional(),
      })
      .optional(),
  }),
});

export const addClinicalNoteSchema = z.object({
  body: z.object({
    noteType: z.string().default('PROGRESS'),
    content: z.string().min(1, 'Note content is required'),
  }),
});

export const addDiagnosisSchema = z.object({
  body: z.object({
    code: z.string().optional(),
    description: z.string().min(1, 'Diagnosis description is required'),
    type: z.string().default('PRIMARY'),
    severity: z.string().optional(),
  }),
});
