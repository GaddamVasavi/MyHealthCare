export interface ICD10Entry {
  code: string;
  description: string;
  category: string;
  chapter: string;
  isBillable: boolean;
  hccCategory?: string; // Hierarchical Condition Category for risk adjustment
}

export interface CPTEntry {
  code: string;
  description: string;
  category: 'EVALUATION_MANAGEMENT' | 'SURGERY' | 'RADIOLOGY' | 'PATHOLOGY_LAB' | 'MEDICINE' | 'ANESTHESIA';
  workRvu: number; // Work Relative Value Units
  totalRvu: number;
  nationalAverageFeeUsd: number;
  globalPeriodDays: number;
}

export interface LOINCEntry {
  code: string;
  component: string;
  property: string;
  timeAspect: string;
  system: string;
  scaleType: 'Qn' | 'Ord' | 'Nom';
  methodType?: string;
  classType: 'HEM/BC' | 'CHEM' | 'MICRO' | 'TOX' | 'RAD' | 'CLIN';
  longCommonName: string;
  referenceRange?: string;
  units?: string;
}

export interface RxNormEntry {
  rxcui: string;
  name: string;
  termType: 'SCD' | 'SBD' | 'GPCK' | 'BPCK' | 'IN' | 'PIN';
  dosageForm: string;
  strength: string;
  route: string;
  activeIngredients: string[];
  therapeuticClass: string;
  ndcCodes: string[];
}
