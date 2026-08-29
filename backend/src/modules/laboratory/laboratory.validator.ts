import { z } from 'zod';
import { LabStatus } from '@prisma/client';

export const createLabTestSchema = z.object({
  body: z.object({
    code: z.string().min(1, 'Test code is required'),
    name: z.string().min(1, 'Test name is required'),
    category: z.string().min(1, 'Category is required'),
    description: z.string().optional(),
    price: z.number().min(0, 'Price must be positive'),
    normalRange: z.string().optional(),
    unit: z.string().optional(),
    sampleType: z.string().optional(),
    tatHours: z.number().min(1).default(24),
  }),
});

export const createLabOrderSchema = z.object({
  body: z.object({
    patientId: z.string().uuid('Valid patient ID is required'),
    testIds: z.array(z.string().uuid()).min(1, 'Select at least one lab test'),
    clinicalNotes: z.string().optional(),
    medicalRecordId: z.string().uuid().optional(),
  }),
});

export const updateLabStatusSchema = z.object({
  body: z.object({
    status: z.nativeEnum(LabStatus),
  }),
});

export const enterLabResultSchema = z.object({
  body: z.object({
    labTestId: z.string().uuid('Valid test ID is required'),
    testName: z.string().min(1, 'Test name is required'),
    resultValue: z.string().min(1, 'Result value is required'),
    normalRange: z.string().optional(),
    unit: z.string().optional(),
    isAbnormal: z.boolean().default(false),
    comments: z.string().optional(),
    reportFileUrl: z.string().optional(),
  }),
});
