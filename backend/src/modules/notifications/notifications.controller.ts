import { Response, NextFunction } from 'express';
import { NotificationsService } from './notifications.service';
import { sendSuccess } from '../../utils/response';
import { AuthenticatedRequest } from '../../middleware/auth.middleware';

export class NotificationsController {
  static async getMyNotifications(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const unreadOnly = req.query.unreadOnly === 'true';
      const notifications = await NotificationsService.getUserNotifications(req.user!.userId, unreadOnly);
      const unreadCount = await NotificationsService.getUnreadCount(req.user!.userId);
      return sendSuccess(res, { notifications, unreadCount }, 'Notifications retrieved');
    } catch (error) {
      return next(error);
    }
  }

  static async markAsRead(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const updated = await NotificationsService.markAsRead(req.params.id, req.user!.userId);
      return sendSuccess(res, updated, 'Notification marked as read');
    } catch (error) {
      return next(error);
    }
  }

  static async markAllAsRead(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      await NotificationsService.markAllAsRead(req.user!.userId);
      return sendSuccess(res, { markedAll: true }, 'All notifications marked as read');
    } catch (error) {
      return next(error);
    }
  }
}
