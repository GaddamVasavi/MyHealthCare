import { z } from 'zod';

export const recordVitalsSchema = z.object({
  body: z.object({
    patientId: z.string().uuid().optional(),
    medicalRecordId: z.string().uuid().optional(),
    heightCm: z.number().min(30).max(300).optional(),
    weightKg: z.number().min(1).max(500).optional(),
    systolicBp: z.number().min(50).max(300).optional(),
    diastolicBp: z.number().min(30).max(200).optional(),
    heartRateBpm: z.number().min(30).max(250).optional(),
    respiratoryRate: z.number().min(5).max(60).optional(),
    temperatureCelsius: z.number().min(30).max(45).optional(),
    oxygenSaturationPct: z.number().min(50).max(100).optional(),
    bloodGlucoseMgDl: z.number().min(20).max(1000).optional(),
    notes: z.string().optional(),
    recordedAt: z.string().optional(),
  }),
});
