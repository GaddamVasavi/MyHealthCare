import { Request, Response, NextFunction } from 'express';
import { InsuranceService } from './insurance.service';
import { sendSuccess } from '../../utils/response';
import { AuthenticatedRequest } from '../../middleware/auth.middleware';

export class InsuranceController {
  static async getProviders(req: Request, res: Response, next: NextFunction) {
    try {
      const providers = await InsuranceService.getProviders();
      return sendSuccess(res, providers, 'Insurance providers list');
    } catch (error) {
      return next(error);
    }
  }

  static async createProvider(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const provider = await InsuranceService.createProvider(req.body);
      return sendSuccess(res, provider, 'Insurance provider added', 201);
    } catch (error) {
      return next(error);
    }
  }

  static async addPolicy(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const patientId = req.user?.role === 'PATIENT' ? req.user.patientId! : req.body.patientId;
      if (!patientId) {
        return res.status(400).json({ success: false, message: 'Patient ID required' });
      }
      const policy = await InsuranceService.addPatientPolicy(patientId, req.body);
      return sendSuccess(res, policy, 'Insurance policy registered', 201);
    } catch (error) {
      return next(error);
    }
  }

  static async getMyPolicies(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const patientId = req.params.patientId || req.user?.patientId;
      if (!patientId) {
        return res.status(400).json({ success: false, message: 'Patient ID required' });
      }
      const policies = await InsuranceService.getPatientPolicies(patientId);
      return sendSuccess(res, policies, 'Insurance policies retrieved');
    } catch (error) {
      return next(error);
    }
  }

  static async submitClaim(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const patientId = req.user?.role === 'PATIENT' ? req.user.patientId! : req.body.patientId;
      if (!patientId) {
        return res.status(400).json({ success: false, message: 'Patient ID required' });
      }
      const claim = await InsuranceService.submitClaim(patientId, req.body);
      return sendSuccess(res, claim, 'Insurance claim submitted successfully', 201);
    } catch (error) {
      return next(error);
    }
  }

  static async adjudicateClaim(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const { status, approvedAmount, denialReason } = req.body;
      const claim = await InsuranceService.adjudicateClaim(req.params.id, status, approvedAmount, denialReason);
      return sendSuccess(res, claim, 'Insurance claim updated');
    } catch (error) {
      return next(error);
    }
  }

  static async listClaims(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const result = await InsuranceService.listClaims(
        req.query,
        req.user!.role,
        req.user?.patientId
      );
      return sendSuccess(res, result.claims, 'Claims list', 200, result.pagination);
    } catch (error) {
      return next(error);
    }
  }
}
