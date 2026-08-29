import { Router } from 'express';
import { ImagingController } from './imaging.controller';
import { authenticate } from '../../middleware/auth.middleware';

const router = Router();

router.use(authenticate);

router.get('/studies/:patientId', ImagingController.getPatientStudies);
router.post('/reports', ImagingController.createReport);

export default router;
