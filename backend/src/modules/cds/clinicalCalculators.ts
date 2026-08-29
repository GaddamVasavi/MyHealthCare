import { ClinicalCalculatorInput, ClinicalScoreResult } from './types';

export class ClinicalCalculators {
  /**
   * Framingham 10-Year Cardiovascular Disease (CVD) Risk Score
   */
  public static calculateFramingham10YrCvdRisk(input: ClinicalCalculatorInput): ClinicalScoreResult {
    const age = input.patientAge;
    const isMale = input.gender === 'MALE';
    const sbp = input.systolicBp || 120;
    const tc = input.totalCholesterol || 190;
    const hdl = input.hdlCholesterol || 50;
    const isSmoker = input.isSmoker ? 1 : 0;
    const isTreated = input.isHypertensiveTreated ? 1 : 0;

    let score = 0;
    if (isMale) {
      score += Math.log(age) * 3.06117;
      score += Math.log(tc) * 1.1237;
      score -= Math.log(hdl) * 0.93263;
      score += isTreated ? Math.log(sbp) * 1.93303 : Math.log(sbp) * 1.99881;
      score += isSmoker * 0.65451;
      const baseRisk = 1 - Math.pow(0.88936, Math.exp(score - 23.9802));
      const riskPct = Math.min(Math.max(Math.round(baseRisk * 1000) / 10, 0.5), 99.0);

      const category = riskPct < 10 ? 'LOW' : riskPct <= 20 ? 'MODERATE' : 'HIGH';
      return {
        calculatorName: 'Framingham 10-Year Cardiovascular Risk Score',
        score: riskPct,
        riskCategory: category,
        interpretation: `Estimated 10-year risk of developing cardiovascular disease is ${riskPct}%.`,
        recommendations: [
          riskPct > 20 ? 'High risk (>20%): Initiate high-intensity statin therapy (Atorvastatin 40-80mg or Rosuvastatin 20-40mg).' : 'Lifestyle modification and dietary optimization.',
          'Target blood pressure <130/80 mmHg per ACC/AHA guidelines.',
          isSmoker ? 'Strongly recommend smoking cessation program and nicotine replacement therapy.' : 'Maintain active lifestyle.',
        ],
        references: ['D\'Agostino RB Sr, et al. General Cardiovascular Risk Profile for Use in Primary Care. Circulation. 2008;117(6):743-753.'],
      };
    } else {
      score += Math.log(age) * 2.32888;
      score += Math.log(tc) * 1.20904;
      score -= Math.log(hdl) * 0.70833;
      score += isTreated ? Math.log(sbp) * 2.82263 : Math.log(sbp) * 2.76157;
      score += isSmoker * 0.52873;
      const baseRisk = 1 - Math.pow(0.95012, Math.exp(score - 26.1931));
      const riskPct = Math.min(Math.max(Math.round(baseRisk * 1000) / 10, 0.5), 99.0);

      const category = riskPct < 10 ? 'LOW' : riskPct <= 20 ? 'MODERATE' : 'HIGH';
      return {
        calculatorName: 'Framingham 10-Year Cardiovascular Risk Score (Female)',
        score: riskPct,
        riskCategory: category,
        interpretation: `Estimated 10-year risk of developing cardiovascular disease is ${riskPct}%.`,
        recommendations: [
          riskPct >= 10 ? 'Consider moderate to high-intensity statin therapy.' : 'Encourage heart-healthy Mediterranean diet and regular aerobic exercise.',
          'Screen lipid panel every 12 months.',
        ],
        references: ['Circulation. 2008;117(6):743-753.'],
      };
    }
  }

