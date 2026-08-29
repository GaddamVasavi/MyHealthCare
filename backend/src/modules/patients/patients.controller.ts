import { Response, NextFunction } from 'express';
import { PatientsService } from './patients.service';
import { sendSuccess } from '../../utils/response';
import { AuthenticatedRequest } from '../../middleware/auth.middleware';

export class PatientsController {
  static async getMyProfile(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user?.patientId && req.user?.role !== 'PATIENT') {
        return res.status(403).json({ success: false, message: 'Patient profile access only' });
      }
      const patient = await PatientsService.getPatientByUserId(req.user!.userId);
      return sendSuccess(res, patient, 'Patient profile retrieved');
    } catch (error) {
      return next(error);
    }
  }

  static async getPatientById(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const patientId = req.params.id;
      // Access control: Patient can only view their own profile, unless DOCTOR or ADMIN
      if (req.user?.role === 'PATIENT' && req.user.patientId !== patientId) {
        return res.status(403).json({ success: false, message: 'Unauthorized to view another patient record' });
      }
      const patient = await PatientsService.getPatientById(patientId);
      return sendSuccess(res, patient, 'Patient details retrieved');
    } catch (error) {
      return next(error);
    }
  }

  static async updateMyProfile(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const patientId = req.user?.patientId || req.params.id;
      const updated = await PatientsService.updateProfile(patientId, req.body);
      return sendSuccess(res, updated, 'Profile updated successfully');
    } catch (error) {
      return next(error);
    }
  }

  static async updateHealthProfile(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const patientId = req.user?.patientId || req.params.id;
      const updated = await PatientsService.updateHealthProfile(patientId, req.body);
      return sendSuccess(res, updated, 'Health profile updated');
    } catch (error) {
      return next(error);
    }
  }

  static async addAllergy(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const patientId = req.user?.patientId || req.params.id;
      const allergy = await PatientsService.addAllergy(patientId, req.body);
      return sendSuccess(res, allergy, 'Allergy record added', 201);
    } catch (error) {
      return next(error);
    }
  }

  static async deleteAllergy(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const patientId = req.user?.patientId || req.params.id;
      await PatientsService.deleteAllergy(patientId, req.params.allergyId);
      return sendSuccess(res, { deleted: true }, 'Allergy record deleted');
    } catch (error) {
      return next(error);
    }
  }

  static async addCondition(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const patientId = req.user?.patientId || req.params.id;
      const condition = await PatientsService.addCondition(patientId, req.body);
      return sendSuccess(res, condition, 'Medical condition recorded', 201);
    } catch (error) {
      return next(error);
    }
  }

  static async updateCondition(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const patientId = req.user?.patientId || req.params.id;
      const condition = await PatientsService.updateCondition(patientId, req.params.conditionId, req.body);
      return sendSuccess(res, condition, 'Medical condition updated');
    } catch (error) {
      return next(error);
    }
  }

  static async deleteCondition(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const patientId = req.user?.patientId || req.params.id;
      await PatientsService.deleteCondition(patientId, req.params.conditionId);
      return sendSuccess(res, { deleted: true }, 'Medical condition removed');
    } catch (error) {
      return next(error);
    }
  }

  static async getPersonalizedInsights(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const patientId = req.user?.patientId || req.params.id;
      const insights = await PatientsService.getPersonalizedInsights(patientId);
      return sendSuccess(res, insights, 'Personalized health insights & summaries');
    } catch (error) {
      return next(error);
    }
  }
}
