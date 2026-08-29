import { Response, NextFunction } from 'express';
import { MedicationsService } from './medications.service';
import { sendSuccess } from '../../utils/response';
import { AuthenticatedRequest } from '../../middleware/auth.middleware';

export class MedicationsController {
  static async addMedication(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const patientId = req.user?.role === 'PATIENT' ? req.user.patientId! : req.body.patientId;
      if (!patientId) {
        return res.status(400).json({ success: false, message: 'Patient ID required' });
      }
      const medication = await MedicationsService.addMedication(patientId, req.body);
      return sendSuccess(res, medication, 'Medication added successfully', 201);
    } catch (error) {
      return next(error);
    }
  }

  static async getPatientMedications(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const patientId = req.params.patientId || req.user?.patientId;
      if (!patientId) {
        return res.status(400).json({ success: false, message: 'Patient ID required' });
      }
      const medications = await MedicationsService.getPatientMedications(
        patientId,
        req.query.status as any
      );
      return sendSuccess(res, medications, 'Medications list');
    } catch (error) {
      return next(error);
    }
  }

  static async updateStatus(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const updated = await MedicationsService.updateMedicationStatus(
        req.params.id,
        req.body.status,
        req.body.notes
      );
      return sendSuccess(res, updated, 'Medication status updated');
    } catch (error) {
      return next(error);
    }
  }

  static async delete(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const patientId = req.user?.patientId || req.params.patientId;
      if (!patientId) {
        return res.status(400).json({ success: false, message: 'Patient ID required' });
      }
      await MedicationsService.deleteMedication(patientId, req.params.id);
      return sendSuccess(res, { deleted: true }, 'Medication removed');
    } catch (error) {
      return next(error);
    }
  }
}
