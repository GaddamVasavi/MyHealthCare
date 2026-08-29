import { Router } from 'express';
import { DoctorsController } from './doctors.controller';
import { authenticate, authorize } from '../../middleware/auth.middleware';
import { validate } from '../../middleware/validate.middleware';
import { UserRole } from '@prisma/client';
import {
  updateDoctorProfileSchema,
  setAvailabilitySchema,
  addDoctorLeaveSchema,
} from './doctors.validator';

const router = Router();

// Public doctor search and profile viewing
router.get('/', DoctorsController.searchDoctors);
router.get('/:id', DoctorsController.getDoctorById);

// Doctor and Admin protected endpoints
router.put(
  '/profile',
  authenticate,
  authorize(UserRole.DOCTOR, UserRole.ADMIN),
  validate(updateDoctorProfileSchema),
  DoctorsController.updateDoctorProfile
);

router.post(
  '/availability',
  authenticate,
  authorize(UserRole.DOCTOR, UserRole.ADMIN),
  validate(setAvailabilitySchema),
  DoctorsController.setAvailability
);

router.get(
  '/leaves/my',
  authenticate,
  authorize(UserRole.DOCTOR, UserRole.ADMIN),
  DoctorsController.getDoctorLeaves
);

router.post(
  '/leaves',
  authenticate,
  authorize(UserRole.DOCTOR, UserRole.ADMIN),
  validate(addDoctorLeaveSchema),
  DoctorsController.addLeave
);

router.delete(
  '/leaves/:leaveId',
  authenticate,
  authorize(UserRole.DOCTOR, UserRole.ADMIN),
  DoctorsController.deleteDoctorLeave
);

router.get(
  '/patients/assigned',
  authenticate,
  authorize(UserRole.DOCTOR, UserRole.ADMIN),
  DoctorsController.getDoctorPatients
);

export default router;
