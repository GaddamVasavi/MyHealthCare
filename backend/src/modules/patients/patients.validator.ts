import { z } from 'zod';
import { BloodGroup, Gender } from '@prisma/client';

export const updatePatientProfileSchema = z.object({
  body: z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    phone: z.string().optional(),
    gender: z.nativeEnum(Gender).optional(),
    bloodGroup: z.nativeEnum(BloodGroup).optional(),
    heightCm: z.number().min(30).max(300).optional(),
    weightKg: z.number().min(1).max(500).optional(),
    occupation: z.string().optional(),
    maritalStatus: z.string().optional(),
    profileImage: z.string().optional(),
    street: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    postalCode: z.string().optional(),
    country: z.string().optional(),
    emergencyContactName: z.string().optional(),
    emergencyContactRelationship: z.string().optional(),
    emergencyContactPhone: z.string().optional(),
    emergencyContactAltPhone: z.string().optional(),
    emergencyContactEmail: z.string().email().optional(),
  }),
});

export const updateHealthProfileSchema = z.object({
  body: z.object({
    smokingStatus: z.string().optional(),
    alcoholConsumption: z.string().optional(),
    exerciseHabits: z.string().optional(),
    dietaryPreferences: z.string().optional(),
    chronicDiseases: z.string().optional(),
    previousSurgeries: z.string().optional(),
    familyMedicalHistory: z.string().optional(),
    notes: z.string().optional(),
  }),
});

export const addAllergySchema = z.object({
  body: z.object({
    allergen: z.string().min(1, 'Allergen name is required'),
    reaction: z.string().min(1, 'Reaction description is required'),
    severity: z.enum(['MILD', 'MODERATE', 'SEVERE']).default('MODERATE'),
    diagnosedOn: z.string().optional(),
  }),
});

export const addConditionSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Condition name is required'),
    icdCode: z.string().optional(),
    status: z.enum(['ACTIVE', 'RESOLVED', 'CHRONIC']).default('ACTIVE'),
    diagnosedOn: z.string().optional(),
    resolvedOn: z.string().optional(),
    notes: z.string().optional(),
  }),
});
