import { Response } from 'express';

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data: T | null;
  error?: {
    code: string;
    details?: any;
  };
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export const sendSuccess = <T>(
  res: Response,
  data: T,
  message = 'Operation successful',
  statusCode = 200,
  pagination?: { page: number; limit: number; total: number; totalPages: number }
): Response => {
  const payload: ApiResponse<T> = {
    success: true,
    message,
    data,
    ...(pagination ? { pagination } : {}),
  };
  return res.status(statusCode).json(payload);
};

export const sendError = (
  res: Response,
  message = 'Operation failed',
  statusCode = 400,
  code = 'BAD_REQUEST',
  details?: any
): Response => {
  const payload: ApiResponse = {
    success: false,
    message,
    data: null,
    error: {
      code,
      details: details || null,
    },
  };
  return res.status(statusCode).json(payload);
};
