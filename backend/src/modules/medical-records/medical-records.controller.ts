import { Response, NextFunction } from 'express';
import { MedicalRecordsService } from './medical-records.service';
import { sendSuccess } from '../../utils/response';
import { AuthenticatedRequest } from '../../middleware/auth.middleware';

export class MedicalRecordsController {
  static async createRecord(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const doctorId = req.user?.doctorId;
      if (!doctorId && req.user?.role !== 'ADMIN') {
        return res.status(403).json({ success: false, message: 'Only authorized doctors can create clinical records' });
      }

      const docId = doctorId || req.body.doctorId;
      const record = await MedicalRecordsService.createRecord(
        docId,
        req.body,
        req.ip || req.socket.remoteAddress,
        req.get('user-agent')
      );
      return sendSuccess(res, record, 'Medical record created successfully', 201);
    } catch (error) {
      return next(error);
    }
  }

  static async getRecordById(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const record = await MedicalRecordsService.getRecordById(
        req.params.id,
        req.user!.role,
        req.user!.userId,
        req.user?.patientId,
        req.user?.doctorId
      );
      return sendSuccess(res, record, 'Medical record retrieved');
    } catch (error) {
      return next(error);
    }
  }

  static async getPatientHistory(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const patientId = req.params.patientId || req.user?.patientId;
      if (!patientId) {
        return res.status(400).json({ success: false, message: 'Patient ID required' });
      }
      const history = await MedicalRecordsService.getPatientMedicalHistory(
        patientId,
        req.user!.role,
        req.user!.userId,
        req.user?.patientId
      );
      return sendSuccess(res, history, 'Patient medical history retrieved');
    } catch (error) {
      return next(error);
    }
  }

  static async addClinicalNote(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const note = await MedicalRecordsService.addClinicalNote(req.params.id, req.body);
      return sendSuccess(res, note, 'Clinical note added', 201);
    } catch (error) {
      return next(error);
    }
  }

  static async addDiagnosis(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const diagnosis = await MedicalRecordsService.addDiagnosis(req.params.id, req.body);
      return sendSuccess(res, diagnosis, 'Diagnosis recorded', 201);
    } catch (error) {
      return next(error);
    }
  }
}
