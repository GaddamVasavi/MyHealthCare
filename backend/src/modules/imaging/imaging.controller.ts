import { Request, Response, NextFunction } from 'express';
import { ImagingService } from './imaging.service';
import { sendSuccess } from '../../utils/response';

export class ImagingController {
  public static async getPatientStudies(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const patientId = req.params.patientId || (req as any).user?.patientId;
      const studies = await ImagingService.getPatientDICOMStudies(patientId);
      sendSuccess(res, { studies, count: studies.length });
    } catch (err) {
      next(err);
    }
  }

  public static async createReport(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const report = await ImagingService.createRadiologyReport(req.body);
      sendSuccess(res, report, 'Structured Radiology Report created and signed successfully.');
    } catch (err) {
      next(err);
    }
  }
}
