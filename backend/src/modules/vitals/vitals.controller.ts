import { Response, NextFunction } from 'express';
import { VitalsService } from './vitals.service';
import { sendSuccess } from '../../utils/response';
import { AuthenticatedRequest } from '../../middleware/auth.middleware';

export class VitalsController {
  static async recordVitals(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const patientId = req.user?.role === 'PATIENT' ? req.user.patientId! : req.body.patientId;
      if (!patientId) {
        return res.status(400).json({ success: false, message: 'Patient ID required' });
      }
      const vitals = await VitalsService.recordVitals(patientId, req.body, req.user!.role);
      return sendSuccess(res, vitals, 'Vital signs recorded successfully', 201);
    } catch (error) {
      return next(error);
    }
  }

  static async getHistory(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const patientId = req.params.patientId || req.user?.patientId;
      if (!patientId) {
        return res.status(400).json({ success: false, message: 'Patient ID required' });
      }
      const history = await VitalsService.getPatientVitalsHistory(
        patientId,
        req.query.limit ? parseInt(req.query.limit as string, 10) : 50
      );
      return sendSuccess(res, history, 'Vitals history retrieved');
    } catch (error) {
      return next(error);
    }
  }

  static async getTrends(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const patientId = req.params.patientId || req.user?.patientId;
      if (!patientId) {
        return res.status(400).json({ success: false, message: 'Patient ID required' });
      }
      const trends = await VitalsService.getVitalsTrends(
        patientId,
        req.query.days ? parseInt(req.query.days as string, 10) : 90
      );
      return sendSuccess(res, trends, 'Vitals trend analytics');
    } catch (error) {
      return next(error);
    }
  }
}
