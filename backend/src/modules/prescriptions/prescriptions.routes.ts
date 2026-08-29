import { Router } from 'express';
import { PrescriptionsController } from './prescriptions.controller';
import { authenticate, authorize } from '../../middleware/auth.middleware';
import { validate } from '../../middleware/validate.middleware';
import { UserRole } from '@prisma/client';
import { createPrescriptionSchema } from './prescriptions.validator';

const router = Router();

router.use(authenticate);

router.post('/', authorize(UserRole.DOCTOR, UserRole.ADMIN), validate(createPrescriptionSchema), PrescriptionsController.create);
router.get('/', PrescriptionsController.list);
router.get('/:id', PrescriptionsController.getById);

export default router;
