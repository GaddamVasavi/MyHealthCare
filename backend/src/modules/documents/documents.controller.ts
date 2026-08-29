import { Response, NextFunction } from 'express';
import { DocumentsService } from './documents.service';
import { sendSuccess } from '../../utils/response';
import { AuthenticatedRequest } from '../../middleware/auth.middleware';

export class DocumentsController {
  static async uploadDocument(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const patientId = req.user?.role === 'PATIENT' ? req.user.patientId! : req.body.patientId;
      if (!patientId) {
        return res.status(400).json({ success: false, message: 'Patient ID is required' });
      }

      const doc = await DocumentsService.uploadDocumentMetadata({
        ...req.body,
        patientId,
        uploadedBy: req.user!.email,
      });

      return sendSuccess(res, doc, 'Document uploaded and indexed successfully', 201);
    } catch (error) {
      return next(error);
    }
  }

  static async getPatientDocuments(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const patientId = req.params.patientId || req.user?.patientId;
      if (!patientId) {
        return res.status(400).json({ success: false, message: 'Patient ID is required' });
      }
      const docs = await DocumentsService.getPatientDocuments(patientId, req.query.category as any);
      return sendSuccess(res, docs, 'Documents retrieved');
    } catch (error) {
      return next(error);
    }
  }

  static async deleteDocument(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const patientId = req.user?.patientId || req.params.patientId;
      if (!patientId) {
        return res.status(400).json({ success: false, message: 'Patient ID is required' });
      }
      await DocumentsService.deleteDocument(patientId, req.params.id);
      return sendSuccess(res, { deleted: true }, 'Document deleted');
    } catch (error) {
      return next(error);
    }
  }
}
