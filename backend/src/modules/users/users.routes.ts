import { Router } from 'express';
import { UsersController } from './users.controller';
import { authenticate, authorize } from '../../middleware/auth.middleware';
import { UserRole } from '@prisma/client';

const router = Router();

router.use(authenticate, authorize(UserRole.ADMIN));

router.get('/', UsersController.listUsers);
router.patch('/:id/status', UsersController.toggleStatus);
router.delete('/:id', UsersController.deleteUser);

export default router;
