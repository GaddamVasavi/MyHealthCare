import { Request, Response, NextFunction } from 'express';
import { LaboratoryService } from './laboratory.service';
import { sendSuccess } from '../../utils/response';
import { AuthenticatedRequest } from '../../middleware/auth.middleware';

export class LaboratoryController {
  static async getAllTests(req: Request, res: Response, next: NextFunction) {
    try {
      const tests = await LaboratoryService.getAllTests();
      return sendSuccess(res, tests, 'Lab test catalog');
    } catch (error) {
      return next(error);
    }
  }

  static async createLabTest(req: Request, res: Response, next: NextFunction) {
    try {
      const test = await LaboratoryService.createLabTest(req.body);
      return sendSuccess(res, test, 'Lab test created', 201);
    } catch (error) {
      return next(error);
    }
  }

  static async createLabOrder(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const doctorId = req.user?.doctorId;
      if (!doctorId && req.user?.role !== 'ADMIN') {
        return res.status(403).json({ success: false, message: 'Only authorized doctors can order laboratory tests' });
      }
      const docId = doctorId || req.body.doctorId;
      const order = await LaboratoryService.createLabOrder(docId, req.body);
      return sendSuccess(res, order, 'Laboratory order created successfully', 201);
    } catch (error) {
      return next(error);
    }
  }

  static async updateStatus(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const updated = await LaboratoryService.updateOrderStatus(req.params.id, req.body.status);
      return sendSuccess(res, updated, 'Lab order status updated');
    } catch (error) {
      return next(error);
    }
  }

  static async enterResult(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const result = await LaboratoryService.enterResult(
        req.params.id,
        req.body,
        req.user?.email
      );
      return sendSuccess(res, result, 'Lab result recorded');
    } catch (error) {
      return next(error);
    }
  }

  static async getById(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const order = await LaboratoryService.getOrderById(
        req.params.id,
        req.user!.role,
        req.user?.patientId,
        req.user?.doctorId
      );
      return sendSuccess(res, order, 'Lab order details');
    } catch (error) {
      return next(error);
    }
  }

  static async list(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const result = await LaboratoryService.listOrders(
        req.query,
        req.user!.role,
        req.user?.patientId,
        req.user?.doctorId
      );
      return sendSuccess(res, result.orders, 'Lab orders list', 200, result.pagination);
    } catch (error) {
      return next(error);
    }
  }
}
