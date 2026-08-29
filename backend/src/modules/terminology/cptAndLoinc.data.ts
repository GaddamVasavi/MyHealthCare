import { CPTEntry, LOINCEntry, RxNormEntry } from './types';

export const CPT_CODES_DATA: CPTEntry[] = [
  // Evaluation & Management (E/M) - Office Visits
  { code: '99202', description: 'Office/outpatient visit new patient, 15-29 minutes, straightforward medical decision making', category: 'EVALUATION_MANAGEMENT', workRvu: 0.93, totalRvu: 2.14, nationalAverageFeeUsd: 74.50, globalPeriodDays: 0 },
  { code: '99203', description: 'Office/outpatient visit new patient, 30-44 minutes, low level medical decision making', category: 'EVALUATION_MANAGEMENT', workRvu: 1.60, totalRvu: 3.28, nationalAverageFeeUsd: 114.20, globalPeriodDays: 0 },
  { code: '99204', description: 'Office/outpatient visit new patient, 45-59 minutes, moderate level medical decision making', category: 'EVALUATION_MANAGEMENT', workRvu: 2.60, totalRvu: 4.88, nationalAverageFeeUsd: 170.00, globalPeriodDays: 0 },
  { code: '99205', description: 'Office/outpatient visit new patient, 60-74 minutes, high level medical decision making', category: 'EVALUATION_MANAGEMENT', workRvu: 3.50, totalRvu: 6.42, nationalAverageFeeUsd: 224.50, globalPeriodDays: 0 },
  { code: '99212', description: 'Office/outpatient visit established patient, 10-19 minutes, straightforward MDM', category: 'EVALUATION_MANAGEMENT', workRvu: 0.70, totalRvu: 1.64, nationalAverageFeeUsd: 57.20, globalPeriodDays: 0 },
  { code: '99213', description: 'Office/outpatient visit established patient, 20-29 minutes, low level MDM', category: 'EVALUATION_MANAGEMENT', workRvu: 1.30, totalRvu: 2.68, nationalAverageFeeUsd: 93.40, globalPeriodDays: 0 },
  { code: '99214', description: 'Office/outpatient visit established patient, 30-39 minutes, moderate level MDM', category: 'EVALUATION_MANAGEMENT', workRvu: 1.92, totalRvu: 3.82, nationalAverageFeeUsd: 133.00, globalPeriodDays: 0 },
  { code: '99215', description: 'Office/outpatient visit established patient, 40-54 minutes, high level MDM', category: 'EVALUATION_MANAGEMENT', workRvu: 2.80, totalRvu: 5.24, nationalAverageFeeUsd: 182.80, globalPeriodDays: 0 },

  // Preventative Medicine
  { code: '99385', description: 'Initial comprehensive preventive medicine evaluation and management, adult 18-39 years', category: 'EVALUATION_MANAGEMENT', workRvu: 2.40, totalRvu: 4.38, nationalAverageFeeUsd: 152.80, globalPeriodDays: 0 },
  { code: '99386', description: 'Initial comprehensive preventive medicine evaluation and management, adult 40-64 years', category: 'EVALUATION_MANAGEMENT', workRvu: 2.80, totalRvu: 5.06, nationalAverageFeeUsd: 176.50, globalPeriodDays: 0 },
  { code: '99395', description: 'Periodic comprehensive preventive medicine reevaluation and management, adult 18-39 years', category: 'EVALUATION_MANAGEMENT', workRvu: 2.00, totalRvu: 3.72, nationalAverageFeeUsd: 129.80, globalPeriodDays: 0 },
  { code: '99396', description: 'Periodic comprehensive preventive medicine reevaluation and management, adult 40-64 years', category: 'EVALUATION_MANAGEMENT', workRvu: 2.30, totalRvu: 4.26, nationalAverageFeeUsd: 148.60, globalPeriodDays: 0 },

  // Radiology & Imaging Procedures
  { code: '71045', description: 'Radiologic examination, chest; single view', category: 'RADIOLOGY', workRvu: 0.18, totalRvu: 0.72, nationalAverageFeeUsd: 25.10, globalPeriodDays: 0 },
  { code: '71046', description: 'Radiologic examination, chest; 2 views (PA and lateral)', category: 'RADIOLOGY', workRvu: 0.22, totalRvu: 0.98, nationalAverageFeeUsd: 34.20, globalPeriodDays: 0 },
  { code: '70450', description: 'Computed tomography, head or brain; without contrast material', category: 'RADIOLOGY', workRvu: 0.85, totalRvu: 4.62, nationalAverageFeeUsd: 161.20, globalPeriodDays: 0 },
  { code: '74177', description: 'Computed tomography, abdomen and pelvis; with contrast material(s)', category: 'RADIOLOGY', workRvu: 1.82, totalRvu: 9.48, nationalAverageFeeUsd: 330.80, globalPeriodDays: 0 },
  { code: '77067', description: 'Screening mammography, bilateral (including CAD when performed)', category: 'RADIOLOGY', workRvu: 0.85, totalRvu: 3.92, nationalAverageFeeUsd: 136.70, globalPeriodDays: 0 },
  { code: '93306', description: 'Echocardiography, transthoracic, real-time with image documentation (2D), with spectral Doppler and color flow', category: 'MEDICINE', workRvu: 1.30, totalRvu: 6.24, nationalAverageFeeUsd: 217.70, globalPeriodDays: 0 },

  // Pathology & Laboratory Testing
  { code: '80053', description: 'Comprehensive metabolic panel (CMP)', category: 'PATHOLOGY_LAB', workRvu: 0.0, totalRvu: 0.42, nationalAverageFeeUsd: 14.65, globalPeriodDays: 0 },
  { code: '80061', description: 'Lipid panel (Total cholesterol, HDL, Triglycerides, calculated LDL)', category: 'PATHOLOGY_LAB', workRvu: 0.0, totalRvu: 0.54, nationalAverageFeeUsd: 18.85, globalPeriodDays: 0 },
  { code: '85025', description: 'Complete blood count (CBC) with automated differential', category: 'PATHOLOGY_LAB', workRvu: 0.0, totalRvu: 0.32, nationalAverageFeeUsd: 11.20, globalPeriodDays: 0 },
  { code: '83036', description: 'Hemoglobin A1c (Glycosylated hemoglobin)', category: 'PATHOLOGY_LAB', workRvu: 0.0, totalRvu: 0.40, nationalAverageFeeUsd: 13.90, globalPeriodDays: 0 },
  { code: '84443', description: 'Thyroid stimulating hormone (TSH)', category: 'PATHOLOGY_LAB', workRvu: 0.0, totalRvu: 0.65, nationalAverageFeeUsd: 22.70, globalPeriodDays: 0 },
  { code: '81003', description: 'Urinalysis, automated, without microscopy', category: 'PATHOLOGY_LAB', workRvu: 0.0, totalRvu: 0.12, nationalAverageFeeUsd: 4.20, globalPeriodDays: 0 },
];

