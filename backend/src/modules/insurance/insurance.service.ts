import prisma from '../../database/prisma';
import crypto from 'crypto';
import { ClaimStatus } from '@prisma/client';

export class InsuranceService {
  static async getProviders() {
    return prisma.insuranceProvider.findMany({
      where: { isActive: true },
      orderBy: { name: 'asc' },
    });
  }

  static async createProvider(data: any) {
    return prisma.insuranceProvider.create({
      data: {
        name: data.name,
        contactNumber: data.contactNumber,
        email: data.email,
        address: data.address,
      },
    });
  }

  static async addPatientPolicy(patientId: string, data: any) {
    return prisma.insurancePolicy.create({
      data: {
        patientId,
        providerId: data.providerId,
        policyNumber: data.policyNumber,
        policyType: data.policyType || 'COMPREHENSIVE',
        coverageAmount: data.coverageAmount,
        startDate: new Date(data.startDate),
        expirationDate: new Date(data.expirationDate),
      },
      include: {
        provider: true,
      },
    });
  }

  static async getPatientPolicies(patientId: string) {
    return prisma.insurancePolicy.findMany({
      where: { patientId },
      include: {
        provider: true,
        claims: { orderBy: { submittedDate: 'desc' } },
      },
    });
  }

  static async submitClaim(patientId: string, data: any) {
    const claimNumber = `CLM-${Date.now().toString().slice(-6)}-${crypto.randomBytes(2).toString('hex').toUpperCase()}`;

    return prisma.insuranceClaim.create({
      data: {
        claimNumber,
        patientId,
        policyId: data.policyId,
        claimAmount: data.claimAmount,
        claimReason: data.claimReason,
        documentsUrl: data.documentsUrl,
        status: ClaimStatus.SUBMITTED,
      },
      include: {
        policy: { include: { provider: true } },
      },
    });
  }

  static async adjudicateClaim(claimId: string, status: ClaimStatus, approvedAmount?: number, denialReason?: string) {
    return prisma.insuranceClaim.update({
      where: { id: claimId },
      data: {
        status,
        approvedAmount: approvedAmount || undefined,
        denialReason: denialReason || undefined,
        adjudicatedDate: new Date(),
      },
      include: {
        patient: { include: { user: true } },
        policy: { include: { provider: true } },
      },
    });
  }

  static async listClaims(query: any, userRole: string, patientId?: string) {
    const { status, page = 1, limit = 10 } = query;
    const pageNum = parseInt(page as string, 10);
    const limitNum = parseInt(limit as string, 10);
    const skip = (pageNum - 1) * limitNum;

    const where: any = {};
    if (userRole === 'PATIENT') {
      where.patientId = patientId;
    }

    if (status) {
      where.status = status;
    }

    const [total, claims] = await Promise.all([
      prisma.insuranceClaim.count({ where }),
      prisma.insuranceClaim.findMany({
        where,
        include: {
          patient: true,
          policy: { include: { provider: true } },
        },
        orderBy: { submittedDate: 'desc' },
        skip,
        take: limitNum,
      }),
    ]);

    return {
      claims,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages: Math.ceil(total / limitNum),
      },
    };
  }
}