  /**
   * CHA2DS2-VASc Score for Atrial Fibrillation Stroke Risk
   */
  public static calculateCHA2DS2VASc(input: ClinicalCalculatorInput): ClinicalScoreResult {
    let score = 0;
    if (input.heartFailureHistory) score += 1;
    if ((input.systolicBp && input.systolicBp >= 140) || input.isHypertensiveTreated) score += 1;
    if (input.patientAge >= 75) score += 2;
    else if (input.patientAge >= 65) score += 1;
    if (input.hasDiabetes) score += 1;
    if (input.priorStrokeTiaHistory) score += 2;
    if (input.vascularDiseaseHistory) score += 1;
    if (input.gender === 'FEMALE') score += 1;

    let interpretation = '';
    let category: 'LOW' | 'MODERATE' | 'HIGH' = 'LOW';
    let recommendations: string[] = [];

    const isMale = input.gender === 'MALE';
    const effectiveScore = isMale ? score : score - 1; // Female sex category is an effect modifier

    if (effectiveScore === 0) {
      category = 'LOW';
      interpretation = 'Low thromboembolic risk (Annual ischemic stroke risk <1.0%).';
      recommendations = ['Anticoagulation is generally not recommended in patients with low stroke risk.'];
    } else if (effectiveScore === 1) {
      category = 'MODERATE';
      interpretation = 'Intermediate thromboembolic risk (Annual stroke risk ~1.3-2.2%).';
      recommendations = ['Oral anticoagulation (DOAC preferred over Warfarin) should be considered based on individual bleeding risk and shared clinical decision-making.'];
    } else {
      category = 'HIGH';
      interpretation = `High thromboembolic risk (Score ${score}, Annual ischemic stroke risk >3.2%).`;
      recommendations = [
        'Oral Anticoagulation is strongly recommended (Class I recommendation).',
        'Direct-acting oral anticoagulants (Apixaban 5mg BID, Rivaroxaban 20mg daily, Dabigatran 150mg BID) are preferred over Warfarin unless mechanical heart valve or moderate-to-severe mitral stenosis.',
        'Calculate HAS-BLED score to identify and correct modifiable bleeding risk factors.',
      ];
    }

    return {
      calculatorName: 'CHA2DS2-VASc Score for Stroke Risk in Atrial Fibrillation',
      score,
      riskCategory: category,
      interpretation,
      recommendations,
      references: ['Lip GY, et al. Refining clinical risk stratification in atrial fibrillation: the CHA2DS2-VASc score. Chest. 2010;137(2):263-272.'],
    };
  }

  /**
   * 2021 CKD-EPI Creatinine Equation for Estimated Glomerular Filtration Rate (eGFR)
   * (Race-free standardized consensus formula)
   */
  public static calculateCKDEpi2021GFR(input: ClinicalCalculatorInput): ClinicalScoreResult {
    const scr = input.serumCreatinineMgDl || 1.0;
    const age = input.patientAge;
    const isFemale = input.gender === 'FEMALE';

    const kappa = isFemale ? 0.7 : 0.9;
    const alpha = isFemale ? -0.241 : -0.302;
    const genderMultiplier = isFemale ? 1.012 : 1.0;

    const scrDivKappa = scr / kappa;
    const minComponent = Math.pow(Math.min(scrDivKappa, 1), alpha);
    const maxComponent = Math.pow(Math.max(scrDivKappa, 1), -1.2);
    const ageComponent = Math.pow(0.9938, age);

    const egfr = Math.round(142 * minComponent * maxComponent * ageComponent * genderMultiplier * 10) / 10;

    let stage = '';
    let category: 'LOW' | 'MODERATE' | 'HIGH' | 'VERY_HIGH' | 'CRITICAL' = 'LOW';
    let recommendations: string[] = [];

    if (egfr >= 90) {
      stage = 'Stage 1 (Normal or high kidney function)';
      category = 'LOW';
      recommendations = ['Maintain hydration, annual screening if diabetic or hypertensive.'];
    } else if (egfr >= 60) {
      stage = 'Stage 2 (Mildly decreased kidney function)';
      category = 'LOW';
      recommendations = ['Monitor blood pressure (<130/80 mmHg), check urine albumin-to-creatinine ratio (uACR).'];
    } else if (egfr >= 45) {
      stage = 'Stage 3a (Mildly to moderately decreased)';
      category = 'MODERATE';
      recommendations = ['Dose-adjust renally eliminated medications.', 'Monitor electrolytes and serum creatinine every 6 months.'];
    } else if (egfr >= 30) {
      stage = 'Stage 3b (Moderately to severely decreased)';
      category = 'HIGH';
      recommendations = [
        'Strict renal medication adjustments (reduce metformin if eGFR <45, stop if eGFR <30).',
        'Avoid nephrotoxic agents (NSAIDs, IV iodinated radiocontrast).',
        'Check for CKD-MBD (parathyroid hormone, calcium, phosphate) and anemia.',
      ];
    } else if (egfr >= 15) {
      stage = 'Stage 4 (Severely decreased kidney function)';
      category = 'VERY_HIGH';
      recommendations = [
        'Urgent Nephrology referral for vascular access planning and pre-dialysis education.',
        'Manage metabolic acidosis (sodium bicarbonate if HCO3 <22 mEq/L).',
      ];
    } else {
      stage = 'Stage 5 (Kidney Failure / End-Stage Renal Disease)';
      category = 'CRITICAL';
      recommendations = [
        'Dialysis initiation or renal transplantation evaluation.',
        'Urgent electrolyte stabilization.',
      ];
    }

    return {
      calculatorName: 'CKD-EPI 2021 Estimated Glomerular Filtration Rate (eGFR)',
      score: egfr,
      riskCategory: category,
      interpretation: `eGFR is ${egfr} mL/min/1.73m² (${stage}).`,
      recommendations,
      references: ['Inker LA, et al. New Creatinine- and Cystatin C-Based Equations to Estimate GFR without Race. N Engl J Med. 2021;385:1737-1749.'],
    };
  }

