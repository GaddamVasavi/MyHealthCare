import { Router } from 'express';
import { TelemetryController } from './telemetry.controller';
import { authenticate } from '../../middleware/auth.middleware';

const router = Router();

router.use(authenticate);

router.get('/patient/:patientId', TelemetryController.getPatientTelemetry);
router.get('/my', TelemetryController.getPatientTelemetry);

export default router;
