export interface HEDISMeasureResult {
  measureCode: string;
  measureName: string;
  domain: 'EFFECTIVENESS_OF_CARE' | 'ACCESS_AVAILABILITY' | 'UTILIZATION';
  eligiblePopulation: number;
  numeratorCompliant: number;
  performanceRatePct: number;
  benchmarkTargetPct: number;
  gapCount: number;
  status: 'ABOVE_BENCHMARK' | 'ON_TRACK' | 'REQUIRES_IMPROVEMENT' | 'CRITICAL_GAP';
}

export interface PatientCareGap {
  patientId: string;
  patientName: string;
  phone: string;
  measureCode: string;
  gapDescription: string;
  recommendedAction: string;
  dueDate: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
}

export interface ChronicDiseaseRegistrySummary {
  condition: string;
  prevalenceCount: number;
  prevalenceRatePct: number;
  controlledCount: number;
  controlledRatePct: number;
  highRiskCount: number;
}
