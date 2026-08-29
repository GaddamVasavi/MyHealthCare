import { Response, NextFunction } from 'express';
import { PrescriptionsService } from './prescriptions.service';
import { sendSuccess } from '../../utils/response';
import { AuthenticatedRequest } from '../../middleware/auth.middleware';

export class PrescriptionsController {
  static async create(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const doctorId = req.user?.doctorId;
      if (!doctorId && req.user?.role !== 'ADMIN') {
        return res.status(403).json({ success: false, message: 'Only authorized doctors can issue prescriptions' });
      }

      const docId = doctorId || req.body.doctorId;
      const prescription = await PrescriptionsService.createPrescription(docId, req.body);
      return sendSuccess(res, prescription, 'Prescription issued successfully', 201);
    } catch (error) {
      return next(error);
    }
  }

  static async getById(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const prescription = await PrescriptionsService.getPrescriptionById(
        req.params.id,
        req.user!.role,
        req.user!.userId,
        req.user?.patientId,
        req.user?.doctorId
      );
      return sendSuccess(res, prescription, 'Prescription details');
    } catch (error) {
      return next(error);
    }
  }

  static async list(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const result = await PrescriptionsService.listPrescriptions(
        req.query,
        req.user!.role,
        req.user?.patientId,
        req.user?.doctorId
      );
      return sendSuccess(res, result.prescriptions, 'Prescriptions list', 200, result.pagination);
    } catch (error) {
      return next(error);
    }
  }
}
