import { Request, Response, NextFunction } from 'express';
import { DoctorsService } from './doctors.service';
import { sendSuccess } from '../../utils/response';
import { AuthenticatedRequest } from '../../middleware/auth.middleware';

export class DoctorsController {
  static async searchDoctors(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await DoctorsService.searchDoctors(req.query);
      return sendSuccess(res, result.doctors, 'Doctors found', 200, result.pagination);
    } catch (error) {
      return next(error);
    }
  }

  static async getDoctorById(req: Request, res: Response, next: NextFunction) {
    try {
      const doctor = await DoctorsService.getDoctorById(req.params.id);
      return sendSuccess(res, doctor, 'Doctor profile retrieved');
    } catch (error) {
      return next(error);
    }
  }

  static async updateDoctorProfile(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const doctorId = req.user?.role === 'DOCTOR' ? req.user.doctorId! : req.params.id;
      const updated = await DoctorsService.updateDoctorProfile(doctorId, req.body);
      return sendSuccess(res, updated, 'Doctor profile updated');
    } catch (error) {
      return next(error);
    }
  }

  static async setAvailability(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const doctorId = req.user?.role === 'DOCTOR' ? req.user.doctorId! : req.params.id;
      const availabilities = await DoctorsService.setAvailability(doctorId, req.body.availabilities);
      return sendSuccess(res, availabilities, 'Availability schedule updated');
    } catch (error) {
      return next(error);
    }
  }

  static async addLeave(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const doctorId = req.user?.role === 'DOCTOR' ? req.user.doctorId! : req.params.id;
      const leave = await DoctorsService.addLeave(doctorId, req.body);
      return sendSuccess(res, leave, 'Doctor leave scheduled', 201);
    } catch (error) {
      return next(error);
    }
  }

  static async getDoctorLeaves(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const doctorId = req.user?.role === 'DOCTOR' ? req.user.doctorId! : req.params.id;
      const leaves = await DoctorsService.getDoctorLeaves(doctorId);
      return sendSuccess(res, leaves, 'Doctor leaves retrieved');
    } catch (error) {
      return next(error);
    }
  }

  static async deleteDoctorLeave(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const doctorId = req.user?.role === 'DOCTOR' ? req.user.doctorId! : req.params.id;
      await DoctorsService.deleteDoctorLeave(doctorId, req.params.leaveId);
      return sendSuccess(res, { deleted: true }, 'Leave record deleted');
    } catch (error) {
      return next(error);
    }
  }

  static async getDoctorPatients(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const doctorId = req.user?.role === 'DOCTOR' ? req.user.doctorId! : req.params.id;
      const patients = await DoctorsService.getDoctorPatients(doctorId);
      return sendSuccess(res, patients, 'Doctor assigned patients retrieved');
    } catch (error) {
      return next(error);
    }
  }
}
