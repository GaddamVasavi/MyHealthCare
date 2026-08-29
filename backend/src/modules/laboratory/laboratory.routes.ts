import { Router } from 'express';
import { LaboratoryController } from './laboratory.controller';
import { authenticate, authorize } from '../../middleware/auth.middleware';
import { validate } from '../../middleware/validate.middleware';
import { UserRole } from '@prisma/client';
import {
  createLabTestSchema,
  createLabOrderSchema,
  updateLabStatusSchema,
  enterLabResultSchema,
} from './laboratory.validator';

const router = Router();

// Test catalog
router.get('/tests', LaboratoryController.getAllTests);
router.post('/tests', authenticate, authorize(UserRole.ADMIN), validate(createLabTestSchema), LaboratoryController.createLabTest);

// Lab orders
router.use(authenticate);

router.post('/orders', authorize(UserRole.DOCTOR, UserRole.ADMIN), validate(createLabOrderSchema), LaboratoryController.createLabOrder);
router.get('/orders', LaboratoryController.list);
router.get('/orders/:id', LaboratoryController.getById);
router.patch('/orders/:id/status', authorize(UserRole.DOCTOR, UserRole.ADMIN), validate(updateLabStatusSchema), LaboratoryController.updateStatus);
router.post('/orders/:id/results', authorize(UserRole.DOCTOR, UserRole.ADMIN), validate(enterLabResultSchema), LaboratoryController.enterResult);

export default router;
