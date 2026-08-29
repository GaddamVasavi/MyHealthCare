import { Router } from 'express';
import { MedicationsController } from './medications.controller';
import { authenticate } from '../../middleware/auth.middleware';
import { validate } from '../../middleware/validate.middleware';
import { createMedicationSchema, updateMedicationStatusSchema } from './medications.validator';

const router = Router();

router.use(authenticate);

router.post('/', validate(createMedicationSchema), MedicationsController.addMedication);
router.get('/', MedicationsController.getPatientMedications);
router.get('/patient/:patientId', MedicationsController.getPatientMedications);
router.patch('/:id/status', validate(updateMedicationStatusSchema), MedicationsController.updateStatus);
router.delete('/:id', MedicationsController.delete);

export default router;
