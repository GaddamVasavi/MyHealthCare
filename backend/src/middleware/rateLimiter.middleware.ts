import rateLimit from 'express-rate-limit';
import { config } from '../config';
import { sendError } from '../utils/response';

export const apiRateLimiter = rateLimit({
  windowMs: config.rateLimit.windowMs,
  max: config.rateLimit.maxRequests,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    return sendError(
      res,
      'Too many requests from this IP, please try again later.',
      429,
      'RATE_LIMIT_EXCEEDED'
    );
  },
});

export const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // max 20 login/register attempts per IP per 15 minutes
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    return sendError(
      res,
      'Too many authentication attempts, please try again after 15 minutes.',
      429,
      'AUTH_RATE_LIMIT_EXCEEDED'
    );
  },
});