export const LOINC_CODES_DATA: LOINCEntry[] = [
  { code: '85354-9', component: 'Blood pressure panel', property: 'Pres', timeAspect: 'Pt', system: 'Arterial system', scaleType: 'Qn', classType: 'CLIN', longCommonName: 'Blood pressure panel with all children optional', units: 'mm[Hg]' },
  { code: '8867-4', component: 'Heart rate', property: 'Freq', timeAspect: 'Pt', system: 'Heart', scaleType: 'Qn', classType: 'CLIN', longCommonName: 'Heart rate', referenceRange: '60 - 100', units: '/min' },
  { code: '8310-5', component: 'Body temperature', property: 'Temp', timeAspect: 'Pt', system: 'Body', scaleType: 'Qn', classType: 'CLIN', longCommonName: 'Body temperature', referenceRange: '36.5 - 37.5', units: 'Cel' },
  { code: '29463-7', component: 'Body weight', property: 'Mass', timeAspect: 'Pt', system: 'Body', scaleType: 'Qn', classType: 'CLIN', longCommonName: 'Body weight', units: 'kg' },
  { code: '8302-2', component: 'Body height', property: 'Len', timeAspect: 'Pt', system: 'Body', scaleType: 'Qn', classType: 'CLIN', longCommonName: 'Body height', units: 'cm' },
  { code: '39156-5', component: 'Body mass index (BMI)', property: 'Ratio', timeAspect: 'Pt', system: 'Body', scaleType: 'Qn', classType: 'CLIN', longCommonName: 'Body mass index (BMI) [Ratio]', referenceRange: '18.5 - 24.9', units: 'kg/m2' },
  { code: '2339-0', component: 'Glucose', property: 'MCnc', timeAspect: 'Pt', system: 'Bld', scaleType: 'Qn', classType: 'CHEM', longCommonName: 'Glucose [Mass/volume] in Blood', referenceRange: '70 - 99', units: 'mg/dL' },
  { code: '4548-4', component: 'Hemoglobin A1c/Hemoglobin.total', property: 'MFr', timeAspect: 'Pt', system: 'Bld', scaleType: 'Qn', classType: 'HEM/BC', longCommonName: 'Hemoglobin A1c/Hemoglobin.total in Blood', referenceRange: '4.0 - 5.6', units: '%' },
  { code: '2160-0', component: 'Creatinine', property: 'MCnc', timeAspect: 'Pt', system: 'Ser/Plas', scaleType: 'Qn', classType: 'CHEM', longCommonName: 'Creatinine [Mass/volume] in Serum or Plasma', referenceRange: '0.7 - 1.3', units: 'mg/dL' },
  { code: '3094-0', component: 'Urea nitrogen (BUN)', property: 'MCnc', timeAspect: 'Pt', system: 'Ser/Plas', scaleType: 'Qn', classType: 'CHEM', longCommonName: 'Urea nitrogen [Mass/volume] in Serum or Plasma', referenceRange: '7 - 20', units: 'mg/dL' },
  { code: '2093-3', component: 'Cholesterol', property: 'MCnc', timeAspect: 'Pt', system: 'Ser/Plas', scaleType: 'Qn', classType: 'CHEM', longCommonName: 'Cholesterol [Mass/volume] in Serum or Plasma', referenceRange: '<200', units: 'mg/dL' },
  { code: '2085-9', component: 'Cholesterol in HDL', property: 'MCnc', timeAspect: 'Pt', system: 'Ser/Plas', scaleType: 'Qn', classType: 'CHEM', longCommonName: 'Cholesterol in HDL [Mass/volume] in Serum or Plasma', referenceRange: '>40 (M), >50 (F)', units: 'mg/dL' },
  { code: '13457-7', component: 'Cholesterol in LDL', property: 'MCnc', timeAspect: 'Pt', system: 'Ser/Plas', scaleType: 'Qn', classType: 'CHEM', longCommonName: 'Cholesterol in LDL [Mass/volume] in Serum or Plasma by calculation', referenceRange: '<100', units: 'mg/dL' },
];

