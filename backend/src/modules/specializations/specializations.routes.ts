import { Router } from 'express';
import { SpecializationsController } from './specializations.controller';
import { authenticate, authorize } from '../../middleware/auth.middleware';
import { UserRole } from '@prisma/client';

const router = Router();

router.get('/', SpecializationsController.getAll);
router.get('/:id', SpecializationsController.getById);
router.post('/', authenticate, authorize(UserRole.ADMIN), SpecializationsController.create);

export default router;
