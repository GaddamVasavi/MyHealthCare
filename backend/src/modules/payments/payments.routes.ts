import { Router } from 'express';
import { PaymentsController } from './payments.controller';
import { authenticate, authorize } from '../../middleware/auth.middleware';
import { UserRole } from '@prisma/client';

const router = Router();

router.use(authenticate);

router.post('/', PaymentsController.makePayment);
router.get('/', PaymentsController.getHistory);
router.post('/refund', authorize(UserRole.ADMIN), PaymentsController.processRefund);

export default router;
