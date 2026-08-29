import { Router } from 'express';
import { PatientsController } from './patients.controller';
import { authenticate, authorize } from '../../middleware/auth.middleware';
import { validate } from '../../middleware/validate.middleware';
import { UserRole } from '@prisma/client';
import {
  updatePatientProfileSchema,
  updateHealthProfileSchema,
  addAllergySchema,
  addConditionSchema,
} from './patients.validator';

const router = Router();

router.use(authenticate);

// Patient specific self routes
router.get('/me', PatientsController.getMyProfile);
router.put('/me', validate(updatePatientProfileSchema), PatientsController.updateMyProfile);
router.put('/me/health-profile', validate(updateHealthProfileSchema), PatientsController.updateHealthProfile);
router.post('/me/allergies', validate(addAllergySchema), PatientsController.addAllergy);
router.delete('/me/allergies/:allergyId', PatientsController.deleteAllergy);
router.post('/me/conditions', validate(addConditionSchema), PatientsController.addCondition);
router.put('/me/conditions/:conditionId', validate(addConditionSchema.partial()), PatientsController.updateCondition);
router.delete('/me/conditions/:conditionId', PatientsController.deleteCondition);
router.get('/me/insights', PatientsController.getPersonalizedInsights);

// Doctor & Admin accessible patient details
router.get('/:id', authorize(UserRole.DOCTOR, UserRole.ADMIN), PatientsController.getPatientById);
router.put('/:id', authorize(UserRole.ADMIN), validate(updatePatientProfileSchema), PatientsController.updateMyProfile);

export default router;
