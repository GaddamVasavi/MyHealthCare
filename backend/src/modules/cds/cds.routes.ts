import { Router } from 'express';
import { CDSController } from './cds.controller';
import { authenticate } from '../../middleware/auth.middleware';

const router = Router();

router.use(authenticate);

router.post('/analyze/:patientId', CDSController.analyzePatient);
router.post('/check-interactions', CDSController.checkDrugInteractions);
router.post('/calculate-score', CDSController.calculateRiskScore);
router.get('/guidelines', CDSController.getGuidelines);

export default router;
