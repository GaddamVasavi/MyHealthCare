import { Router } from 'express';
import { AppointmentsController } from './appointments.controller';
import { authenticate, authorize } from '../../middleware/auth.middleware';
import { validate } from '../../middleware/validate.middleware';
import { UserRole } from '@prisma/client';
import {
  bookAppointmentSchema,
  rescheduleAppointmentSchema,
  updateAppointmentStatusSchema,
} from './appointments.validator';

const router = Router();

// Public / Authenticated slot check
router.get('/available-slots', AppointmentsController.getAvailableSlots);

router.use(authenticate);

router.get('/', AppointmentsController.listAppointments);
router.get('/:id', AppointmentsController.getAppointmentById);
router.post('/', validate(bookAppointmentSchema), AppointmentsController.bookAppointment);
router.put('/:id/reschedule', validate(rescheduleAppointmentSchema), AppointmentsController.rescheduleAppointment);
router.put('/:id/cancel', AppointmentsController.cancelAppointment);
router.patch(
  '/:id/status',
  authorize(UserRole.DOCTOR, UserRole.ADMIN),
  validate(updateAppointmentStatusSchema),
  AppointmentsController.updateStatus
);

export default router;
