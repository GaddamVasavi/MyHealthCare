// Clinical Practice Pathways and Standardized Hospital Protocols
export interface ClinicalProtocol {
  protocolId: string;
  protocolName: string;
  acuityLevel: 'EMERGENCY_CODE' | 'URGENT' | 'ROUTINE_INPATIENT' | 'AMBULATORY';
  targetDiagnosis: string;
  initiatingTriggers: string[];
  inclusionCriteria: string[];
  exclusionCriteria: string[];
  immediateActionChecklist: string[];
  medicationOrders: Array<{
    medication: string;
    dose: string;
    route: string;
    frequency: string;
    timing: string;
  }>;
  diagnosticWorkup: string[];
  nursingInterventions: string[];
  escalationTriggers: string[];
  dischargeOrStepDownCriteria: string[];
  guidelineOrigin: string;
}

export const CLINICAL_PROTOCOLS_DATA: ClinicalProtocol[] = [
  {
    protocolId: 'CP-STEMI-01-SUB1',
    protocolName: 'ST-Elevation Myocardial Infarction (STEMI) Rapid Reperfusion Pathway - Tier 1',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute STEMI (I21.0-I21.3)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 1',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute stemi (i21.0-i21.3)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STEMI-01-SUB2',
    protocolName: 'ST-Elevation Myocardial Infarction (STEMI) Rapid Reperfusion Pathway - Tier 2',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute STEMI (I21.0-I21.3)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 2',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute stemi (i21.0-i21.3)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STEMI-01-SUB3',
    protocolName: 'ST-Elevation Myocardial Infarction (STEMI) Rapid Reperfusion Pathway - Tier 3',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute STEMI (I21.0-I21.3)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 3',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute stemi (i21.0-i21.3)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STEMI-01-SUB4',
    protocolName: 'ST-Elevation Myocardial Infarction (STEMI) Rapid Reperfusion Pathway - Tier 4',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute STEMI (I21.0-I21.3)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 4',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute stemi (i21.0-i21.3)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STEMI-01-SUB5',
    protocolName: 'ST-Elevation Myocardial Infarction (STEMI) Rapid Reperfusion Pathway - Tier 5',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute STEMI (I21.0-I21.3)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 5',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute stemi (i21.0-i21.3)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STEMI-01-SUB6',
    protocolName: 'ST-Elevation Myocardial Infarction (STEMI) Rapid Reperfusion Pathway - Tier 6',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute STEMI (I21.0-I21.3)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 6',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute stemi (i21.0-i21.3)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STEMI-01-SUB7',
    protocolName: 'ST-Elevation Myocardial Infarction (STEMI) Rapid Reperfusion Pathway - Tier 7',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute STEMI (I21.0-I21.3)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 7',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute stemi (i21.0-i21.3)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STEMI-01-SUB8',
    protocolName: 'ST-Elevation Myocardial Infarction (STEMI) Rapid Reperfusion Pathway - Tier 8',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute STEMI (I21.0-I21.3)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 8',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute stemi (i21.0-i21.3)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STEMI-01-SUB9',
    protocolName: 'ST-Elevation Myocardial Infarction (STEMI) Rapid Reperfusion Pathway - Tier 9',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute STEMI (I21.0-I21.3)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 9',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute stemi (i21.0-i21.3)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STEMI-01-SUB10',
    protocolName: 'ST-Elevation Myocardial Infarction (STEMI) Rapid Reperfusion Pathway - Tier 10',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute STEMI (I21.0-I21.3)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 10',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute stemi (i21.0-i21.3)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STEMI-01-SUB11',
    protocolName: 'ST-Elevation Myocardial Infarction (STEMI) Rapid Reperfusion Pathway - Tier 11',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute STEMI (I21.0-I21.3)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 11',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute stemi (i21.0-i21.3)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STEMI-01-SUB12',
    protocolName: 'ST-Elevation Myocardial Infarction (STEMI) Rapid Reperfusion Pathway - Tier 12',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute STEMI (I21.0-I21.3)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 12',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute stemi (i21.0-i21.3)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STEMI-01-SUB13',
    protocolName: 'ST-Elevation Myocardial Infarction (STEMI) Rapid Reperfusion Pathway - Tier 13',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute STEMI (I21.0-I21.3)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 13',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute stemi (i21.0-i21.3)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STEMI-01-SUB14',
    protocolName: 'ST-Elevation Myocardial Infarction (STEMI) Rapid Reperfusion Pathway - Tier 14',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute STEMI (I21.0-I21.3)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 14',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute stemi (i21.0-i21.3)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STEMI-01-SUB15',
    protocolName: 'ST-Elevation Myocardial Infarction (STEMI) Rapid Reperfusion Pathway - Tier 15',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute STEMI (I21.0-I21.3)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 15',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute stemi (i21.0-i21.3)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STEMI-01-SUB16',
    protocolName: 'ST-Elevation Myocardial Infarction (STEMI) Rapid Reperfusion Pathway - Tier 16',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute STEMI (I21.0-I21.3)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 16',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute stemi (i21.0-i21.3)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STEMI-01-SUB17',
    protocolName: 'ST-Elevation Myocardial Infarction (STEMI) Rapid Reperfusion Pathway - Tier 17',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute STEMI (I21.0-I21.3)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 17',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute stemi (i21.0-i21.3)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STEMI-01-SUB18',
    protocolName: 'ST-Elevation Myocardial Infarction (STEMI) Rapid Reperfusion Pathway - Tier 18',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute STEMI (I21.0-I21.3)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 18',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute stemi (i21.0-i21.3)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STEMI-01-SUB19',
    protocolName: 'ST-Elevation Myocardial Infarction (STEMI) Rapid Reperfusion Pathway - Tier 19',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute STEMI (I21.0-I21.3)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 19',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute stemi (i21.0-i21.3)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STEMI-01-SUB20',
    protocolName: 'ST-Elevation Myocardial Infarction (STEMI) Rapid Reperfusion Pathway - Tier 20',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute STEMI (I21.0-I21.3)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 20',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute stemi (i21.0-i21.3)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STEMI-01-SUB21',
    protocolName: 'ST-Elevation Myocardial Infarction (STEMI) Rapid Reperfusion Pathway - Tier 21',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute STEMI (I21.0-I21.3)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 21',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute stemi (i21.0-i21.3)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STEMI-01-SUB22',
    protocolName: 'ST-Elevation Myocardial Infarction (STEMI) Rapid Reperfusion Pathway - Tier 22',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute STEMI (I21.0-I21.3)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 22',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute stemi (i21.0-i21.3)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STEMI-01-SUB23',
    protocolName: 'ST-Elevation Myocardial Infarction (STEMI) Rapid Reperfusion Pathway - Tier 23',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute STEMI (I21.0-I21.3)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 23',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute stemi (i21.0-i21.3)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STEMI-01-SUB24',
    protocolName: 'ST-Elevation Myocardial Infarction (STEMI) Rapid Reperfusion Pathway - Tier 24',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute STEMI (I21.0-I21.3)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 24',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute stemi (i21.0-i21.3)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STEMI-01-SUB25',
    protocolName: 'ST-Elevation Myocardial Infarction (STEMI) Rapid Reperfusion Pathway - Tier 25',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute STEMI (I21.0-I21.3)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 25',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute stemi (i21.0-i21.3)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STROKE-01-SUB1',
    protocolName: 'Acute Ischemic Stroke Thrombolysis & Thrombectomy Code Protocol - Tier 1',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute Ischemic Stroke (I63.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 1',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute ischemic stroke (i63.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STROKE-01-SUB2',
    protocolName: 'Acute Ischemic Stroke Thrombolysis & Thrombectomy Code Protocol - Tier 2',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute Ischemic Stroke (I63.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 2',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute ischemic stroke (i63.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STROKE-01-SUB3',
    protocolName: 'Acute Ischemic Stroke Thrombolysis & Thrombectomy Code Protocol - Tier 3',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute Ischemic Stroke (I63.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 3',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute ischemic stroke (i63.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STROKE-01-SUB4',
    protocolName: 'Acute Ischemic Stroke Thrombolysis & Thrombectomy Code Protocol - Tier 4',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute Ischemic Stroke (I63.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 4',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute ischemic stroke (i63.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STROKE-01-SUB5',
    protocolName: 'Acute Ischemic Stroke Thrombolysis & Thrombectomy Code Protocol - Tier 5',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute Ischemic Stroke (I63.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 5',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute ischemic stroke (i63.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STROKE-01-SUB6',
    protocolName: 'Acute Ischemic Stroke Thrombolysis & Thrombectomy Code Protocol - Tier 6',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute Ischemic Stroke (I63.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 6',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute ischemic stroke (i63.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STROKE-01-SUB7',
    protocolName: 'Acute Ischemic Stroke Thrombolysis & Thrombectomy Code Protocol - Tier 7',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute Ischemic Stroke (I63.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 7',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute ischemic stroke (i63.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STROKE-01-SUB8',
    protocolName: 'Acute Ischemic Stroke Thrombolysis & Thrombectomy Code Protocol - Tier 8',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute Ischemic Stroke (I63.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 8',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute ischemic stroke (i63.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STROKE-01-SUB9',
    protocolName: 'Acute Ischemic Stroke Thrombolysis & Thrombectomy Code Protocol - Tier 9',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute Ischemic Stroke (I63.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 9',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute ischemic stroke (i63.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STROKE-01-SUB10',
    protocolName: 'Acute Ischemic Stroke Thrombolysis & Thrombectomy Code Protocol - Tier 10',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute Ischemic Stroke (I63.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 10',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute ischemic stroke (i63.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STROKE-01-SUB11',
    protocolName: 'Acute Ischemic Stroke Thrombolysis & Thrombectomy Code Protocol - Tier 11',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute Ischemic Stroke (I63.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 11',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute ischemic stroke (i63.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STROKE-01-SUB12',
    protocolName: 'Acute Ischemic Stroke Thrombolysis & Thrombectomy Code Protocol - Tier 12',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute Ischemic Stroke (I63.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 12',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute ischemic stroke (i63.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STROKE-01-SUB13',
    protocolName: 'Acute Ischemic Stroke Thrombolysis & Thrombectomy Code Protocol - Tier 13',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute Ischemic Stroke (I63.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 13',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute ischemic stroke (i63.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STROKE-01-SUB14',
    protocolName: 'Acute Ischemic Stroke Thrombolysis & Thrombectomy Code Protocol - Tier 14',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute Ischemic Stroke (I63.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 14',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute ischemic stroke (i63.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STROKE-01-SUB15',
    protocolName: 'Acute Ischemic Stroke Thrombolysis & Thrombectomy Code Protocol - Tier 15',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute Ischemic Stroke (I63.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 15',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute ischemic stroke (i63.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STROKE-01-SUB16',
    protocolName: 'Acute Ischemic Stroke Thrombolysis & Thrombectomy Code Protocol - Tier 16',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute Ischemic Stroke (I63.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 16',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute ischemic stroke (i63.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STROKE-01-SUB17',
    protocolName: 'Acute Ischemic Stroke Thrombolysis & Thrombectomy Code Protocol - Tier 17',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute Ischemic Stroke (I63.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 17',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute ischemic stroke (i63.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STROKE-01-SUB18',
    protocolName: 'Acute Ischemic Stroke Thrombolysis & Thrombectomy Code Protocol - Tier 18',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute Ischemic Stroke (I63.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 18',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute ischemic stroke (i63.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STROKE-01-SUB19',
    protocolName: 'Acute Ischemic Stroke Thrombolysis & Thrombectomy Code Protocol - Tier 19',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute Ischemic Stroke (I63.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 19',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute ischemic stroke (i63.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STROKE-01-SUB20',
    protocolName: 'Acute Ischemic Stroke Thrombolysis & Thrombectomy Code Protocol - Tier 20',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute Ischemic Stroke (I63.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 20',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute ischemic stroke (i63.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STROKE-01-SUB21',
    protocolName: 'Acute Ischemic Stroke Thrombolysis & Thrombectomy Code Protocol - Tier 21',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute Ischemic Stroke (I63.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 21',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute ischemic stroke (i63.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STROKE-01-SUB22',
    protocolName: 'Acute Ischemic Stroke Thrombolysis & Thrombectomy Code Protocol - Tier 22',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute Ischemic Stroke (I63.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 22',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute ischemic stroke (i63.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STROKE-01-SUB23',
    protocolName: 'Acute Ischemic Stroke Thrombolysis & Thrombectomy Code Protocol - Tier 23',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute Ischemic Stroke (I63.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 23',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute ischemic stroke (i63.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STROKE-01-SUB24',
    protocolName: 'Acute Ischemic Stroke Thrombolysis & Thrombectomy Code Protocol - Tier 24',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute Ischemic Stroke (I63.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 24',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute ischemic stroke (i63.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-STROKE-01-SUB25',
    protocolName: 'Acute Ischemic Stroke Thrombolysis & Thrombectomy Code Protocol - Tier 25',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Acute Ischemic Stroke (I63.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 25',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with acute ischemic stroke (i63.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-SEPSIS-01-SUB1',
    protocolName: 'Surviving Sepsis Campaign 1-Hour Resuscitation Bundle - Tier 1',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Sepsis / Septic Shock (R65.20 / R65.21)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 1',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with sepsis / septic shock (r65.20 / r65.21)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-SEPSIS-01-SUB2',
    protocolName: 'Surviving Sepsis Campaign 1-Hour Resuscitation Bundle - Tier 2',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Sepsis / Septic Shock (R65.20 / R65.21)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 2',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with sepsis / septic shock (r65.20 / r65.21)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-SEPSIS-01-SUB3',
    protocolName: 'Surviving Sepsis Campaign 1-Hour Resuscitation Bundle - Tier 3',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Sepsis / Septic Shock (R65.20 / R65.21)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 3',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with sepsis / septic shock (r65.20 / r65.21)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-SEPSIS-01-SUB4',
    protocolName: 'Surviving Sepsis Campaign 1-Hour Resuscitation Bundle - Tier 4',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Sepsis / Septic Shock (R65.20 / R65.21)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 4',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with sepsis / septic shock (r65.20 / r65.21)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-SEPSIS-01-SUB5',
    protocolName: 'Surviving Sepsis Campaign 1-Hour Resuscitation Bundle - Tier 5',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Sepsis / Septic Shock (R65.20 / R65.21)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 5',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with sepsis / septic shock (r65.20 / r65.21)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-SEPSIS-01-SUB6',
    protocolName: 'Surviving Sepsis Campaign 1-Hour Resuscitation Bundle - Tier 6',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Sepsis / Septic Shock (R65.20 / R65.21)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 6',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with sepsis / septic shock (r65.20 / r65.21)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-SEPSIS-01-SUB7',
    protocolName: 'Surviving Sepsis Campaign 1-Hour Resuscitation Bundle - Tier 7',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Sepsis / Septic Shock (R65.20 / R65.21)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 7',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with sepsis / septic shock (r65.20 / r65.21)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-SEPSIS-01-SUB8',
    protocolName: 'Surviving Sepsis Campaign 1-Hour Resuscitation Bundle - Tier 8',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Sepsis / Septic Shock (R65.20 / R65.21)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 8',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with sepsis / septic shock (r65.20 / r65.21)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-SEPSIS-01-SUB9',
    protocolName: 'Surviving Sepsis Campaign 1-Hour Resuscitation Bundle - Tier 9',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Sepsis / Septic Shock (R65.20 / R65.21)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 9',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with sepsis / septic shock (r65.20 / r65.21)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-SEPSIS-01-SUB10',
    protocolName: 'Surviving Sepsis Campaign 1-Hour Resuscitation Bundle - Tier 10',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Sepsis / Septic Shock (R65.20 / R65.21)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 10',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with sepsis / septic shock (r65.20 / r65.21)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-SEPSIS-01-SUB11',
    protocolName: 'Surviving Sepsis Campaign 1-Hour Resuscitation Bundle - Tier 11',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Sepsis / Septic Shock (R65.20 / R65.21)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 11',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with sepsis / septic shock (r65.20 / r65.21)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-SEPSIS-01-SUB12',
    protocolName: 'Surviving Sepsis Campaign 1-Hour Resuscitation Bundle - Tier 12',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Sepsis / Septic Shock (R65.20 / R65.21)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 12',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with sepsis / septic shock (r65.20 / r65.21)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-SEPSIS-01-SUB13',
    protocolName: 'Surviving Sepsis Campaign 1-Hour Resuscitation Bundle - Tier 13',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Sepsis / Septic Shock (R65.20 / R65.21)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 13',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with sepsis / septic shock (r65.20 / r65.21)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-SEPSIS-01-SUB14',
    protocolName: 'Surviving Sepsis Campaign 1-Hour Resuscitation Bundle - Tier 14',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Sepsis / Septic Shock (R65.20 / R65.21)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 14',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with sepsis / septic shock (r65.20 / r65.21)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-SEPSIS-01-SUB15',
    protocolName: 'Surviving Sepsis Campaign 1-Hour Resuscitation Bundle - Tier 15',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Sepsis / Septic Shock (R65.20 / R65.21)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 15',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with sepsis / septic shock (r65.20 / r65.21)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-SEPSIS-01-SUB16',
    protocolName: 'Surviving Sepsis Campaign 1-Hour Resuscitation Bundle - Tier 16',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Sepsis / Septic Shock (R65.20 / R65.21)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 16',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with sepsis / septic shock (r65.20 / r65.21)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-SEPSIS-01-SUB17',
    protocolName: 'Surviving Sepsis Campaign 1-Hour Resuscitation Bundle - Tier 17',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Sepsis / Septic Shock (R65.20 / R65.21)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 17',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with sepsis / septic shock (r65.20 / r65.21)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-SEPSIS-01-SUB18',
    protocolName: 'Surviving Sepsis Campaign 1-Hour Resuscitation Bundle - Tier 18',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Sepsis / Septic Shock (R65.20 / R65.21)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 18',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with sepsis / septic shock (r65.20 / r65.21)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-SEPSIS-01-SUB19',
    protocolName: 'Surviving Sepsis Campaign 1-Hour Resuscitation Bundle - Tier 19',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Sepsis / Septic Shock (R65.20 / R65.21)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 19',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with sepsis / septic shock (r65.20 / r65.21)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-SEPSIS-01-SUB20',
    protocolName: 'Surviving Sepsis Campaign 1-Hour Resuscitation Bundle - Tier 20',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Sepsis / Septic Shock (R65.20 / R65.21)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 20',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with sepsis / septic shock (r65.20 / r65.21)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-SEPSIS-01-SUB21',
    protocolName: 'Surviving Sepsis Campaign 1-Hour Resuscitation Bundle - Tier 21',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Sepsis / Septic Shock (R65.20 / R65.21)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 21',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with sepsis / septic shock (r65.20 / r65.21)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-SEPSIS-01-SUB22',
    protocolName: 'Surviving Sepsis Campaign 1-Hour Resuscitation Bundle - Tier 22',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Sepsis / Septic Shock (R65.20 / R65.21)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 22',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with sepsis / septic shock (r65.20 / r65.21)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-SEPSIS-01-SUB23',
    protocolName: 'Surviving Sepsis Campaign 1-Hour Resuscitation Bundle - Tier 23',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Sepsis / Septic Shock (R65.20 / R65.21)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 23',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with sepsis / septic shock (r65.20 / r65.21)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-SEPSIS-01-SUB24',
    protocolName: 'Surviving Sepsis Campaign 1-Hour Resuscitation Bundle - Tier 24',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Sepsis / Septic Shock (R65.20 / R65.21)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 24',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with sepsis / septic shock (r65.20 / r65.21)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-SEPSIS-01-SUB25',
    protocolName: 'Surviving Sepsis Campaign 1-Hour Resuscitation Bundle - Tier 25',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Sepsis / Septic Shock (R65.20 / R65.21)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 25',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with sepsis / septic shock (r65.20 / r65.21)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-DKA-01-SUB1',
    protocolName: 'Diabetic Ketoacidosis (DKA) Insulin Infusion & Electrolyte Protocol - Tier 1',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'DKA (E10.10 / E11.10)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 1',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with dka (e10.10 / e11.10)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-DKA-01-SUB2',
    protocolName: 'Diabetic Ketoacidosis (DKA) Insulin Infusion & Electrolyte Protocol - Tier 2',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'DKA (E10.10 / E11.10)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 2',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with dka (e10.10 / e11.10)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-DKA-01-SUB3',
    protocolName: 'Diabetic Ketoacidosis (DKA) Insulin Infusion & Electrolyte Protocol - Tier 3',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'DKA (E10.10 / E11.10)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 3',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with dka (e10.10 / e11.10)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-DKA-01-SUB4',
    protocolName: 'Diabetic Ketoacidosis (DKA) Insulin Infusion & Electrolyte Protocol - Tier 4',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'DKA (E10.10 / E11.10)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 4',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with dka (e10.10 / e11.10)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-DKA-01-SUB5',
    protocolName: 'Diabetic Ketoacidosis (DKA) Insulin Infusion & Electrolyte Protocol - Tier 5',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'DKA (E10.10 / E11.10)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 5',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with dka (e10.10 / e11.10)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-DKA-01-SUB6',
    protocolName: 'Diabetic Ketoacidosis (DKA) Insulin Infusion & Electrolyte Protocol - Tier 6',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'DKA (E10.10 / E11.10)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 6',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with dka (e10.10 / e11.10)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-DKA-01-SUB7',
    protocolName: 'Diabetic Ketoacidosis (DKA) Insulin Infusion & Electrolyte Protocol - Tier 7',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'DKA (E10.10 / E11.10)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 7',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with dka (e10.10 / e11.10)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-DKA-01-SUB8',
    protocolName: 'Diabetic Ketoacidosis (DKA) Insulin Infusion & Electrolyte Protocol - Tier 8',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'DKA (E10.10 / E11.10)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 8',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with dka (e10.10 / e11.10)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-DKA-01-SUB9',
    protocolName: 'Diabetic Ketoacidosis (DKA) Insulin Infusion & Electrolyte Protocol - Tier 9',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'DKA (E10.10 / E11.10)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 9',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with dka (e10.10 / e11.10)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-DKA-01-SUB10',
    protocolName: 'Diabetic Ketoacidosis (DKA) Insulin Infusion & Electrolyte Protocol - Tier 10',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'DKA (E10.10 / E11.10)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 10',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with dka (e10.10 / e11.10)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-DKA-01-SUB11',
    protocolName: 'Diabetic Ketoacidosis (DKA) Insulin Infusion & Electrolyte Protocol - Tier 11',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'DKA (E10.10 / E11.10)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 11',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with dka (e10.10 / e11.10)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-DKA-01-SUB12',
    protocolName: 'Diabetic Ketoacidosis (DKA) Insulin Infusion & Electrolyte Protocol - Tier 12',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'DKA (E10.10 / E11.10)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 12',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with dka (e10.10 / e11.10)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-DKA-01-SUB13',
    protocolName: 'Diabetic Ketoacidosis (DKA) Insulin Infusion & Electrolyte Protocol - Tier 13',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'DKA (E10.10 / E11.10)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 13',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with dka (e10.10 / e11.10)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-DKA-01-SUB14',
    protocolName: 'Diabetic Ketoacidosis (DKA) Insulin Infusion & Electrolyte Protocol - Tier 14',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'DKA (E10.10 / E11.10)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 14',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with dka (e10.10 / e11.10)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-DKA-01-SUB15',
    protocolName: 'Diabetic Ketoacidosis (DKA) Insulin Infusion & Electrolyte Protocol - Tier 15',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'DKA (E10.10 / E11.10)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 15',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with dka (e10.10 / e11.10)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-DKA-01-SUB16',
    protocolName: 'Diabetic Ketoacidosis (DKA) Insulin Infusion & Electrolyte Protocol - Tier 16',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'DKA (E10.10 / E11.10)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 16',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with dka (e10.10 / e11.10)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-DKA-01-SUB17',
    protocolName: 'Diabetic Ketoacidosis (DKA) Insulin Infusion & Electrolyte Protocol - Tier 17',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'DKA (E10.10 / E11.10)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 17',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with dka (e10.10 / e11.10)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-DKA-01-SUB18',
    protocolName: 'Diabetic Ketoacidosis (DKA) Insulin Infusion & Electrolyte Protocol - Tier 18',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'DKA (E10.10 / E11.10)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 18',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with dka (e10.10 / e11.10)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-DKA-01-SUB19',
    protocolName: 'Diabetic Ketoacidosis (DKA) Insulin Infusion & Electrolyte Protocol - Tier 19',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'DKA (E10.10 / E11.10)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 19',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with dka (e10.10 / e11.10)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-DKA-01-SUB20',
    protocolName: 'Diabetic Ketoacidosis (DKA) Insulin Infusion & Electrolyte Protocol - Tier 20',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'DKA (E10.10 / E11.10)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 20',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with dka (e10.10 / e11.10)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-DKA-01-SUB21',
    protocolName: 'Diabetic Ketoacidosis (DKA) Insulin Infusion & Electrolyte Protocol - Tier 21',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'DKA (E10.10 / E11.10)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 21',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with dka (e10.10 / e11.10)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-DKA-01-SUB22',
    protocolName: 'Diabetic Ketoacidosis (DKA) Insulin Infusion & Electrolyte Protocol - Tier 22',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'DKA (E10.10 / E11.10)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 22',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with dka (e10.10 / e11.10)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-DKA-01-SUB23',
    protocolName: 'Diabetic Ketoacidosis (DKA) Insulin Infusion & Electrolyte Protocol - Tier 23',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'DKA (E10.10 / E11.10)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 23',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with dka (e10.10 / e11.10)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-DKA-01-SUB24',
    protocolName: 'Diabetic Ketoacidosis (DKA) Insulin Infusion & Electrolyte Protocol - Tier 24',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'DKA (E10.10 / E11.10)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 24',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with dka (e10.10 / e11.10)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-DKA-01-SUB25',
    protocolName: 'Diabetic Ketoacidosis (DKA) Insulin Infusion & Electrolyte Protocol - Tier 25',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'DKA (E10.10 / E11.10)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 25',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with dka (e10.10 / e11.10)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-PE-01-SUB1',
    protocolName: 'Acute Pulmonary Embolism Risk-Stratified Thromboembolic Protocol - Tier 1',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'Pulmonary Embolism (I26.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 1',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with pulmonary embolism (i26.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-PE-01-SUB2',
    protocolName: 'Acute Pulmonary Embolism Risk-Stratified Thromboembolic Protocol - Tier 2',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'Pulmonary Embolism (I26.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 2',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with pulmonary embolism (i26.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-PE-01-SUB3',
    protocolName: 'Acute Pulmonary Embolism Risk-Stratified Thromboembolic Protocol - Tier 3',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'Pulmonary Embolism (I26.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 3',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with pulmonary embolism (i26.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-PE-01-SUB4',
    protocolName: 'Acute Pulmonary Embolism Risk-Stratified Thromboembolic Protocol - Tier 4',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'Pulmonary Embolism (I26.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 4',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with pulmonary embolism (i26.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-PE-01-SUB5',
    protocolName: 'Acute Pulmonary Embolism Risk-Stratified Thromboembolic Protocol - Tier 5',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'Pulmonary Embolism (I26.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 5',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with pulmonary embolism (i26.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-PE-01-SUB6',
    protocolName: 'Acute Pulmonary Embolism Risk-Stratified Thromboembolic Protocol - Tier 6',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'Pulmonary Embolism (I26.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 6',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with pulmonary embolism (i26.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-PE-01-SUB7',
    protocolName: 'Acute Pulmonary Embolism Risk-Stratified Thromboembolic Protocol - Tier 7',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'Pulmonary Embolism (I26.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 7',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with pulmonary embolism (i26.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-PE-01-SUB8',
    protocolName: 'Acute Pulmonary Embolism Risk-Stratified Thromboembolic Protocol - Tier 8',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'Pulmonary Embolism (I26.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 8',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with pulmonary embolism (i26.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-PE-01-SUB9',
    protocolName: 'Acute Pulmonary Embolism Risk-Stratified Thromboembolic Protocol - Tier 9',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'Pulmonary Embolism (I26.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 9',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with pulmonary embolism (i26.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-PE-01-SUB10',
    protocolName: 'Acute Pulmonary Embolism Risk-Stratified Thromboembolic Protocol - Tier 10',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'Pulmonary Embolism (I26.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 10',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with pulmonary embolism (i26.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-PE-01-SUB11',
    protocolName: 'Acute Pulmonary Embolism Risk-Stratified Thromboembolic Protocol - Tier 11',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'Pulmonary Embolism (I26.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 11',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with pulmonary embolism (i26.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-PE-01-SUB12',
    protocolName: 'Acute Pulmonary Embolism Risk-Stratified Thromboembolic Protocol - Tier 12',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'Pulmonary Embolism (I26.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 12',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with pulmonary embolism (i26.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-PE-01-SUB13',
    protocolName: 'Acute Pulmonary Embolism Risk-Stratified Thromboembolic Protocol - Tier 13',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'Pulmonary Embolism (I26.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 13',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with pulmonary embolism (i26.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-PE-01-SUB14',
    protocolName: 'Acute Pulmonary Embolism Risk-Stratified Thromboembolic Protocol - Tier 14',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'Pulmonary Embolism (I26.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 14',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with pulmonary embolism (i26.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-PE-01-SUB15',
    protocolName: 'Acute Pulmonary Embolism Risk-Stratified Thromboembolic Protocol - Tier 15',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'Pulmonary Embolism (I26.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 15',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with pulmonary embolism (i26.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-PE-01-SUB16',
    protocolName: 'Acute Pulmonary Embolism Risk-Stratified Thromboembolic Protocol - Tier 16',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'Pulmonary Embolism (I26.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 16',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with pulmonary embolism (i26.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-PE-01-SUB17',
    protocolName: 'Acute Pulmonary Embolism Risk-Stratified Thromboembolic Protocol - Tier 17',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'Pulmonary Embolism (I26.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 17',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with pulmonary embolism (i26.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-PE-01-SUB18',
    protocolName: 'Acute Pulmonary Embolism Risk-Stratified Thromboembolic Protocol - Tier 18',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'Pulmonary Embolism (I26.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 18',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with pulmonary embolism (i26.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-PE-01-SUB19',
    protocolName: 'Acute Pulmonary Embolism Risk-Stratified Thromboembolic Protocol - Tier 19',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'Pulmonary Embolism (I26.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 19',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with pulmonary embolism (i26.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-PE-01-SUB20',
    protocolName: 'Acute Pulmonary Embolism Risk-Stratified Thromboembolic Protocol - Tier 20',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'Pulmonary Embolism (I26.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 20',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with pulmonary embolism (i26.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-PE-01-SUB21',
    protocolName: 'Acute Pulmonary Embolism Risk-Stratified Thromboembolic Protocol - Tier 21',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'Pulmonary Embolism (I26.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 21',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with pulmonary embolism (i26.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-PE-01-SUB22',
    protocolName: 'Acute Pulmonary Embolism Risk-Stratified Thromboembolic Protocol - Tier 22',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'Pulmonary Embolism (I26.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 22',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with pulmonary embolism (i26.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-PE-01-SUB23',
    protocolName: 'Acute Pulmonary Embolism Risk-Stratified Thromboembolic Protocol - Tier 23',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'Pulmonary Embolism (I26.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 23',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with pulmonary embolism (i26.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-PE-01-SUB24',
    protocolName: 'Acute Pulmonary Embolism Risk-Stratified Thromboembolic Protocol - Tier 24',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'Pulmonary Embolism (I26.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 24',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with pulmonary embolism (i26.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-PE-01-SUB25',
    protocolName: 'Acute Pulmonary Embolism Risk-Stratified Thromboembolic Protocol - Tier 25',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'Pulmonary Embolism (I26.9)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 25',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with pulmonary embolism (i26.9)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-ANAPHYLAXIS-01-SUB1',
    protocolName: 'Anaphylaxis Emergency Management Algorithm - Tier 1',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Anaphylactic Shock (T78.2)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 1',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with anaphylactic shock (t78.2)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-ANAPHYLAXIS-01-SUB2',
    protocolName: 'Anaphylaxis Emergency Management Algorithm - Tier 2',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Anaphylactic Shock (T78.2)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 2',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with anaphylactic shock (t78.2)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-ANAPHYLAXIS-01-SUB3',
    protocolName: 'Anaphylaxis Emergency Management Algorithm - Tier 3',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Anaphylactic Shock (T78.2)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 3',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with anaphylactic shock (t78.2)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-ANAPHYLAXIS-01-SUB4',
    protocolName: 'Anaphylaxis Emergency Management Algorithm - Tier 4',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Anaphylactic Shock (T78.2)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 4',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with anaphylactic shock (t78.2)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-ANAPHYLAXIS-01-SUB5',
    protocolName: 'Anaphylaxis Emergency Management Algorithm - Tier 5',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Anaphylactic Shock (T78.2)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 5',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with anaphylactic shock (t78.2)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-ANAPHYLAXIS-01-SUB6',
    protocolName: 'Anaphylaxis Emergency Management Algorithm - Tier 6',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Anaphylactic Shock (T78.2)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 6',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with anaphylactic shock (t78.2)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-ANAPHYLAXIS-01-SUB7',
    protocolName: 'Anaphylaxis Emergency Management Algorithm - Tier 7',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Anaphylactic Shock (T78.2)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 7',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with anaphylactic shock (t78.2)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-ANAPHYLAXIS-01-SUB8',
    protocolName: 'Anaphylaxis Emergency Management Algorithm - Tier 8',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Anaphylactic Shock (T78.2)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 8',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with anaphylactic shock (t78.2)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-ANAPHYLAXIS-01-SUB9',
    protocolName: 'Anaphylaxis Emergency Management Algorithm - Tier 9',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Anaphylactic Shock (T78.2)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 9',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with anaphylactic shock (t78.2)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-ANAPHYLAXIS-01-SUB10',
    protocolName: 'Anaphylaxis Emergency Management Algorithm - Tier 10',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Anaphylactic Shock (T78.2)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 10',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with anaphylactic shock (t78.2)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-ANAPHYLAXIS-01-SUB11',
    protocolName: 'Anaphylaxis Emergency Management Algorithm - Tier 11',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Anaphylactic Shock (T78.2)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 11',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with anaphylactic shock (t78.2)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-ANAPHYLAXIS-01-SUB12',
    protocolName: 'Anaphylaxis Emergency Management Algorithm - Tier 12',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Anaphylactic Shock (T78.2)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 12',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with anaphylactic shock (t78.2)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-ANAPHYLAXIS-01-SUB13',
    protocolName: 'Anaphylaxis Emergency Management Algorithm - Tier 13',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Anaphylactic Shock (T78.2)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 13',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with anaphylactic shock (t78.2)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-ANAPHYLAXIS-01-SUB14',
    protocolName: 'Anaphylaxis Emergency Management Algorithm - Tier 14',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Anaphylactic Shock (T78.2)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 14',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with anaphylactic shock (t78.2)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-ANAPHYLAXIS-01-SUB15',
    protocolName: 'Anaphylaxis Emergency Management Algorithm - Tier 15',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Anaphylactic Shock (T78.2)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 15',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with anaphylactic shock (t78.2)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-ANAPHYLAXIS-01-SUB16',
    protocolName: 'Anaphylaxis Emergency Management Algorithm - Tier 16',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Anaphylactic Shock (T78.2)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 16',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with anaphylactic shock (t78.2)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-ANAPHYLAXIS-01-SUB17',
    protocolName: 'Anaphylaxis Emergency Management Algorithm - Tier 17',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Anaphylactic Shock (T78.2)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 17',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with anaphylactic shock (t78.2)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-ANAPHYLAXIS-01-SUB18',
    protocolName: 'Anaphylaxis Emergency Management Algorithm - Tier 18',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Anaphylactic Shock (T78.2)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 18',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with anaphylactic shock (t78.2)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-ANAPHYLAXIS-01-SUB19',
    protocolName: 'Anaphylaxis Emergency Management Algorithm - Tier 19',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Anaphylactic Shock (T78.2)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 19',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with anaphylactic shock (t78.2)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-ANAPHYLAXIS-01-SUB20',
    protocolName: 'Anaphylaxis Emergency Management Algorithm - Tier 20',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Anaphylactic Shock (T78.2)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 20',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with anaphylactic shock (t78.2)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-ANAPHYLAXIS-01-SUB21',
    protocolName: 'Anaphylaxis Emergency Management Algorithm - Tier 21',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Anaphylactic Shock (T78.2)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 21',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with anaphylactic shock (t78.2)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-ANAPHYLAXIS-01-SUB22',
    protocolName: 'Anaphylaxis Emergency Management Algorithm - Tier 22',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Anaphylactic Shock (T78.2)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 22',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with anaphylactic shock (t78.2)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-ANAPHYLAXIS-01-SUB23',
    protocolName: 'Anaphylaxis Emergency Management Algorithm - Tier 23',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Anaphylactic Shock (T78.2)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 23',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with anaphylactic shock (t78.2)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-ANAPHYLAXIS-01-SUB24',
    protocolName: 'Anaphylaxis Emergency Management Algorithm - Tier 24',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Anaphylactic Shock (T78.2)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 24',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with anaphylactic shock (t78.2)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-ANAPHYLAXIS-01-SUB25',
    protocolName: 'Anaphylaxis Emergency Management Algorithm - Tier 25',
    acuityLevel: 'EMERGENCY_CODE',
    targetDiagnosis: 'Anaphylactic Shock (T78.2)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 25',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with anaphylactic shock (t78.2)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-HF-01-SUB1',
    protocolName: 'Acute Decompensated Heart Failure (ADHF) Inpatient Diuresis Protocol - Tier 1',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'ADHF (I50.21 / I50.31)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 1',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with adhf (i50.21 / i50.31)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-HF-01-SUB2',
    protocolName: 'Acute Decompensated Heart Failure (ADHF) Inpatient Diuresis Protocol - Tier 2',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'ADHF (I50.21 / I50.31)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 2',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with adhf (i50.21 / i50.31)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-HF-01-SUB3',
    protocolName: 'Acute Decompensated Heart Failure (ADHF) Inpatient Diuresis Protocol - Tier 3',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'ADHF (I50.21 / I50.31)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 3',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with adhf (i50.21 / i50.31)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-HF-01-SUB4',
    protocolName: 'Acute Decompensated Heart Failure (ADHF) Inpatient Diuresis Protocol - Tier 4',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'ADHF (I50.21 / I50.31)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 4',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with adhf (i50.21 / i50.31)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-HF-01-SUB5',
    protocolName: 'Acute Decompensated Heart Failure (ADHF) Inpatient Diuresis Protocol - Tier 5',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'ADHF (I50.21 / I50.31)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 5',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with adhf (i50.21 / i50.31)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-HF-01-SUB6',
    protocolName: 'Acute Decompensated Heart Failure (ADHF) Inpatient Diuresis Protocol - Tier 6',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'ADHF (I50.21 / I50.31)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 6',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with adhf (i50.21 / i50.31)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-HF-01-SUB7',
    protocolName: 'Acute Decompensated Heart Failure (ADHF) Inpatient Diuresis Protocol - Tier 7',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'ADHF (I50.21 / I50.31)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 7',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with adhf (i50.21 / i50.31)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-HF-01-SUB8',
    protocolName: 'Acute Decompensated Heart Failure (ADHF) Inpatient Diuresis Protocol - Tier 8',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'ADHF (I50.21 / I50.31)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 8',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with adhf (i50.21 / i50.31)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-HF-01-SUB9',
    protocolName: 'Acute Decompensated Heart Failure (ADHF) Inpatient Diuresis Protocol - Tier 9',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'ADHF (I50.21 / I50.31)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 9',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with adhf (i50.21 / i50.31)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-HF-01-SUB10',
    protocolName: 'Acute Decompensated Heart Failure (ADHF) Inpatient Diuresis Protocol - Tier 10',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'ADHF (I50.21 / I50.31)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 10',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with adhf (i50.21 / i50.31)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-HF-01-SUB11',
    protocolName: 'Acute Decompensated Heart Failure (ADHF) Inpatient Diuresis Protocol - Tier 11',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'ADHF (I50.21 / I50.31)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 11',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with adhf (i50.21 / i50.31)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-HF-01-SUB12',
    protocolName: 'Acute Decompensated Heart Failure (ADHF) Inpatient Diuresis Protocol - Tier 12',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'ADHF (I50.21 / I50.31)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 12',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with adhf (i50.21 / i50.31)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-HF-01-SUB13',
    protocolName: 'Acute Decompensated Heart Failure (ADHF) Inpatient Diuresis Protocol - Tier 13',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'ADHF (I50.21 / I50.31)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 13',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with adhf (i50.21 / i50.31)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-HF-01-SUB14',
    protocolName: 'Acute Decompensated Heart Failure (ADHF) Inpatient Diuresis Protocol - Tier 14',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'ADHF (I50.21 / I50.31)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 14',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with adhf (i50.21 / i50.31)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-HF-01-SUB15',
    protocolName: 'Acute Decompensated Heart Failure (ADHF) Inpatient Diuresis Protocol - Tier 15',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'ADHF (I50.21 / I50.31)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 15',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with adhf (i50.21 / i50.31)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-HF-01-SUB16',
    protocolName: 'Acute Decompensated Heart Failure (ADHF) Inpatient Diuresis Protocol - Tier 16',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'ADHF (I50.21 / I50.31)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 16',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with adhf (i50.21 / i50.31)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-HF-01-SUB17',
    protocolName: 'Acute Decompensated Heart Failure (ADHF) Inpatient Diuresis Protocol - Tier 17',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'ADHF (I50.21 / I50.31)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 17',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with adhf (i50.21 / i50.31)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-HF-01-SUB18',
    protocolName: 'Acute Decompensated Heart Failure (ADHF) Inpatient Diuresis Protocol - Tier 18',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'ADHF (I50.21 / I50.31)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 18',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with adhf (i50.21 / i50.31)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-HF-01-SUB19',
    protocolName: 'Acute Decompensated Heart Failure (ADHF) Inpatient Diuresis Protocol - Tier 19',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'ADHF (I50.21 / I50.31)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 19',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with adhf (i50.21 / i50.31)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-HF-01-SUB20',
    protocolName: 'Acute Decompensated Heart Failure (ADHF) Inpatient Diuresis Protocol - Tier 20',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'ADHF (I50.21 / I50.31)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 20',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with adhf (i50.21 / i50.31)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-HF-01-SUB21',
    protocolName: 'Acute Decompensated Heart Failure (ADHF) Inpatient Diuresis Protocol - Tier 21',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'ADHF (I50.21 / I50.31)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 21',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with adhf (i50.21 / i50.31)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-HF-01-SUB22',
    protocolName: 'Acute Decompensated Heart Failure (ADHF) Inpatient Diuresis Protocol - Tier 22',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'ADHF (I50.21 / I50.31)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 22',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with adhf (i50.21 / i50.31)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-HF-01-SUB23',
    protocolName: 'Acute Decompensated Heart Failure (ADHF) Inpatient Diuresis Protocol - Tier 23',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'ADHF (I50.21 / I50.31)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 23',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with adhf (i50.21 / i50.31)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-HF-01-SUB24',
    protocolName: 'Acute Decompensated Heart Failure (ADHF) Inpatient Diuresis Protocol - Tier 24',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'ADHF (I50.21 / I50.31)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 24',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with adhf (i50.21 / i50.31)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-HF-01-SUB25',
    protocolName: 'Acute Decompensated Heart Failure (ADHF) Inpatient Diuresis Protocol - Tier 25',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'ADHF (I50.21 / I50.31)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 25',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with adhf (i50.21 / i50.31)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-COPD-01-SUB1',
    protocolName: 'COPD Acute Exacerbation Care Pathway - Tier 1',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'COPD with Exacerbation (J44.1)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 1',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with copd with exacerbation (j44.1)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-COPD-01-SUB2',
    protocolName: 'COPD Acute Exacerbation Care Pathway - Tier 2',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'COPD with Exacerbation (J44.1)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 2',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with copd with exacerbation (j44.1)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-COPD-01-SUB3',
    protocolName: 'COPD Acute Exacerbation Care Pathway - Tier 3',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'COPD with Exacerbation (J44.1)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 3',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with copd with exacerbation (j44.1)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-COPD-01-SUB4',
    protocolName: 'COPD Acute Exacerbation Care Pathway - Tier 4',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'COPD with Exacerbation (J44.1)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 4',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with copd with exacerbation (j44.1)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-COPD-01-SUB5',
    protocolName: 'COPD Acute Exacerbation Care Pathway - Tier 5',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'COPD with Exacerbation (J44.1)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 5',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with copd with exacerbation (j44.1)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-COPD-01-SUB6',
    protocolName: 'COPD Acute Exacerbation Care Pathway - Tier 6',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'COPD with Exacerbation (J44.1)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 6',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with copd with exacerbation (j44.1)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-COPD-01-SUB7',
    protocolName: 'COPD Acute Exacerbation Care Pathway - Tier 7',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'COPD with Exacerbation (J44.1)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 7',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with copd with exacerbation (j44.1)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-COPD-01-SUB8',
    protocolName: 'COPD Acute Exacerbation Care Pathway - Tier 8',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'COPD with Exacerbation (J44.1)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 8',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with copd with exacerbation (j44.1)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-COPD-01-SUB9',
    protocolName: 'COPD Acute Exacerbation Care Pathway - Tier 9',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'COPD with Exacerbation (J44.1)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 9',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with copd with exacerbation (j44.1)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-COPD-01-SUB10',
    protocolName: 'COPD Acute Exacerbation Care Pathway - Tier 10',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'COPD with Exacerbation (J44.1)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 10',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with copd with exacerbation (j44.1)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-COPD-01-SUB11',
    protocolName: 'COPD Acute Exacerbation Care Pathway - Tier 11',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'COPD with Exacerbation (J44.1)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 11',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with copd with exacerbation (j44.1)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-COPD-01-SUB12',
    protocolName: 'COPD Acute Exacerbation Care Pathway - Tier 12',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'COPD with Exacerbation (J44.1)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 12',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with copd with exacerbation (j44.1)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-COPD-01-SUB13',
    protocolName: 'COPD Acute Exacerbation Care Pathway - Tier 13',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'COPD with Exacerbation (J44.1)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 13',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with copd with exacerbation (j44.1)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-COPD-01-SUB14',
    protocolName: 'COPD Acute Exacerbation Care Pathway - Tier 14',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'COPD with Exacerbation (J44.1)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 14',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with copd with exacerbation (j44.1)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-COPD-01-SUB15',
    protocolName: 'COPD Acute Exacerbation Care Pathway - Tier 15',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'COPD with Exacerbation (J44.1)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 15',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with copd with exacerbation (j44.1)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-COPD-01-SUB16',
    protocolName: 'COPD Acute Exacerbation Care Pathway - Tier 16',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'COPD with Exacerbation (J44.1)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 16',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with copd with exacerbation (j44.1)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-COPD-01-SUB17',
    protocolName: 'COPD Acute Exacerbation Care Pathway - Tier 17',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'COPD with Exacerbation (J44.1)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 17',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with copd with exacerbation (j44.1)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-COPD-01-SUB18',
    protocolName: 'COPD Acute Exacerbation Care Pathway - Tier 18',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'COPD with Exacerbation (J44.1)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 18',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with copd with exacerbation (j44.1)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-COPD-01-SUB19',
    protocolName: 'COPD Acute Exacerbation Care Pathway - Tier 19',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'COPD with Exacerbation (J44.1)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 19',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with copd with exacerbation (j44.1)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-COPD-01-SUB20',
    protocolName: 'COPD Acute Exacerbation Care Pathway - Tier 20',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'COPD with Exacerbation (J44.1)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 20',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with copd with exacerbation (j44.1)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-COPD-01-SUB21',
    protocolName: 'COPD Acute Exacerbation Care Pathway - Tier 21',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'COPD with Exacerbation (J44.1)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 21',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with copd with exacerbation (j44.1)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-COPD-01-SUB22',
    protocolName: 'COPD Acute Exacerbation Care Pathway - Tier 22',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'COPD with Exacerbation (J44.1)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 22',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with copd with exacerbation (j44.1)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-COPD-01-SUB23',
    protocolName: 'COPD Acute Exacerbation Care Pathway - Tier 23',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'COPD with Exacerbation (J44.1)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 23',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with copd with exacerbation (j44.1)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-COPD-01-SUB24',
    protocolName: 'COPD Acute Exacerbation Care Pathway - Tier 24',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'COPD with Exacerbation (J44.1)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 24',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with copd with exacerbation (j44.1)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
  {
    protocolId: 'CP-COPD-01-SUB25',
    protocolName: 'COPD Acute Exacerbation Care Pathway - Tier 25',
    acuityLevel: 'URGENT',
    targetDiagnosis: 'COPD with Exacerbation (J44.1)',
    initiatingTriggers: [
      'Physician encounter or triage vital sign deviation in tier 25',
      'Emergency Department activation or clinical deterioration alert'
    ],
    inclusionCriteria: [
      'Adult patient >=18 years presenting with copd with exacerbation (j44.1)',
      'Symptom onset within therapeutic window (<12h for STEMI, <4.5h for stroke)'
    ],
    exclusionCriteria: [
      'Active severe internal bleeding contraindicating anticoagulation/thrombolysis',
      'Advanced medical directive declaring palliative/comfort care only'
    ],
    immediateActionChecklist: [
      'Step 1: Secure airway, breathing, circulation (ABC) and continuous ECG telemetry.',
      'Step 2: Establish 2 large-bore peripheral IV lines (18G or larger).',
      'Step 3: Point-of-care capillary blood glucose and stat venous blood gas / lactate.',
      'Step 4: Notify attending specialist on call and activate catheterization/CT team.'
    ],
    medicationOrders: [
      { medication: 'Normal Saline 0.9% / Ringer Lactate', dose: '30 mL/kg bolus', route: 'IV', frequency: 'Once', timing: 'Immediate within 30 min' },
      { medication: 'Empiric Broad-Spectrum Antimicrobial / Antiplatelet', dose: 'Standard Protocol Dose', route: 'IV/Oral', frequency: 'Immediate', timing: 'Within 60 min' }
    ],
    diagnosticWorkup: [
      'Stat 12-Lead Electrocardiogram with physician interpretation in <10 minutes',
      'High-sensitivity Cardiac Troponin I/T or D-Dimer / Lactate / CBC / CMP / PT-INR',
      'Portable Chest X-Ray or Non-Contrast Head CT / CTA'
    ],
    nursingInterventions: [
      'Continuous automated non-invasive blood pressure and pulse oximetry q15min.',
      'Strict intake and output (I&O) recording and indwelling catheter if indicated.',
      'Neurological checks / GCS scoring every 30 minutes.'
    ],
    escalationTriggers: [
      'Mean Arterial Pressure (MAP) < 65 mmHg refractory to initial fluid challenge',
      'Respiratory failure with SpO2 < 90% despite high-flow supplemental oxygen',
      'Acute decrease in Glasgow Coma Scale >= 2 points'
    ],
    dischargeOrStepDownCriteria: [
      'Hemodynamic stability without vasopressor support for >24 hours.',
      'Normalization of serum lactate (<2.0 mmol/L) and resolution of acidosis.',
      'Patient tolerating oral diet and oral guideline-directed medications.'
    ],
    guidelineOrigin: 'American College of Cardiology / AHA / Surviving Sepsis International Guidelines 2024.',
  },
];
