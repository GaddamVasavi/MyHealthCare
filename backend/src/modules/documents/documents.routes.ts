import { Router } from 'express';
import { DocumentsController } from './documents.controller';
import { authenticate } from '../../middleware/auth.middleware';

const router = Router();

router.use(authenticate);

router.post('/', DocumentsController.uploadDocument);
router.get('/', DocumentsController.getPatientDocuments);
router.get('/patient/:patientId', DocumentsController.getPatientDocuments);
router.delete('/:id', DocumentsController.deleteDocument);

export default router;
