import { Request, Response, NextFunction } from 'express';
import { MedicalKnowledgeBaseService } from './medicalKb.service';
import { sendSuccess } from '../../utils/response';

export class MedicalKnowledgeBaseController {
  public static searchICD10(req: Request, res: Response, next: NextFunction): void {
    try {
      const q = (req.query.q as string) || '';
      const chapter = (req.query.chapter as string) || undefined;
      const limit = parseInt(req.query.limit as string, 10) || 50;
      const results = MedicalKnowledgeBaseService.queryICD10(q, chapter, limit);
      sendSuccess(res, { results, count: results.length });
    } catch (err) {
      next(err);
    }
  }

  public static searchSNOMED(req: Request, res: Response, next: NextFunction): void {
    try {
      const q = (req.query.q as string) || '';
      const tag = (req.query.tag as string) || undefined;
      const results = MedicalKnowledgeBaseService.querySNOMED(q, tag);
      sendSuccess(res, { results, count: results.length });
    } catch (err) {
      next(err);
    }
  }

  public static searchDrugs(req: Request, res: Response, next: NextFunction): void {
    try {
      const q = (req.query.q as string) || '';
      const tClass = (req.query.class as string) || undefined;
      const results = MedicalKnowledgeBaseService.queryPharmaceuticals(q, tClass);
      sendSuccess(res, { results, count: results.length });
    } catch (err) {
      next(err);
    }
  }

  public static getProtocols(req: Request, res: Response, next: NextFunction): void {
    try {
      const q = (req.query.q as string) || undefined;
      const acuity = (req.query.acuity as string) || undefined;
      const results = MedicalKnowledgeBaseService.getProtocols(q, acuity);
      sendSuccess(res, { protocols: results, count: results.length });
    } catch (err) {
      next(err);
    }
  }

  public static getLabCatalog(req: Request, res: Response, next: NextFunction): void {
    try {
      const dept = (req.query.dept as string) || undefined;
      const results = MedicalKnowledgeBaseService.getLabCatalog(dept);
      sendSuccess(res, { labTests: results, count: results.length });
    } catch (err) {
      next(err);
    }
  }

  public static getOncologyStaging(req: Request, res: Response, next: NextFunction): void {
    try {
      const cancer = (req.query.cancer as string) || undefined;
      const results = MedicalKnowledgeBaseService.getOncologyStaging(cancer);
      sendSuccess(res, { staging: results, count: results.length });
    } catch (err) {
      next(err);
    }
  }
}
