import { Request, Response, NextFunction } from 'express';
import { CDSService } from './cds.service';
import { DRUG_INTERACTIONS_DATA } from './drugInteractions.data';
import { CLINICAL_GUIDELINES_DATA } from './guidelines.data';
import { ClinicalCalculators } from './clinicalCalculators';
import { sendSuccess } from '../../utils/response';

export class CDSController {
  public static async analyzePatient(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const patientId = req.params.patientId || req.body.patientId;
      const result = await CDSService.analyzePatient({
        patientId,
        medications: req.body.medications,
        vitals: req.body.vitals,
        allergies: req.body.allergies,
        diagnoses: req.body.diagnoses,
      });
      sendSuccess(res, result, 'Clinical decision support analysis completed.');
    } catch (err) {
      next(err);
    }
  }

  public static async checkDrugInteractions(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { medications } = req.body as { medications: string[] };
      const normalized = (medications || []).map((m) => m.toLowerCase());
      const detected = [];

      for (let i = 0; i < normalized.length; i++) {
        for (let j = i + 1; j < normalized.length; j++) {
          const m1 = normalized[i];
          const m2 = normalized[j];

          const match = DRUG_INTERACTIONS_DATA.find(
            (r) =>
              (m1.includes(r.drugA.toLowerCase()) || m1.includes(r.genericA.toLowerCase())) &&
              (m2.includes(r.drugB.toLowerCase()) || m2.includes(r.genericB.toLowerCase())) ||
              (m2.includes(r.drugA.toLowerCase()) || m2.includes(r.genericA.toLowerCase())) &&
              (m1.includes(r.drugB.toLowerCase()) || m1.includes(r.genericB.toLowerCase()))
          );
          if (match && !detected.some((d) => d.drugA === match.drugA && d.drugB === match.drugB)) {
            detected.push(match);
          }
        }
      }

      sendSuccess(res, { interactions: detected, count: detected.length });
    } catch (err) {
      next(err);
    }
  }

  public static async calculateRiskScore(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { calculator, input } = req.body;
      let result;

      switch (calculator) {
        case 'FRAMINGHAM_CVD':
          result = ClinicalCalculators.calculateFramingham10YrCvdRisk(input);
          break;
        case 'CHA2DS2_VASC':
          result = ClinicalCalculators.calculateCHA2DS2VASc(input);
          break;
        case 'CKD_EPI_GFR':
          result = ClinicalCalculators.calculateCKDEpi2021GFR(input);
          break;
        case 'CURB_65':
          result = ClinicalCalculators.calculateCURB65(input);
          break;
        case 'MELD_NA':
          result = ClinicalCalculators.calculateMELDNa(input);
          break;
        case 'WELLS_PE':
          result = ClinicalCalculators.calculateWellsPE(input);
          break;
        case 'PHQ_9':
          result = ClinicalCalculators.calculatePHQ9(input.answers || []);
          break;
        default:
          throw { statusCode: 400, message: `Unknown calculator: ${calculator}` };
      }

      sendSuccess(res, result, 'Risk score calculated successfully.');
    } catch (err) {
      next(err);
    }
  }

  public static async getGuidelines(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      sendSuccess(res, { guidelines: CLINICAL_GUIDELINES_DATA });
    } catch (err) {
      next(err);
    }
  }
}
