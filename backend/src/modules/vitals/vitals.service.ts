import prisma from '../../database/prisma';
import { UserRole } from '@prisma/client';

export class VitalsService {
  static async recordVitals(
    targetPatientId: string,
    data: any,
    recordedByRole: UserRole
  ) {
    let bmi: number | undefined;
    if (data.weightKg && data.heightCm) {
      const hMeters = data.heightCm / 100;
      bmi = parseFloat((data.weightKg / (hMeters * hMeters)).toFixed(1));
    }

    const vitals = await prisma.vitalSign.create({
      data: {
        patientId: targetPatientId,
        medicalRecordId: data.medicalRecordId,
        recordedAt: data.recordedAt ? new Date(data.recordedAt) : new Date(),
        heightCm: data.heightCm,
        weightKg: data.weightKg,
        bmi,
        systolicBp: data.systolicBp,
        diastolicBp: data.diastolicBp,
        heartRateBpm: data.heartRateBpm,
        respiratoryRate: data.respiratoryRate,
        temperatureCelsius: data.temperatureCelsius,
        oxygenSaturationPct: data.oxygenSaturationPct,
        bloodGlucoseMgDl: data.bloodGlucoseMgDl,
        notes: data.notes,
        recordedByRole,
      },
    });

    // Update patient current weight & height in profile
    if (data.weightKg || data.heightCm) {
      await prisma.patient.update({
        where: { id: targetPatientId },
        data: {
          weightKg: data.weightKg || undefined,
          heightCm: data.heightCm || undefined,
        },
      });
    }

    return vitals;
  }

  static async getPatientVitalsHistory(targetPatientId: string, limit = 50) {
    return prisma.vitalSign.findMany({
      where: { patientId: targetPatientId },
      orderBy: { recordedAt: 'desc' },
      take: limit,
    });
  }

  static async getVitalsTrends(targetPatientId: string, days = 90) {
    const fromDate = new Date();
    fromDate.setDate(fromDate.getDate() - days);

    const vitals = await prisma.vitalSign.findMany({
      where: {
        patientId: targetPatientId,
        recordedAt: { gte: fromDate },
      },
      orderBy: { recordedAt: 'asc' },
    });

    const weightTrend = vitals
      .filter((v) => v.weightKg !== null)
      .map((v) => ({ date: v.recordedAt.toISOString().split('T')[0], value: v.weightKg, bmi: v.bmi }));

    const bpTrend = vitals
      .filter((v) => v.systolicBp !== null && v.diastolicBp !== null)
      .map((v) => ({
        date: v.recordedAt.toISOString().split('T')[0],
        systolic: v.systolicBp,
        diastolic: v.diastolicBp,
      }));

    const heartRateTrend = vitals
      .filter((v) => v.heartRateBpm !== null)
      .map((v) => ({ date: v.recordedAt.toISOString().split('T')[0], heartRate: v.heartRateBpm }));

    const glucoseTrend = vitals
      .filter((v) => v.bloodGlucoseMgDl !== null)
      .map((v) => ({ date: v.recordedAt.toISOString().split('T')[0], glucose: v.bloodGlucoseMgDl }));

    return {
      weightTrend,
      bpTrend,
      heartRateTrend,
      glucoseTrend,
    };
  }
}
