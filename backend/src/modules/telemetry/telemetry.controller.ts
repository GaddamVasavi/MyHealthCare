import { Request, Response, NextFunction } from 'express';
import { TelemetryService } from './telemetry.service';
import { sendSuccess } from '../../utils/response';

export class TelemetryController {
  public static async getPatientTelemetry(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const patientId = req.params.patientId || req.user?.patientId;
      const metrics = await TelemetryService.getPatientRemoteMonitoring(patientId);
      sendSuccess(res, metrics, 'Remote telemetry metrics fetched successfully.');
    } catch (err) {
      next(err);
    }
  }
}
