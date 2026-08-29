import { Router } from 'express';
import { InteropController } from './interop.controller';
import { authenticate } from '../../middleware/auth.middleware';

const router = Router();

router.use(authenticate);

router.get('/fhir/patient/:patientId', InteropController.exportPatientFHIR);
router.get('/hl7/patient/:patientId', InteropController.exportPatientHL7);
router.get('/hl7/lab-order/:labOrderId', InteropController.exportLabOrderHL7);
router.post('/hl7/parse', InteropController.parseHL7);

export default router;
