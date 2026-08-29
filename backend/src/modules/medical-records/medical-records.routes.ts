import { Router } from 'express';
import { MedicalRecordsController } from './medical-records.controller';
import { authenticate, authorize } from '../../middleware/auth.middleware';
import { validate } from '../../middleware/validate.middleware';
import { UserRole } from '@prisma/client';
import {
  createMedicalRecordSchema,
  addClinicalNoteSchema,
  addDiagnosisSchema,
} from './medical-records.validator';

const router = Router();

router.use(authenticate);

router.post(
  '/',
  authorize(UserRole.DOCTOR, UserRole.ADMIN),
  validate(createMedicalRecordSchema),
  MedicalRecordsController.createRecord
);

router.get('/patient/:patientId', MedicalRecordsController.getPatientHistory);
router.get('/:id', MedicalRecordsController.getRecordById);

router.post(
  '/:id/notes',
  authorize(UserRole.DOCTOR, UserRole.ADMIN),
  validate(addClinicalNoteSchema),
  MedicalRecordsController.addClinicalNote
);

router.post(
  '/:id/diagnoses',
  authorize(UserRole.DOCTOR, UserRole.ADMIN),
  validate(addDiagnosisSchema),
  MedicalRecordsController.addDiagnosis
);

export default router;
