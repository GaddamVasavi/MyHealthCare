import prisma from '../../database/prisma';
import { DRUG_INTERACTIONS_DATA } from './drugInteractions.data';
import { ALLERGY_CROSS_REACTIVITY_DATA } from './allergyCrossReactivity.data';
import { CLINICAL_GUIDELINES_DATA } from './guidelines.data';
import { ClinicalCalculators } from './clinicalCalculators';
import {
  CDSAnalysisRequest,
  CDSAnalysisResponse,
  ClinicalScoreResult,
  DrugInteractionRule,
  AllergyCrossReactivityRule,
  ClinicalGuidelineRule,
} from './types';

export class CDSService {
  /**
   * Run full clinical decision support evaluation on a patient
   */
  public static async analyzePatient(req: CDSAnalysisRequest): Promise<CDSAnalysisResponse> {
    const patient = await prisma.patient.findUnique({
      where: { id: req.patientId },
      include: {
        healthProfile: true,
        allergies: true,
        conditions: true,
        medications: { where: { status: 'ACTIVE' } },
        vitals: { orderBy: { recordedAt: 'desc' }, take: 5 },
      },
    });

    const activeMeds = [
      ...(patient?.medications.map((m) => m.name.toLowerCase()) || []),
      ...(req.medications?.map((m) => m.toLowerCase()) || []),
    ];

    const activeAllergies = [
      ...(patient?.allergies.map((a) => a.allergen.toUpperCase()) || []),
      ...(req.allergies?.map((a) => a.toUpperCase()) || []),
    ];

    const latestVital = patient?.vitals[0] || req.vitals;

    // 1. Evaluate Drug Interactions
    const detectedInteractions: DrugInteractionRule[] = [];
    for (let i = 0; i < activeMeds.length; i++) {
      for (let j = i + 1; j < activeMeds.length; j++) {
        const med1 = activeMeds[i];
        const med2 = activeMeds[j];

        const match = DRUG_INTERACTIONS_DATA.find(
          (rule) =>
            (med1.includes(rule.drugA.toLowerCase()) || med1.includes(rule.genericA.toLowerCase())) &&
            (med2.includes(rule.drugB.toLowerCase()) || med2.includes(rule.genericB.toLowerCase())) ||
            (med2.includes(rule.drugA.toLowerCase()) || med2.includes(rule.genericA.toLowerCase())) &&
            (med1.includes(rule.drugB.toLowerCase()) || med1.includes(rule.genericB.toLowerCase()))
        );

        if (match && !detectedInteractions.some((di) => di.drugA === match.drugA && di.drugB === match.drugB)) {
          detectedInteractions.push(match);
        }
      }
    }

    // 2. Evaluate Allergy Cross-Reactivity
    const detectedAllergyWarnings: AllergyCrossReactivityRule[] = [];
    for (const allergy of activeAllergies) {
      for (const rule of ALLERGY_CROSS_REACTIVITY_DATA) {
        if (allergy.includes(rule.allergenClass)) {
          // Check if patient is taking any related drug classes
          const hasConflict = activeMeds.some((med) =>
            rule.relatedDrugClasses.some((rdc) => med.includes(rdc.toLowerCase()))
          );
          if (hasConflict && !detectedAllergyWarnings.some((w) => w.allergenClass === rule.allergenClass)) {
            detectedAllergyWarnings.push(rule);
          }
        }
      }
    }

    // 3. Vital Sign Alerts
    const vitalAlerts: Array<{ param: string; value: number; status: 'CRITICAL_HIGH' | 'HIGH' | 'LOW' | 'CRITICAL_LOW'; advisory: string }> = [];
    if (latestVital?.systolicBp) {
      if (latestVital.systolicBp >= 180) {
        vitalAlerts.push({
          param: 'Systolic Blood Pressure',
          value: latestVital.systolicBp,
          status: 'CRITICAL_HIGH',
          advisory: 'Hypertensive Crisis / Emergency (SBP >= 180 mmHg). Evaluate for acute target organ damage (chest pain, shortness of breath, neurological deficits).',
        });
      } else if (latestVital.systolicBp >= 140) {
        vitalAlerts.push({
          param: 'Systolic Blood Pressure',
          value: latestVital.systolicBp,
          status: 'HIGH',
          advisory: 'Stage 2 Hypertension (SBP >= 140 mmHg). Prompt dual antihypertensive therapy recommended.',
        });
      } else if (latestVital.systolicBp < 90) {
        vitalAlerts.push({
          param: 'Systolic Blood Pressure',
          value: latestVital.systolicBp,
          status: 'CRITICAL_LOW',
          advisory: 'Hypotension (SBP < 90 mmHg). Assess fluid responsiveness and evaluate for hypovolemia, sepsis, or medication overdose.',
        });
      }
    }

    if (latestVital?.heartRateBpm) {
      if (latestVital.heartRateBpm >= 120) {
        vitalAlerts.push({
          param: 'Heart Rate',
          value: latestVital.heartRateBpm,
          status: 'CRITICAL_HIGH',
          advisory: 'Severe Tachycardia (HR >= 120 bpm). Perform 12-lead ECG to rule out supraventricular tachycardia, atrial fibrillation, or ventricular arrhythmia.',
        });
      } else if (latestVital.heartRateBpm < 50) {
        vitalAlerts.push({
          param: 'Heart Rate',
          value: latestVital.heartRateBpm,
          status: 'LOW',
          advisory: 'Bradycardia (HR < 50 bpm). Review negative dromotropic medications (Beta-blockers, Non-DHP CCB, Digoxin).',
        });
      }
    }

    if (latestVital?.bloodGlucoseMgDl) {
      if (latestVital.bloodGlucoseMgDl < 70) {
        vitalAlerts.push({
          param: 'Blood Glucose',
          value: latestVital.bloodGlucoseMgDl,
          status: 'CRITICAL_LOW',
          advisory: 'Hypoglycemia (Glucose < 70 mg/dL). Administer 15-20g fast-acting oral carbohydrates (Rule of 15) or IV 50% Dextrose if altered consciousness.',
        });
      } else if (latestVital.bloodGlucoseMgDl >= 300) {
        vitalAlerts.push({
          param: 'Blood Glucose',
          value: latestVital.bloodGlucoseMgDl,
          status: 'CRITICAL_HIGH',
          advisory: 'Severe Hyperglycemia (Glucose >= 300 mg/dL). Check blood ketones, electrolytes, and anion gap for Diabetic Ketoacidosis (DKA) or Hyperosmolar Hyperglycemic State (HHS).',
        });
      }
    }

    // 4. Clinical Guidelines Check
    const guidelineAdvisories: ClinicalGuidelineRule[] = [];
    if (latestVital?.systolicBp && latestVital.systolicBp >= 140) {
      const htnRule = CLINICAL_GUIDELINES_DATA.find((g) => g.conditionCode === 'HTN-ACC-2017-02');
      if (htnRule) guidelineAdvisories.push(htnRule);
    } else if (latestVital?.systolicBp && latestVital.systolicBp >= 130) {
      const htn1Rule = CLINICAL_GUIDELINES_DATA.find((g) => g.conditionCode === 'HTN-ACC-2017-01');
      if (htn1Rule) guidelineAdvisories.push(htn1Rule);
    }

    if (latestVital?.bloodGlucoseMgDl && latestVital.bloodGlucoseMgDl >= 126) {
      const dmRule = CLINICAL_GUIDELINES_DATA.find((g) => g.conditionCode === 'DM-ADA-2024-01');
      if (dmRule) guidelineAdvisories.push(dmRule);
    }

    // 5. Calculate Standard Risk Scores
    const age = patient?.dateOfBirth ? new Date().getFullYear() - new Date(patient.dateOfBirth).getFullYear() : 45;
    const gender = (patient?.gender as any) || 'MALE';
    const isSmoker = patient?.healthProfile?.smokingStatus === 'REGULAR' || patient?.healthProfile?.smokingStatus === 'OCCASIONAL';

    const calculatedRiskScores: ClinicalScoreResult[] = [];
    calculatedRiskScores.push(
      ClinicalCalculators.calculateFramingham10YrCvdRisk({
        patientAge: age,
        gender,
        systolicBp: latestVital?.systolicBp || 125,
        totalCholesterol: 195,
        hdlCholesterol: 48,
        isSmoker,
        isHypertensiveTreated: (latestVital?.systolicBp || 120) >= 130,
      })
    );

    calculatedRiskScores.push(
      ClinicalCalculators.calculateCKDEpi2021GFR({
        patientAge: age,
        gender,
        serumCreatinineMgDl: 0.95,
      })
    );

    calculatedRiskScores.push(
      ClinicalCalculators.calculateCHA2DS2VASc({
        patientAge: age,
        gender,
        systolicBp: latestVital?.systolicBp,
        isHypertensiveTreated: true,
        hasDiabetes: (latestVital?.bloodGlucoseMgDl || 90) >= 126,
      })
    );

    // 6. Overall Risk Level
    let overallRiskLevel: 'LOW' | 'MODERATE' | 'HIGH' | 'CRITICAL' = 'LOW';
    if (
      vitalAlerts.some((v) => v.status === 'CRITICAL_HIGH' || v.status === 'CRITICAL_LOW') ||
      detectedInteractions.some((di) => di.severity === 'CONTRAINDICATED')
    ) {
      overallRiskLevel = 'CRITICAL';
    } else if (
      detectedInteractions.some((di) => di.severity === 'MAJOR') ||
      detectedAllergyWarnings.length > 0 ||
      calculatedRiskScores.some((s) => s.riskCategory === 'HIGH' || s.riskCategory === 'VERY_HIGH')
    ) {
      overallRiskLevel = 'HIGH';
    } else if (detectedInteractions.length > 0 || vitalAlerts.length > 0) {
      overallRiskLevel = 'MODERATE';
    }

    const suggestedClinicalActions: string[] = [];
    if (detectedInteractions.length > 0) {
      suggestedClinicalActions.push(`Review ${detectedInteractions.length} potential drug-drug interaction(s) prior to dispensing new prescriptions.`);
    }
    if (detectedAllergyWarnings.length > 0) {
      suggestedClinicalActions.push('URGENT: Patient has registered drug hypersensitivities with potential cross-reactivity to prescribed regimens.');
    }
    if (vitalAlerts.length > 0) {
      suggestedClinicalActions.push(`Address ${vitalAlerts.length} vital sign out-of-range alert(s).`);
    }

    return {
      patientId: req.patientId,
      timestamp: new Date().toISOString(),
      interactionsDetected: detectedInteractions,
      allergyWarnings: detectedAllergyWarnings,
      vitalAlerts,
      guidelineAdvisories,
      calculatedRiskScores,
      overallRiskLevel,
      suggestedClinicalActions,
    };
  }
}
