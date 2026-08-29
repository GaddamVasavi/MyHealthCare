import { z } from 'zod';
import { UserRole, Gender, BloodGroup } from '@prisma/client';

export const registerPatientSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    dateOfBirth: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: 'Invalid date of birth format',
    }),
    gender: z.nativeEnum(Gender),
    phone: z.string().min(8, 'Valid phone number is required'),
    bloodGroup: z.nativeEnum(BloodGroup).optional(),
    street: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    postalCode: z.string().optional(),
    emergencyContactName: z.string().optional(),
    emergencyContactRelationship: z.string().optional(),
    emergencyContactPhone: z.string().optional(),
  }),
});

export const registerDoctorSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    phone: z.string().min(8, 'Valid phone number is required'),
    specializationId: z.string().uuid('Valid specialization ID is required'),
    licenseNumber: z.string().min(3, 'Medical license number is required'),
    qualifications: z.string().min(2, 'Qualifications are required'),
    experienceYears: z.number().min(0).default(0),
    consultationFee: z.number().min(0, 'Consultation fee must be positive'),
    clinicName: z.string().optional(),
    clinicAddress: z.string().optional(),
    languages: z.string().optional(),
    biography: z.string().optional(),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(1, 'Password is required'),
  }),
});

export const refreshTokenSchema = z.object({
  body: z.object({
    refreshToken: z.string().min(1, 'Refresh token is required'),
  }),
});

export const forgotPasswordSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email address'),
  }),
});

export const resetPasswordSchema = z.object({
  body: z.object({
    token: z.string().min(1, 'Reset token is required'),
    newPassword: z.string().min(8, 'Password must be at least 8 characters long'),
  }),
});

export const changePasswordSchema = z.object({
  body: z.object({
    currentPassword: z.string().min(1, 'Current password is required'),
    newPassword: z.string().min(8, 'New password must be at least 8 characters long'),
  }),
});
