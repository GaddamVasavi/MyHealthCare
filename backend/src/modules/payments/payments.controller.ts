import { Response, NextFunction } from 'express';
import { PaymentsService } from './payments.service';
import { sendSuccess } from '../../utils/response';
import { AuthenticatedRequest } from '../../middleware/auth.middleware';

export class PaymentsController {
  static async makePayment(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const payment = await PaymentsService.processPayment(req.body);
      return sendSuccess(res, payment, 'Payment processed successfully', 201);
    } catch (error) {
      return next(error);
    }
  }

  static async processRefund(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const { paymentId, amount, reason } = req.body;
      const refund = await PaymentsService.processRefund(paymentId, amount, reason);
      return sendSuccess(res, refund, 'Refund executed successfully');
    } catch (error) {
      return next(error);
    }
  }

  static async getHistory(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const result = await PaymentsService.getPaymentHistory(
        req.query,
        req.user!.role,
        req.user?.patientId
      );
      return sendSuccess(res, result.payments, 'Payment transactions list', 200, result.pagination);
    } catch (error) {
      return next(error);
    }
  }
}