  /**
   * CURB-65 Score for Pneumonia Severity Assessment
   */
  public static calculateCURB65(input: ClinicalCalculatorInput): ClinicalScoreResult {
    let score = 0;
    if (input.isConfused) score += 1;
    if (input.bloodUreaNitrogenMgDl && input.bloodUreaNitrogenMgDl > 19) score += 1;
    if (input.respiratoryRateBpm && input.respiratoryRateBpm >= 30) score += 1;
    if (
      (input.systolicBp && input.systolicBp < 90) ||
      (input.diastolicBp && input.diastolicBp <= 60)
    ) score += 1;
    if (input.patientAge >= 65) score += 1;

    let category: 'LOW' | 'MODERATE' | 'HIGH' | 'CRITICAL' = 'LOW';
    let interpretation = '';
    let recommendations: string[] = [];

    if (score <= 1) {
      category = 'LOW';
      interpretation = `CURB-65 Score: ${score}. Low risk of mortality (30-day mortality <1.5%).`;
      recommendations = ['Suitable for outpatient management with oral antimicrobial therapy (e.g. Amoxicillin or Macrolide/Doxycycline).'];
    } else if (score === 2) {
      category = 'MODERATE';
      interpretation = `CURB-65 Score: ${score}. Intermediate risk of mortality (30-day mortality ~9.2%).`;
      recommendations = ['Consider inpatient hospital admission or closely supervised outpatient management.'];
    } else {
      category = 'CRITICAL';
      interpretation = `CURB-65 Score: ${score}. Severe pneumonia (30-day mortality 22-30%).`;
      recommendations = [
        'Urgent hospital admission required.',
        score >= 4 ? 'Immediate Intensive Care Unit (ICU) consultation and respiratory support.' : 'Inpatient telemetry bed admission.',
        'Initiate broad-spectrum IV antibiotic therapy within 1 hour of presentation.',
      ];
    }

    return {
      calculatorName: 'CURB-65 Pneumonia Severity Score',
      score,
      riskCategory: category,
      interpretation,
      recommendations,
      references: ['Lim WS, et al. Defining community acquired pneumonia severity on presentation to hospital: an international derivation and validation study. Thorax. 2003;58(5):377-382.'],
    };
  }

  /**
   * MELD-Na (Model for End-Stage Liver Disease with Sodium) Score
   */
  public static calculateMELDNa(input: ClinicalCalculatorInput): ClinicalScoreResult {
    const bili = Math.max(input.serumBilirubinMgDl || 1.0, 1.0);
    const inr = Math.max(input.inr || 1.0, 1.0);
    const cr = Math.min(Math.max(input.serumCreatinineMgDl || 1.0, 1.0), 4.0);
    const na = Math.min(Math.max(input.serumSodiumMeqL || 135, 125), 137);

    // Initial MELD calculation
    const initialMeld = 9.57 * Math.log(cr) + 3.78 * Math.log(bili) + 11.2 * Math.log(inr) + 6.43;
    let meldScore = Math.round(initialMeld);

    if (meldScore > 11) {
      meldScore = Math.round(meldScore + 1.32 * (137 - na) - (0.033 * meldScore * (137 - na)));
    }
    meldScore = Math.min(Math.max(meldScore, 6), 40);

    let category: 'LOW' | 'MODERATE' | 'HIGH' | 'CRITICAL' = 'LOW';
    let mortalityRate = '';

    if (meldScore < 15) {
      category = 'LOW';
      mortalityRate = '3-month mortality ~1.9 - 6.0%';
    } else if (meldScore <= 24) {
      category = 'MODERATE';
      mortalityRate = '3-month mortality ~19.6%';
    } else if (meldScore <= 34) {
      category = 'HIGH';
      mortalityRate = '3-month mortality ~52.6%';
    } else {
      category = 'CRITICAL';
      mortalityRate = '3-month mortality >71.3%';
    }

    return {
      calculatorName: 'MELD-Na Score for Liver Disease Severity',
      score: meldScore,
      riskCategory: category,
      interpretation: `MELD-Na score is ${meldScore} (${mortalityRate}).`,
      recommendations: [
        meldScore >= 15 ? 'Immediate liver transplant evaluation and multidisciplinary hepatology review.' : 'Routine hepatology follow-up and hepatocellular carcinoma (HCC) ultrasound surveillance every 6 months.',
        'Screen for esophageal varices via upper endoscopy.',
        'Strict sodium restriction (<2000 mg/day) and spironolactone/furosemide for ascites control.',
      ],
      references: ['Kim WR, et al. Hyponatremia and mortality among patients on the liver-transplant waiting list. N Engl J Med. 2008;359(10):1018-1026.'],
    };
  }

