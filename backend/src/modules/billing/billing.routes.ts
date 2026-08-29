import { Router } from 'express';
import { BillingController } from './billing.controller';
import { authenticate, authorize } from '../../middleware/auth.middleware';
import { UserRole } from '@prisma/client';

const router = Router();

router.use(authenticate);

router.post('/', authorize(UserRole.ADMIN), BillingController.createInvoice);
router.get('/', BillingController.listInvoices);
router.get('/:id', BillingController.getInvoiceById);

export default router;
