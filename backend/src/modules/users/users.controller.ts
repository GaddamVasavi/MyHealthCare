import { Response, NextFunction } from 'express';
import { UsersService } from './users.service';
import { sendSuccess } from '../../utils/response';
import { AuthenticatedRequest } from '../../middleware/auth.middleware';

export class UsersController {
  static async listUsers(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const result = await UsersService.listUsers(req.query);
      return sendSuccess(res, result.users, 'Users list', 200, result.pagination);
    } catch (error) {
      return next(error);
    }
  }

  static async toggleStatus(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const { isActive } = req.body;
      const user = await UsersService.toggleUserStatus(req.params.id, isActive);
      return sendSuccess(res, user, `User status updated to ${isActive ? 'active' : 'inactive'}`);
    } catch (error) {
      return next(error);
    }
  }

  static async deleteUser(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      await UsersService.softDeleteUser(req.params.id);
      return sendSuccess(res, { deleted: true }, 'User deleted');
    } catch (error) {
      return next(error);
    }
  }
}
