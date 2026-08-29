import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from './auth.middleware';
import prisma from '../database/prisma';
import { AuditAction } from '@prisma/client';
import { logger } from '../utils/logger';

export const recordAuditLog = (
  action: AuditAction,
  entity: string,
  getEntityId?: (req: AuthenticatedRequest) => string | undefined,
  getDetails?: (req: AuthenticatedRequest) => string | undefined
) => {
  return async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    // Record audit asynchronously after response is sent or during flow
    res.on('finish', async () => {
      if (res.statusCode >= 200 && res.statusCode < 400) {
        try {
          const entityId = getEntityId ? getEntityId(req) : req.params.id || undefined;
          const details = getDetails ? getDetails(req) : `${action} ${entity} by user ${req.user?.userId || 'ANONYMOUS'}`;
          
          await prisma.auditLog.create({
            data: {
              userId: req.user?.userId,
              action,
              entity,
              entityId,
              details,
              ipAddress: req.ip || req.socket.remoteAddress,
              userAgent: req.get('user-agent'),
            },
          });
        } catch (error) {
          logger.error('Failed to write audit log entry:', error);
        }
      }
    });

    next();
  };
};
