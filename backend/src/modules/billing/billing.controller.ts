import { Response, NextFunction } from 'express';
import { BillingService } from './billing.service';
import { sendSuccess } from '../../utils/response';
import { AuthenticatedRequest } from '../../middleware/auth.middleware';

export class BillingController {
  static async createInvoice(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const invoice = await BillingService.createCustomInvoice(req.body);
      return sendSuccess(res, invoice, 'Invoice generated successfully', 201);
    } catch (error) {
      return next(error);
    }
  }

  static async getInvoiceById(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const invoice = await BillingService.getInvoiceById(
        req.params.id,
        req.user!.role,
        req.user?.patientId
      );
      return sendSuccess(res, invoice, 'Invoice details');
    } catch (error) {
      return next(error);
    }
  }

  static async listInvoices(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const result = await BillingService.listInvoices(
        req.query,
        req.user!.role,
        req.user?.patientId
      );
      return sendSuccess(res, result.invoices, 'Invoices list', 200, result.pagination);
    } catch (error) {
      return next(error);
    }
  }
}
