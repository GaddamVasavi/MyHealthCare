import { Request, Response, NextFunction } from 'express';
import { verifyAccessToken, TokenPayload } from '../utils/jwt';
import { sendError } from '../utils/response';
import prisma from '../database/prisma';
import { UserRole } from '@prisma/client';

export interface AuthenticatedRequest extends Request {
  user?: TokenPayload;
}

export const authenticate = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return sendError(res, 'Authentication token missing or malformed', 401, 'UNAUTHORIZED');
    }

    const token = authHeader.split(' ')[1];
    const payload = verifyAccessToken(token);

    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
      include: {
        patient: { select: { id: true } },
        doctor: { select: { id: true } },
      },
    });

    if (!user || !user.isActive || user.deletedAt) {
      return sendError(res, 'User account is deactivated or no longer exists', 401, 'UNAUTHORIZED');
    }

    req.user = {
      userId: user.id,
      email: user.email,
      role: user.role,
      patientId: user.patient?.id,
      doctorId: user.doctor?.id,
    };

    return next();
  } catch (error) {
    return sendError(res, 'Invalid or expired authentication session', 401, 'UNAUTHORIZED');
  }
};

export const authorize = (...allowedRoles: UserRole[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return sendError(res, 'Authentication required', 401, 'UNAUTHORIZED');
    }

    if (!allowedRoles.includes(req.user.role)) {
      return sendError(
        res,
        `Access denied. Requires one of roles: [${allowedRoles.join(', ')}]`,
        403,
        'FORBIDDEN'
      );
    }

    return next();
  };
};
