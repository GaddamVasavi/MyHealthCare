import { Router } from 'express';
import { AuditLogsController } from './audit-logs.controller';
import { authenticate, authorize } from '../../middleware/auth.middleware';
import { UserRole } from '@prisma/client';

const router = Router();

router.use(authenticate, authorize(UserRole.ADMIN));

router.get('/', AuditLogsController.getLogs);

export default router;
