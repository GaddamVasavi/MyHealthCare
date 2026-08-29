import { Request, Response, NextFunction } from 'express';
import { AppointmentsService } from './appointments.service';
import { sendSuccess } from '../../utils/response';
import { AuthenticatedRequest } from '../../middleware/auth.middleware';

export class AppointmentsController {
  static async getAvailableSlots(req: Request, res: Response, next: NextFunction) {
    try {
      const { doctorId, date } = req.query;
      if (!doctorId || !date) {
        return res.status(400).json({ success: false, message: 'doctorId and date query params required' });
      }
      const slots = await AppointmentsService.getAvailableSlots(doctorId as string, date as string);
      return sendSuccess(res, slots, 'Available slots calculated');
    } catch (error) {
      return next(error);
    }
  }

  static async bookAppointment(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const patientId = req.user?.role === 'PATIENT' ? req.user.patientId! : req.body.patientId;
      if (!patientId) {
        return res.status(400).json({ success: false, message: 'Patient ID required' });
      }
      const appointment = await AppointmentsService.bookAppointment({
        ...req.body,
        patientId,
      });
      return sendSuccess(res, appointment, 'Appointment booked successfully', 201);
    } catch (error) {
      return next(error);
    }
  }

  static async rescheduleAppointment(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const updated = await AppointmentsService.rescheduleAppointment(
        req.params.id,
        req.body,
        req.user!.role,
        req.user!.userId
      );
      return sendSuccess(res, updated, 'Appointment rescheduled successfully');
    } catch (error) {
      return next(error);
    }
  }

  static async cancelAppointment(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const cancelled = await AppointmentsService.cancelAppointment(
        req.params.id,
        req.body.cancellationReason || 'Cancelled by user',
        req.user!.role,
        req.user!.userId
      );
      return sendSuccess(res, cancelled, 'Appointment cancelled');
    } catch (error) {
      return next(error);
    }
  }

  static async updateStatus(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const updated = await AppointmentsService.updateAppointmentStatus(
        req.params.id,
        req.body.status,
        req.body.notes
      );
      return sendSuccess(res, updated, 'Appointment status updated');
    } catch (error) {
      return next(error);
    }
  }

  static async getAppointmentById(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const appointment = await AppointmentsService.getAppointmentById(req.params.id);
      return sendSuccess(res, appointment, 'Appointment details');
    } catch (error) {
      return next(error);
    }
  }

  static async listAppointments(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const result = await AppointmentsService.listAppointments(
        req.query,
        req.user!.role,
        req.user!.userId,
        req.user?.patientId,
        req.user?.doctorId
      );
      return sendSuccess(res, result.appointments, 'Appointments list', 200, result.pagination);
    } catch (error) {
      return next(error);
    }
  }
}
