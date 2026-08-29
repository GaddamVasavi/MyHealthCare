import { Response, NextFunction } from 'express';
import { AnalyticsService } from './analytics.service';
import { sendSuccess } from '../../utils/response';
import { AuthenticatedRequest } from '../../middleware/auth.middleware';

export class AnalyticsController {
  static async getAdminOverview(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const data = await AnalyticsService.getAdminDashboardOverview();
      return sendSuccess(res, data, 'Admin dashboard KPIs');
    } catch (error) {
      return next(error);
    }
  }

  static async getCharts(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const charts = await AnalyticsService.getChartsData();
      return sendSuccess(res, charts, 'Analytics charts data');
    } catch (error) {
      return next(error);
    }
  }

  static async getDoctorStats(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const doctorId = req.user?.doctorId || req.params.doctorId;
      if (!doctorId) {
        return res.status(400).json({ success: false, message: 'Doctor ID required' });
      }
      const stats = await AnalyticsService.getDoctorDashboardStats(doctorId);
      return sendSuccess(res, stats, 'Doctor dashboard statistics');
    } catch (error) {
      return next(error);
    }
  }
}
