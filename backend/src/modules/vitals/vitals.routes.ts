import { Router } from 'express';
import { VitalsController } from './vitals.controller';
import { authenticate } from '../../middleware/auth.middleware';
import { validate } from '../../middleware/validate.middleware';
import { recordVitalsSchema } from './vitals.validator';

const router = Router();

router.use(authenticate);

router.post('/', validate(recordVitalsSchema), VitalsController.recordVitals);
router.get('/patient/:patientId/history', VitalsController.getHistory);
router.get('/patient/:patientId/trends', VitalsController.getTrends);
router.get('/my/history', VitalsController.getHistory);
router.get('/my/trends', VitalsController.getTrends);

export default router;
