import { Request, Response, NextFunction } from 'express';
import { EpidemiologyService } from './hedisMeasures';
import { sendSuccess } from '../../utils/response';

export class EpidemiologyController {
  public static async getHEDISDashboard(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const dashboard = await EpidemiologyService.getHEDISQualityDashboard();
      sendSuccess(res, dashboard, 'HEDIS Quality Measures & Population Health dashboard retrieved.');
    } catch (err) {
      next(err);
    }
  }
}
