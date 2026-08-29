import { Router } from 'express';
import { InsuranceController } from './insurance.controller';
import { authenticate, authorize } from '../../middleware/auth.middleware';
import { UserRole } from '@prisma/client';

const router = Router();

// Public / Authenticated provider listing
router.get('/providers', InsuranceController.getProviders);

router.use(authenticate);

router.post('/providers', authorize(UserRole.ADMIN), InsuranceController.createProvider);
router.post('/policies', InsuranceController.addPolicy);
router.get('/policies', InsuranceController.getMyPolicies);
router.get('/policies/patient/:patientId', InsuranceController.getMyPolicies);

router.post('/claims', InsuranceController.submitClaim);
router.get('/claims', InsuranceController.listClaims);
router.patch('/claims/:id/adjudicate', authorize(UserRole.ADMIN), InsuranceController.adjudicateClaim);

export default router;
