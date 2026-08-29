import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { sendError } from '../utils/response';
import { logger } from '../utils/logger';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  logger.error(`Error processing ${req.method} ${req.originalUrl}:`, err);

  if (err instanceof ZodError) {
    const formattedErrors = err.errors.map((e) => ({
      field: e.path.join('.'),
      message: e.message,
    }));
    return sendError(res, 'Validation error occurred', 422, 'VALIDATION_ERROR', formattedErrors);
  }

  if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
    return sendError(res, 'Invalid or expired token', 401, 'UNAUTHORIZED');
  }

  if (err.code === 'P2002') {
    return sendError(res, 'A record with this value already exists (Unique constraint violation)', 409, 'CONFLICT', {
      target: err.meta?.target,
    });
  }

  if (err.code === 'P2025') {
    return sendError(res, 'Requested record was not found', 404, 'NOT_FOUND');
  }

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  const code = err.code || 'INTERNAL_SERVER_ERROR';

  return sendError(res, message, statusCode, code);
};
