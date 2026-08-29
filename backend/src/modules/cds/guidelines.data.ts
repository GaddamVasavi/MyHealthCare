import { ClinicalGuidelineRule } from './types';

export const CLINICAL_GUIDELINES_DATA: ClinicalGuidelineRule[] = [
  {
    conditionCode: 'HTN-ACC-2017-01',
    conditionName: 'Stage 1 Hypertension (ACC/AHA 2017 Guidelines)',
    category: 'PHARMACOTHERAPY',
    criteria: {
      vitalThresholds: {
        systolicBp: { min: 130, max: 139 },
        diastolicBp: { min: 80, max: 89 },
      },
    },
    recommendationGrade: 'GRADE_A',
    clinicalStatement: 'For Stage 1 Hypertension with estimated 10-year CVD risk >=10%, initiate single-agent first-line antihypertensive therapy combined with non-pharmacological lifestyle interventions.',
    actionableSteps: [
      'Assess 10-year ASCVD risk score.',
      'If ASCVD >=10% or diabetes/CKD present, initiate monotherapy with Thiazide diuretic (Chlorthalidone 12.5-25mg), CCB (Amlodipine 5mg), or ACEi/ARB (Lisinopril 10mg / Losartan 50mg).',
      'If ASCVD <10%, trial non-pharmacological lifestyle therapy (DASH diet, sodium <1500mg/d, 150 min/wk aerobic exercise) for 3-6 months.',
      'Target blood pressure: <130/80 mmHg.',
    ],
    targetParameters: 'BP < 130/80 mmHg',
    citation: '2017 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults.',
  },
  {
    conditionCode: 'HTN-ACC-2017-02',
    conditionName: 'Stage 2 Hypertension (ACC/AHA 2017 Guidelines)',
    category: 'PHARMACOTHERAPY',
    criteria: {
      vitalThresholds: {
        systolicBp: { min: 140 },
        diastolicBp: { min: 90 },
      },
    },
    recommendationGrade: 'GRADE_A',
    clinicalStatement: 'For Stage 2 Hypertension (BP >= 140/90 mmHg or >20/10 mmHg over target), initiate prompt dual-combination antihypertensive therapy with two first-line agents of different classes.',
    actionableSteps: [
      'Initiate 2 first-line agents from distinct classes: (ACEi or ARB) + (Dihydropyridine CCB or Thiazide Diuretic).',
      'Do not combine ACEi and ARB together.',
      'Re-evaluate blood pressure in 4 weeks; titrate dosages or add third agent (Triple therapy: ACEi/ARB + CCB + Thiazide) if target not reached.',
    ],
    targetParameters: 'BP < 130/80 mmHg',
    citation: 'Journal of the American College of Cardiology. 2018;71(19):e127-e248.',
  },
  {
    conditionCode: 'DM-ADA-2024-01',
    conditionName: 'Type 2 Diabetes Glycemic Control (ADA 2024 Standards of Care)',
    category: 'PHARMACOTHERAPY',
    criteria: {
      labThresholds: {
        bloodGlucoseMgDl: { min: 126 },
        hba1c: { min: 6.5 },
      },
    },
    recommendationGrade: 'GRADE_A',
    clinicalStatement: 'First-line pharmacotherapy typically includes Metformin and comprehensive lifestyle management. In patients with established ASCVD, heart failure, or CKD, SGLT2 inhibitors and/or GLP-1 receptor agonists are strongly recommended regardless of baseline HbA1c.',
    actionableSteps: [
      'If eGFR >=45: Initiate Metformin 500mg daily with evening meal, titrating to 1000mg BID.',
      'If established Atherosclerotic CVD: Add GLP-1 RA with proven CVD benefit (Semaglutide, Dulaglutide) or SGLT2i (Empagliflozin, Dapagliflozin).',
      'If Heart Failure (HFrEF or HFpEF): Initiate SGLT2 inhibitor (Dapagliflozin 10mg or Empagliflozin 10mg daily).',
      'If Chronic Kidney Disease (uACR >=300 mg/g or eGFR 20-60): Initiate SGLT2 inhibitor or Finerenone.',
      'General Glycemic Target: HbA1c < 7.0% (individualized: <6.5% in young/healthy, <8.0% in elderly/frail).',
    ],
    targetParameters: 'HbA1c < 7.0%, Fasting glucose 80-130 mg/dL',
    citation: 'American Diabetes Association. Standards of Care in Diabetes—2024. Diabetes Care 2024;47(Suppl. 1):S1–S343.',
  },
  {
    conditionCode: 'HF-AHA-2022-01',
    conditionName: 'Heart Failure with Reduced Ejection Fraction (HFrEF Guideline Directed Medical Therapy - GDMT)',
    category: 'PHARMACOTHERAPY',
    criteria: {
      requiredConditions: ['HEART_FAILURE', 'REDUCED_EF'],
    },
    recommendationGrade: 'GRADE_A',
    clinicalStatement: 'Initiate Four Pillar GDMT for all patients with HFrEF (LVEF <= 40%) to reduce mortality and heart failure hospitalizations.',
    actionableSteps: [
      'Pillar 1: ARNI (Sacubitril/Valsartan) preferred over ACEi/ARB.',
      'Pillar 2: Evidence-based Beta-blocker (Carvedilol, Metoprolol Succinate, or Bisoprolol).',
      'Pillar 3: Mineralocorticoid Receptor Antagonist (Spironolactone 25mg or Eplerenone 25mg daily, if K+ <5.0 and eGFR >30).',
      'Pillar 4: SGLT2 Inhibitor (Dapagliflozin 10mg or Empagliflozin 10mg daily).',
      'Add Loop Diuretic (Furosemide / Torsemide) as needed for euvolemia.',
    ],
    targetParameters: 'NYHA Class I-II symptoms, Euvolemia, BP > 90/60 mmHg',
    citation: '2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure. Circulation. 2022;145:e895–e1032.',
  },
  {
    conditionCode: 'ASTHMA-GINA-2023-01',
    conditionName: 'Asthma Management (GINA 2023 Global Strategy)',
    category: 'PHARMACOTHERAPY',
    criteria: {
      requiredConditions: ['ASTHMA'],
    },
    recommendationGrade: 'GRADE_A',
    clinicalStatement: 'GINA no longer recommends SABA (Short-Acting Beta-Agonist) alone without inhaled corticosteroids (ICS) due to increased risk of severe exacerbations and asthma-related death.',
    actionableSteps: [
      'Track 1 (Preferred): Low-dose Inhaled Corticosteroid + Formoterol (e.g. Budesonide/Formoterol) taken as needed for symptom relief across all asthma severities.',
      'Step 3-4 (Moderate-Severe): Regular maintenance low-to-medium dose ICS-Formoterol plus as-needed reliever (SMART regimen).',
      'Verify inhaler technique and adherence at every visit.',
      'Measure peak expiratory flow (PEF) and obtain spirometry annually.',
    ],
    targetParameters: 'Well-controlled asthma symptoms, Zero emergency department visits',
    citation: 'Global Initiative for Asthma. Global Strategy for Asthma Management and Prevention, 2023.',
  },
  {
    conditionCode: 'LIPID-ACC-2018-01',
    conditionName: 'Primary & Secondary Prevention of Dyslipidemia (ACC/AHA 2018 Guidelines)',
    category: 'PHARMACOTHERAPY',
    criteria: {
      labThresholds: {
        ldlCholesterol: { min: 190 },
      },
    },
    recommendationGrade: 'GRADE_A',
    clinicalStatement: 'Severe hypercholesterolemia (LDL-C >= 190 mg/dL) represents high risk for premature atherosclerotic disease and warrants immediate maximally tolerated high-intensity statin therapy without calculating 10-year risk.',
    actionableSteps: [
      'Initiate High-Intensity Statin: Atorvastatin 40-80 mg daily or Rosuvastatin 20-40 mg daily (targets >=50% reduction in LDL-C).',
      'If LDL-C remains >= 100 mg/dL on maximally tolerated statin: Add Ezetimibe 10 mg daily.',
      'If very high risk or familial hypercholesterolemia with LDL-C >= 70 mg/dL despite Statin + Ezetimibe: Add PCSK9 inhibitor (Evolocumab or Alirocumab).',
      'Repeat lipid panel 4 to 12 weeks after statin initiation.',
    ],
    targetParameters: 'LDL-C < 70 mg/dL (or <55 mg/dL if very high risk ASCVD)',
    citation: '2018 AHA/ACC/AACVPR/AAPA/ABC/ACPM/ADA/AGS/APhA/ASPC/NLA/PCNA Guideline on the Management of Blood Cholesterol. Circulation. 2019;139:e1082–e1143.',
  },
];
