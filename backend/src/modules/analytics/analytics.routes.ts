import { Router } from 'express';
import { AnalyticsController } from './analytics.controller';
import { authenticate, authorize } from '../../middleware/auth.middleware';
import { UserRole } from '@prisma/client';

const router = Router();

router.use(authenticate);

router.get('/admin/overview', authorize(UserRole.ADMIN), AnalyticsController.getAdminOverview);
router.get('/admin/charts', authorize(UserRole.ADMIN), AnalyticsController.getCharts);
router.get('/doctor/overview', authorize(UserRole.DOCTOR, UserRole.ADMIN), AnalyticsController.getDoctorStats);

export default router;