export const RXNORM_CODES_DATA: RxNormEntry[] = [
  { rxcui: '866414', name: 'Atorvastatin Calcium 20 MG Oral Tablet', termType: 'SCD', dosageForm: 'Oral Tablet', strength: '20 mg', route: 'Oral', activeIngredients: ['Atorvastatin'], therapeuticClass: 'HMG-CoA Reductase Inhibitor', ndcCodes: ['00071-0156-23'] },
  { rxcui: '197361', name: 'Amlodipine 5 MG Oral Tablet', termType: 'SCD', dosageForm: 'Oral Tablet', strength: '5 mg', route: 'Oral', activeIngredients: ['Amlodipine Besylate'], therapeuticClass: 'Dihydropyridine Calcium Channel Blocker', ndcCodes: ['00069-1530-68'] },
  { rxcui: '314076', name: 'Lisinopril 10 MG Oral Tablet', termType: 'SCD', dosageForm: 'Oral Tablet', strength: '10 mg', route: 'Oral', activeIngredients: ['Lisinopril'], therapeuticClass: 'ACE Inhibitor', ndcCodes: ['00777-3105-02'] },
  { rxcui: '860975', name: 'Metformin Hydrochloride 500 MG Oral Tablet', termType: 'SCD', dosageForm: 'Oral Tablet', strength: '500 mg', route: 'Oral', activeIngredients: ['Metformin'], therapeuticClass: 'Biguanide Antidiabetic', ndcCodes: ['00093-1048-01'] },
  { rxcui: '855332', name: 'Warfarin Sodium 5 MG Oral Tablet', termType: 'SCD', dosageForm: 'Oral Tablet', strength: '5 mg', route: 'Oral', activeIngredients: ['Warfarin'], therapeuticClass: 'Vitamin K Antagonist Anticoagulant', ndcCodes: ['00056-0172-70'] },
  { rxcui: '313782', name: 'Omeprazole 20 MG Delayed Release Oral Capsule', termType: 'SCD', dosageForm: 'Delayed Release Oral Capsule', strength: '20 mg', route: 'Oral', activeIngredients: ['Omeprazole'], therapeuticClass: 'Proton Pump Inhibitor', ndcCodes: ['00186-0602-31'] },
  { rxcui: '310965', name: 'Levothyroxine Sodium 0.05 MG Oral Tablet', termType: 'SCD', dosageForm: 'Oral Tablet', strength: '50 mcg', route: 'Oral', activeIngredients: ['Levothyroxine'], therapeuticClass: 'Thyroid Hormone Replacement', ndcCodes: ['00074-6594-11'] },
];
