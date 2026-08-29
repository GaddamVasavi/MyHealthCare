import { Request, Response, NextFunction } from 'express';
import { TerminologyService } from './terminology.service';
import { sendSuccess } from '../../utils/response';

export class TerminologyController {
  public static async searchICD10(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const q = (req.query.q as string) || '';
      const chapter = (req.query.chapter as string) || undefined;
      const results = TerminologyService.searchICD10(q, chapter);
      sendSuccess(res, { results, count: results.length });
    } catch (err) {
      next(err);
    }
  }

  public static async searchCPT(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const q = (req.query.q as string) || '';
      const category = (req.query.category as string) || undefined;
      const results = TerminologyService.searchCPT(q, category);
      sendSuccess(res, { results, count: results.length });
    } catch (err) {
      next(err);
    }
  }

  public static async searchLOINC(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const q = (req.query.q as string) || '';
      const results = TerminologyService.searchLOINC(q);
      sendSuccess(res, { results, count: results.length });
    } catch (err) {
      next(err);
    }
  }

  public static async searchRxNorm(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const q = (req.query.q as string) || '';
      const results = TerminologyService.searchRxNorm(q);
      sendSuccess(res, { results, count: results.length });
    } catch (err) {
      next(err);
    }
  }
}
