import { Response, NextFunction } from 'express';
import prisma from '../../database/prisma';
import { sendSuccess } from '../../utils/response';
import { AuthenticatedRequest } from '../../middleware/auth.middleware';

export class AuditLogsController {
  static async getLogs(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const { action, entity, userId, page = 1, limit = 20 } = req.query;
      const pageNum = parseInt(page as string, 10);
      const limitNum = parseInt(limit as string, 10);
      const skip = (pageNum - 1) * limitNum;

      const where: any = {};
      if (action) where.action = action;
      if (entity) where.entity = entity;
      if (userId) where.userId = userId;

      const [total, logs] = await Promise.all([
        prisma.auditLog.count({ where }),
        prisma.auditLog.findMany({
          where,
          include: {
            user: { select: { email: true, role: true } },
          },
          orderBy: { createdAt: 'desc' },
          skip,
          take: limitNum,
        }),
      ]);

      return sendSuccess(res, logs, 'Audit logs retrieved', 200, {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages: Math.ceil(total / limitNum),
      });
    } catch (error) {
      return next(error);
    }
  }
}
