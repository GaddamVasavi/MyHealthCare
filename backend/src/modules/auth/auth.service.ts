import prisma from '../../database/prisma';
import { hashPassword, comparePassword } from '../../utils/password';
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from '../../utils/jwt';
import { UserRole } from '@prisma/client';
import crypto from 'crypto';
import { sendEmail } from '../../utils/mailer';

export class AuthService {
  static async registerPatient(data: any, ipAddress?: string, userAgent?: string) {
    const existing = await prisma.user.findUnique({ where: { email: data.email.toLowerCase() } });
    if (existing) {
      throw { statusCode: 409, message: 'Email address is already registered', code: 'EMAIL_IN_USE' };
    }

    const passwordHash = await hashPassword(data.password);

    return prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          email: data.email.toLowerCase(),
          passwordHash,
          role: UserRole.PATIENT,
          isEmailVerified: true, // For smooth dev/demo
        },
      });

      const patient = await tx.patient.create({
        data: {
          userId: user.id,
          firstName: data.firstName,
          lastName: data.lastName,
          dateOfBirth: new Date(data.dateOfBirth),
          gender: data.gender,
          phone: data.phone,
          bloodGroup: data.bloodGroup || 'UNKNOWN',
          address: (data.street || data.city) ? {
            create: {
              street: data.street || '',
              city: data.city || '',
              state: data.state || '',
              postalCode: data.postalCode || '',
            }
          } : undefined,
          emergencyContact: data.emergencyContactName ? {
            create: {
              contactName: data.emergencyContactName,
              relationship: data.emergencyContactRelationship || 'Other',
              phone: data.emergencyContactPhone || data.phone,
            }
          } : undefined,
          healthProfile: {
            create: {
              notes: 'Initial health profile created during registration.'
            }
          }
        },
        include: {
          address: true,
          emergencyContact: true,
          healthProfile: true,
        },
      });

      const tokenPayload = {
        userId: user.id,
        email: user.email,
        role: user.role,
        patientId: patient.id,
      };

      const accessToken = generateAccessToken(tokenPayload);
      const refreshToken = generateRefreshToken(tokenPayload);

      await tx.session.create({
        data: {
          userId: user.id,
          refreshToken,
          ipAddress,
          userAgent,
          expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        },
      });

      await tx.auditLog.create({
        data: {
          userId: user.id,
          action: 'CREATE',
          entity: 'Patient',
          entityId: patient.id,
          details: `Patient registered: ${patient.firstName} ${patient.lastName}`,
          ipAddress,
          userAgent,
        },
      });

      return {
        user: {
          id: user.id,
          email: user.email,
          role: user.role,
        },
        patient,
        accessToken,
        refreshToken,
      };
    });
  }

  static async registerDoctor(data: any, ipAddress?: string, userAgent?: string) {
    const existing = await prisma.user.findUnique({ where: { email: data.email.toLowerCase() } });
    if (existing) {
      throw { statusCode: 409, message: 'Email address is already registered', code: 'EMAIL_IN_USE' };
    }

    const existingLicense = await prisma.doctor.findUnique({ where: { licenseNumber: data.licenseNumber } });
    if (existingLicense) {
      throw { statusCode: 409, message: 'Medical license number already registered', code: 'LICENSE_IN_USE' };
    }

    const passwordHash = await hashPassword(data.password);

    return prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          email: data.email.toLowerCase(),
          passwordHash,
          role: UserRole.DOCTOR,
          isEmailVerified: true,
        },
      });

      const doctor = await tx.doctor.create({
        data: {
          userId: user.id,
          specializationId: data.specializationId,
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
          licenseNumber: data.licenseNumber,
          qualifications: data.qualifications,
          experienceYears: data.experienceYears || 0,
          consultationFee: data.consultationFee,
          clinicName: data.clinicName,
          clinicAddress: data.clinicAddress,
          languages: data.languages,
          biography: data.biography,
        },
        include: {
          specialization: true,
        },
      });

      // Default working hours: Mon - Fri 09:00 - 17:00
      const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'] as const;
      for (const day of days) {
        await tx.doctorAvailability.create({
          data: {
            doctorId: doctor.id,
            dayOfWeek: day,
            startTime: '09:00',
            endTime: '17:00',
            slotDurationMinutes: 30,
          },
        });
      }

      const tokenPayload = {
        userId: user.id,
        email: user.email,
        role: user.role,
        doctorId: doctor.id,
      };

      const accessToken = generateAccessToken(tokenPayload);
      const refreshToken = generateRefreshToken(tokenPayload);

      await tx.session.create({
        data: {
          userId: user.id,
          refreshToken,
          ipAddress,
          userAgent,
          expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        },
      });

      return {
        user: {
          id: user.id,
          email: user.email,
          role: user.role,
        },
        doctor,
        accessToken,
        refreshToken,
      };
    });
  }

  static async login(data: any, ipAddress?: string, userAgent?: string) {
    const user = await prisma.user.findUnique({
      where: { email: data.email.toLowerCase() },
      include: {
        patient: true,
        doctor: { include: { specialization: true } },
      },
    });

    if (!user || !user.isActive || user.deletedAt) {
      throw { statusCode: 401, message: 'Invalid email or password credentials', code: 'INVALID_CREDENTIALS' };
    }

    const isValidPassword = await comparePassword(data.password, user.passwordHash);
    if (!isValidPassword) {
      throw { statusCode: 401, message: 'Invalid email or password credentials', code: 'INVALID_CREDENTIALS' };
    }

    const tokenPayload = {
      userId: user.id,
      email: user.email,
      role: user.role,
      patientId: user.patient?.id,
      doctorId: user.doctor?.id,
    };

    const accessToken = generateAccessToken(tokenPayload);
    const refreshToken = generateRefreshToken(tokenPayload);

    await prisma.session.create({
      data: {
        userId: user.id,
        refreshToken,
        ipAddress,
        userAgent,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    await prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    });

    await prisma.auditLog.create({
      data: {
        userId: user.id,
        action: 'LOGIN',
        entity: 'User',
        entityId: user.id,
        details: `Successful login for user ${user.email} (${user.role})`,
        ipAddress,
        userAgent,
      },
    });

    return {
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        isEmailVerified: user.isEmailVerified,
      },
      patient: user.patient || null,
      doctor: user.doctor || null,
      accessToken,
      refreshToken,
    };
  }

  static async refreshToken(refreshToken: string) {
    let payload;
    try {
      payload = verifyRefreshToken(refreshToken);
    } catch (e) {
      throw { statusCode: 401, message: 'Invalid or expired refresh token', code: 'INVALID_REFRESH_TOKEN' };
    }

    const session = await prisma.session.findUnique({
      where: { refreshToken },
      include: { user: { include: { patient: true, doctor: true } } },
    });

    if (!session || session.isRevoked || session.expiresAt < new Date()) {
      throw { statusCode: 401, message: 'Session expired or revoked. Please log in again.', code: 'SESSION_REVOKED' };
    }

    const tokenPayload = {
      userId: session.user.id,
      email: session.user.email,
      role: session.user.role,
      patientId: session.user.patient?.id,
      doctorId: session.user.doctor?.id,
    };

    const newAccessToken = generateAccessToken(tokenPayload);
    const newRefreshToken = generateRefreshToken(tokenPayload);

    // Rotate refresh token
    await prisma.session.update({
      where: { id: session.id },
      data: {
        refreshToken: newRefreshToken,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    return {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    };
  }

  static async logout(refreshToken: string, userId?: string) {
    if (refreshToken) {
      await prisma.session.updateMany({
        where: { refreshToken },
        data: { isRevoked: true },
      });
    }

    if (userId) {
      await prisma.auditLog.create({
        data: {
          userId,
          action: 'LOGOUT',
          entity: 'User',
          entityId: userId,
          details: `User logout`,
        },
      });
    }

    return true;
  }

  static async forgotPassword(email: string) {
    const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
    if (!user) {
      // Return true to avoid user enumeration
      return true;
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetExp = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    await prisma.user.update({
      where: { id: user.id },
      data: {
        resetPasswordToken: resetToken,
        resetPasswordExp: resetExp,
      },
    });

    await sendEmail({
      to: user.email,
      subject: 'MyHealthCare - Password Reset Request',
      text: `Your password reset token is: ${resetToken}. This token expires in 1 hour.`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Password Reset Request</h2>
          <p>We received a request to reset your password for your MyHealthCare account.</p>
          <p>Use the following reset token:</p>
          <div style="background: #f1f5f9; padding: 10px; font-weight: bold; font-family: monospace;">${resetToken}</div>
          <p>This token is valid for 1 hour.</p>
        </div>
      `,
    });

    return true;
  }

  static async resetPassword(token: string, newPass: string) {
    const user = await prisma.user.findFirst({
      where: {
        resetPasswordToken: token,
        resetPasswordExp: { gt: new Date() },
      },
    });

    if (!user) {
      throw { statusCode: 400, message: 'Invalid or expired password reset token', code: 'INVALID_RESET_TOKEN' };
    }

    const passwordHash = await hashPassword(newPass);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        passwordHash,
        resetPasswordToken: null,
        resetPasswordExp: null,
      },
    });

    // Invalidate all existing sessions
    await prisma.session.updateMany({
      where: { userId: user.id },
      data: { isRevoked: true },
    });

    return true;
  }

  static async getCurrentUser(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        patient: {
          include: {
            address: true,
            emergencyContact: true,
            healthProfile: true,
          },
        },
        doctor: {
          include: {
            specialization: true,
            availabilities: true,
          },
        },
      },
    });

    if (!user) {
      throw { statusCode: 404, message: 'User not found', code: 'USER_NOT_FOUND' };
    }

    return {
      id: user.id,
      email: user.email,
      role: user.role,
      isEmailVerified: user.isEmailVerified,
      patient: user.patient,
      doctor: user.doctor,
      createdAt: user.createdAt,
    };
  }

  static async changePassword(userId: string, currentPass: string, newPass: string) {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw { statusCode: 404, message: 'User not found', code: 'USER_NOT_FOUND' };
    }

    const isMatch = await comparePassword(currentPass, user.passwordHash);
    if (!isMatch) {
      throw { statusCode: 400, message: 'Current password does not match', code: 'INCORRECT_PASSWORD' };
    }

    const passwordHash = await hashPassword(newPass);
    await prisma.user.update({
      where: { id: userId },
      data: { passwordHash },
    });

    return true;
  }
}
