import { Request, Response, NextFunction } from 'express';
import { AuthService } from './auth.service';
import { sendSuccess } from '../../utils/response';
import { AuthenticatedRequest } from '../../middleware/auth.middleware';

export class AuthController {
  static async registerPatient(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await AuthService.registerPatient(
        req.body,
        req.ip || req.socket.remoteAddress,
        req.get('user-agent')
      );
      return sendSuccess(res, result, 'Patient registered successfully', 201);
    } catch (error) {
      return next(error);
    }
  }

  static async registerDoctor(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await AuthService.registerDoctor(
        req.body,
        req.ip || req.socket.remoteAddress,
        req.get('user-agent')
      );
      return sendSuccess(res, result, 'Doctor registered successfully', 201);
    } catch (error) {
      return next(error);
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await AuthService.login(
        req.body,
        req.ip || req.socket.remoteAddress,
        req.get('user-agent')
      );
      return sendSuccess(res, result, 'Logged in successfully');
    } catch (error) {
      return next(error);
    }
  }

  static async refreshToken(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.body;
      const result = await AuthService.refreshToken(refreshToken);
      return sendSuccess(res, result, 'Token refreshed successfully');
    } catch (error) {
      return next(error);
    }
  }

  static async logout(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.body;
      await AuthService.logout(refreshToken, req.user?.userId);
      return sendSuccess(res, { loggedOut: true }, 'Logged out successfully');
    } catch (error) {
      return next(error);
    }
  }

  static async getMe(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
      }
      const user = await AuthService.getCurrentUser(req.user.userId);
      return sendSuccess(res, user, 'Current user profile retrieved');
    } catch (error) {
      return next(error);
    }
  }

  static async forgotPassword(req: Request, res: Response, next: NextFunction) {
    try {
      await AuthService.forgotPassword(req.body.email);
      return sendSuccess(
        res,
        { emailSent: true },
        'If the email exists in our system, password reset instructions have been dispatched.'
      );
    } catch (error) {
      return next(error);
    }
  }

  static async resetPassword(req: Request, res: Response, next: NextFunction) {
    try {
      await AuthService.resetPassword(req.body.token, req.body.newPassword);
      return sendSuccess(res, { reset: true }, 'Password has been reset successfully. Please log in with your new password.');
    } catch (error) {
      return next(error);
    }
  }

  static async changePassword(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
      }
      await AuthService.changePassword(req.user.userId, req.body.currentPassword, req.body.newPassword);
      return sendSuccess(res, { updated: true }, 'Password updated successfully');
    } catch (error) {
      return next(error);
    }
  }
}