  /**
   * Wells Criteria for Pulmonary Embolism (PE)
   */
  public static calculateWellsPE(input: {
    clinicalSignsDvt: boolean;
    peMostLikelyDiagnosis: boolean;
    heartRateOver100: boolean;
    immobilizationOrSurgery: boolean;
    previousDvtOrPe: boolean;
    hemoptysis: boolean;
    malignancyTreatedWithin6Months: boolean;
  }): ClinicalScoreResult {
    let score = 0;
    if (input.clinicalSignsDvt) score += 3.0;
    if (input.peMostLikelyDiagnosis) score += 3.0;
    if (input.heartRateOver100) score += 1.5;
    if (input.immobilizationOrSurgery) score += 1.5;
    if (input.previousDvtOrPe) score += 1.5;
    if (input.hemoptysis) score += 1.0;
    if (input.malignancyTreatedWithin6Months) score += 1.0;

    let category: 'LOW' | 'MODERATE' | 'HIGH' = 'LOW';
    let recommendations: string[] = [];

    if (score <= 4.0) {
      category = 'LOW';
      recommendations = [
        'PE is Unlikely. Order high-sensitivity D-Dimer test.',
        'If D-Dimer is negative (age-adjusted: age x 10 for patients >50y), PE is safely ruled out without radiation.',
        'If D-Dimer is elevated, proceed to CT Pulmonary Angiography (CTPA).',
      ];
    } else {
      category = 'HIGH';
      recommendations = [
        'PE is Likely (Score >4.0). Proceed directly to CT Pulmonary Angiography (CTPA) or V/Q scan if renal impairment.',
        'Do not wait for D-Dimer results.',
        'Consider empiric therapeutic anticoagulation while awaiting diagnostic imaging if high clinical suspicion and no bleeding contraindication.',
      ];
    }

    return {
      calculatorName: 'Wells Criteria for Pulmonary Embolism (PE)',
      score,
      riskCategory: category,
      interpretation: `Wells PE Score is ${score} (${score <= 4.0 ? 'PE Unlikely' : 'PE Likely'}).`,
      recommendations,
      references: ['Wells PS, et al. Derivation of a simple clinical model to categorize patients probability of pulmonary embolism. Thromb Haemost. 2000;83(3):416-420.'],
    };
  }

  /**
   * PHQ-9 (Patient Health Questionnaire-9) Depression Scale
   */
  public static calculatePHQ9(answers: number[]): ClinicalScoreResult {
    const score = answers.reduce((acc, curr) => acc + curr, 0);
    let category: 'LOW' | 'MODERATE' | 'HIGH' | 'CRITICAL' = 'LOW';
    let interpretation = '';
    let recommendations: string[] = [];

    if (score <= 4) {
      category = 'LOW';
      interpretation = 'Minimal or no depression symptoms.';
      recommendations = ['No active pharmacotherapy required. Re-evaluate if symptoms change.'];
    } else if (score <= 9) {
      category = 'LOW';
      interpretation = 'Mild depressive symptoms.';
      recommendations = ['Watchful waiting and supportive counseling. Psychoeducation on sleep hygiene and exercise.'];
    } else if (score <= 14) {
      category = 'MODERATE';
      interpretation = 'Moderate depressive disorder.';
      recommendations = ['Evidence-based psychotherapy (Cognitive Behavioral Therapy - CBT) or first-line SSRI antidepressant pharmacotherapy.'];
    } else if (score <= 19) {
      category = 'HIGH';
      interpretation = 'Moderately severe depression.';
      recommendations = ['Active antidepressant therapy (SSRI/SNRI) combined with psychotherapy. Regular bi-weekly follow-up.'];
    } else {
      category = 'CRITICAL';
      interpretation = 'Severe Major Depressive Episode.';
      recommendations = [
        'Immediate psychiatric consultation and risk assessment.',
        'Assess question #9 for active suicidal ideation or intent.',
        'Initiate combination antidepressant and psychotherapy regimen.',
      ];
    }

    return {
      calculatorName: 'PHQ-9 Depression Severity Scale',
      score,
      riskCategory: category,
      interpretation,
      recommendations,
      references: ['Kroenke K, Spitzer RL, Williams JB. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med. 2001;16(9):606-613.'],
    };
  }
}
