import prisma from '../../database/prisma';
import { ECGProcessor } from './ecgProcessor';
import { CGMAnalytics } from './cgmAnalytics';
import { RemotePatientMetrics, ECGWaveformSample, CGMReading } from './types';

export class TelemetryService {
  /**
   * Synthesize & retrieve real-time streaming telemetry for a patient
   */
  public static async getPatientRemoteMonitoring(patientId: string): Promise<RemotePatientMetrics> {
    const patient = await prisma.patient.findUnique({
      where: { id: patientId },
      include: { vitals: { orderBy: { recordedAt: 'desc' }, take: 1 } },
    });

    if (!patient) {
      throw { statusCode: 404, message: 'Patient not found', code: 'NOT_FOUND' };
    }

    const latestVital = patient.vitals[0];

    // Generate realistic 10-second ECG waveform (2500 points at 250 Hz)
    const ecgSamples: ECGWaveformSample[] = [];
    const sampleRate = 250;
    const durationSec = 10;
    const baseHr = latestVital?.heartRateBpm || 72;
    const periodSamples = Math.round((60 / baseHr) * sampleRate);

    for (let i = 0; i < durationSec * sampleRate; i++) {
      const phase = (i % periodSamples) / periodSamples;
      let voltage = 0.05 * Math.sin(2 * Math.PI * 0.5 * (i / sampleRate)); // baseline wander

      // P wave
      if (phase >= 0.1 && phase <= 0.18) {
        voltage += 0.15 * Math.sin((phase - 0.1) * (Math.PI / 0.08));
      }
      // QRS Complex
      else if (phase >= 0.22 && phase <= 0.24) {
        voltage -= 0.15; // Q wave
      } else if (phase > 0.24 && phase <= 0.27) {
        voltage += 1.35 * Math.sin((phase - 0.24) * (Math.PI / 0.03)); // R peak
      } else if (phase > 0.27 && phase <= 0.29) {
        voltage -= 0.25; // S wave
      }
      // T wave
      else if (phase >= 0.38 && phase <= 0.52) {
        voltage += 0.3 * Math.sin((phase - 0.38) * (Math.PI / 0.14));
      }

      // Add mild noise
      voltage += (Math.random() - 0.5) * 0.02;

      ecgSamples.push({
        timestampMs: i * (1000 / sampleRate),
        voltageMv: Math.round(voltage * 1000) / 1000,
      });
    }

    const ecgResult = ECGProcessor.analyzeECG(ecgSamples, sampleRate);

    // Generate 14-day CGM simulation (288 readings/day)
    const cgmReadings: CGMReading[] = [];
    const baseGlucose = latestVital?.bloodGlucoseMgDl || 110;
    for (let i = 0; i < 288 * 7; i++) {
      const diurnalVariation = 25 * Math.sin((i % 288) * (2 * Math.PI / 288));
      const randomNoise = (Math.random() - 0.5) * 15;
      const val = Math.max(50, Math.min(320, Math.round(baseGlucose + diurnalVariation + randomNoise)));

      cgmReadings.push({
        timestamp: new Date(Date.now() - (288 * 7 - i) * 5 * 60 * 1000).toISOString(),
        glucoseMgDl: val,
        trendArrow: 'FLAT',
      });
    }

    const cgmResult = CGMAnalytics.processAGP(cgmReadings);

    return {
      patientId,
      deviceType: 'APPLE_WATCH',
      lastSyncTimestamp: new Date().toISOString(),
      batteryStatusPct: 88,
      dailySteps: 8420,
      activeEnergyKcal: 480,
      restingHeartRateBpm: latestVital?.heartRateBpm || 68,
      spo2AveragePct: 98.4,
      sleepDurationHours: 7.4,
      sleepQualityScorePct: 86,
      ecgSummary: ecgResult,
      cgmSummary: cgmResult,
    };
  }
}
