import { api } from './api';
import { ApiResponse } from '../types';

export interface RemotePatientMetrics {
  patientId: string;
  deviceType: string;
  lastSyncTimestamp: string;
  batteryStatusPct: number;
  dailySteps: number;
  activeEnergyKcal: number;
  restingHeartRateBpm: number;
  spo2AveragePct: number;
  sleepDurationHours: number;
  sleepQualityScorePct: number;
  cgmSummary?: {
    daysAnalyzed: number;
    readingCount: number;
    meanGlucoseMgDl: number;
    glucoseManagementIndicatorPct: number;
    glycemicVariabilityCoeffPct: number;
    timeInRangePct: number;
    timeHighPct: number;
    timeLowPct: number;
    clinicalInterpretation: string;
  };
  ecgSummary?: {
    heartRateBpm: number;
    prIntervalMs: number;
    qrsDurationMs: number;
    qtcBazettMs: number;
    hrvMetrics: {
      sdnnMs: number;
      rmssdMs: number;
    };
    arrhythmiaFlags: Array<{
      type: string;
      confidencePct: number;
      description: string;
    }>;
  };
}

export const telemetryService = {
  async getMyTelemetry(): Promise<ApiResponse<RemotePatientMetrics>> {
    const res = await api.get<ApiResponse<RemotePatientMetrics>>('/telemetry/my');
    return res.data;
  },

  async getPatientTelemetry(patientId: string): Promise<ApiResponse<RemotePatientMetrics>> {
    const res = await api.get<ApiResponse<RemotePatientMetrics>>(`/telemetry/patient/${patientId}`);
    return res.data;
  },
};
