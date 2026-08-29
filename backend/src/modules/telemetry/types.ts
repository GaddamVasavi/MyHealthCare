export type WearableDeviceType = 'APPLE_WATCH' | 'FITBIT' | 'GARMIN' | 'DEXCOM_CGM' | 'FREESTYLE_LIBRE' | 'OMRON_BP' | 'WITHINGS_SCALE';

export interface ECGWaveformSample {
  timestampMs: number;
  voltageMv: number;
}

export interface ECGAnalysisResult {
  heartRateBpm: number;
  prIntervalMs: number;
  qrsDurationMs: number;
  qtIntervalMs: number;
  qtcBazettMs: number;
  rPeaksIndices: number[];
  rPeakIntervalsMs: number[];
  hrvMetrics: {
    sdnnMs: number;
    rmssdMs: number;
    pnn50Pct: number;
  };
  arrhythmiaFlags: Array<{
    type: 'ATRIAL_FIBRILLATION' | 'VENTRICULAR_TACHYCARDIA' | 'BRADYCARDIA' | 'TACHYCARDIA' | 'PVC' | 'NORMAL_SINUS_RHYTHM';
    confidencePct: number;
    description: string;
  }>;
}

export interface CGMReading {
  timestamp: string;
  glucoseMgDl: number;
  trendArrow: 'DOUBLE_UP' | 'SINGLE_UP' | 'FORTY_FIVE_UP' | 'FLAT' | 'FORTY_FIVE_DOWN' | 'SINGLE_DOWN' | 'DOUBLE_DOWN' | 'NOT_COMPUTABLE';
}

export interface CGMAnalyticsSummary {
  daysAnalyzed: number;
  readingCount: number;
  meanGlucoseMgDl: number;
  glucoseManagementIndicatorPct: number; // Estimated A1c
  glycemicVariabilityCoeffPct: number; // CV % (target <36%)
  timeInRangePct: number; // 70-180 mg/dL (target >70%)
  timeVeryHighPct: number; // >250 mg/dL (target <5%)
  timeHighPct: number; // 181-250 mg/dL
  timeLowPct: number; // 54-69 mg/dL (target <4%)
  timeVeryLowPct: number; // <54 mg/dL (target <1%)
  hypoEventsCount: number;
  clinicalInterpretation: string;
}

export interface RemotePatientMetrics {
  patientId: string;
  deviceType: WearableDeviceType;
  lastSyncTimestamp: string;
  batteryStatusPct: number;
  dailySteps: number;
  activeEnergyKcal: number;
  restingHeartRateBpm: number;
  spo2AveragePct: number;
  sleepDurationHours: number;
  sleepQualityScorePct: number;
  cgmSummary?: CGMAnalyticsSummary;
  ecgSummary?: ECGAnalysisResult;
}
