export type InteractionSeverity = 'CONTRAINDICATED' | 'MAJOR' | 'MODERATE' | 'MINOR';

export interface DrugInteractionRule {
  drugA: string;
  drugB: string;
  genericA: string;
  genericB: string;
  severity: InteractionSeverity;
  mechanism: string;
  clinicalEffect: string;
  management: string;
  evidenceLevel: 'ESTABLISHED' | 'PROBABLE' | 'SUSPECTED' | 'THEORETICAL';
  alternatives: string[];
}

export interface AllergyCrossReactivityRule {
  allergenClass: string;
  relatedDrugClasses: string[];
  crossReactivityRatePct: number;
  mechanism: string;
  clinicalPresentation: string[];
  safeAlternatives: string[];
}

export interface ClinicalCalculatorInput {
  patientAge: number;
  gender: 'MALE' | 'FEMALE' | 'OTHER';
  systolicBp?: number;
  diastolicBp?: number;
  totalCholesterol?: number;
  hdlCholesterol?: number;
  ldlCholesterol?: number;
  isSmoker?: boolean;
  hasDiabetes?: boolean;
  isHypertensiveTreated?: boolean;
  serumCreatinineMgDl?: number;
  serumBilirubinMgDl?: number;
  serumSodiumMeqL?: number;
  inr?: number;
  hasAscites?: boolean;
  hasEncephalopathy?: boolean;
  albuminGDl?: number;
  respiratoryRateBpm?: number;
  bloodUreaNitrogenMgDl?: number;
  isConfused?: boolean;
  heartFailureHistory?: boolean;
  priorStrokeTiaHistory?: boolean;
  vascularDiseaseHistory?: boolean;
  weightKg?: number;
  heightCm?: number;
  temperatureCelsius?: number;
  pao2Mmhg?: number;
  fio2?: number;
  plateletsPerMicroliter?: number;
  meanArterialPressureMmhg?: number;
  glasgowComaScale?: number;
  phq9Answers?: number[];
  gad7Answers?: number[];
}

export interface ClinicalScoreResult {
  calculatorName: string;
  score: number;
  riskCategory: 'LOW' | 'MODERATE' | 'HIGH' | 'VERY_HIGH' | 'CRITICAL';
  interpretation: string;
  recommendations: string[];
  references: string[];
}

export interface ClinicalGuidelineRule {
  conditionCode: string;
  conditionName: string;
  category: 'PREVENTION' | 'DIAGNOSTIC' | 'PHARMACOTHERAPY' | 'MONITORING';
  criteria: {
    minAge?: number;
    maxAge?: number;
    gender?: 'MALE' | 'FEMALE';
    vitalThresholds?: Record<string, { min?: number; max?: number }>;
    labThresholds?: Record<string, { min?: number; max?: number }>;
    requiredConditions?: string[];
  };
  recommendationGrade: 'GRADE_A' | 'GRADE_B' | 'GRADE_C' | 'EXPERT_OPINION';
  clinicalStatement: string;
  actionableSteps: string[];
  targetParameters: string;
  citation: string;
}

export interface CDSAnalysisRequest {
  patientId: string;
  medications?: string[];
  vitals?: {
    systolicBp?: number;
    diastolicBp?: number;
    heartRateBpm?: number;
    bloodGlucoseMgDl?: number;
    temperatureCelsius?: number;
    oxygenSaturationPct?: number;
    weightKg?: number;
    heightCm?: number;
  };
  diagnoses?: string[];
  allergies?: string[];
  labs?: Array<{ testName: string; resultValue: number; unit?: string }>;
}

export interface CDSAnalysisResponse {
  patientId: string;
  timestamp: string;
  interactionsDetected: DrugInteractionRule[];
  allergyWarnings: AllergyCrossReactivityRule[];
  vitalAlerts: Array<{ param: string; value: number; status: 'CRITICAL_HIGH' | 'HIGH' | 'LOW' | 'CRITICAL_LOW'; advisory: string }>;
  guidelineAdvisories: ClinicalGuidelineRule[];
  calculatedRiskScores: ClinicalScoreResult[];
  overallRiskLevel: 'LOW' | 'MODERATE' | 'HIGH' | 'CRITICAL';
  suggestedClinicalActions: string[];
}
