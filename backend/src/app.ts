import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { config } from './config';
import { errorHandler } from './middleware/error.middleware';
import { apiRateLimiter } from './middleware/rateLimiter.middleware';
import { sendSuccess } from './utils/response';

// Route imports
import authRoutes from './modules/auth/auth.routes';
import usersRoutes from './modules/users/users.routes';
import patientsRoutes from './modules/patients/patients.routes';
import doctorsRoutes from './modules/doctors/doctors.routes';
import specializationsRoutes from './modules/specializations/specializations.routes';
import appointmentsRoutes from './modules/appointments/appointments.routes';
import medicalRecordsRoutes from './modules/medical-records/medical-records.routes';
import vitalsRoutes from './modules/vitals/vitals.routes';
import prescriptionsRoutes from './modules/prescriptions/prescriptions.routes';
import medicationsRoutes from './modules/medications/medications.routes';
import laboratoryRoutes from './modules/laboratory/laboratory.routes';
import documentsRoutes from './modules/documents/documents.routes';
import billingRoutes from './modules/billing/billing.routes';
import paymentsRoutes from './modules/payments/payments.routes';
import insuranceRoutes from './modules/insurance/insurance.routes';
import notificationsRoutes from './modules/notifications/notifications.routes';
import analyticsRoutes from './modules/analytics/analytics.routes';
import auditLogsRoutes from './modules/audit-logs/audit-logs.routes';
import cdsRoutes from './modules/cds/cds.routes';

const app: Express = express();

// Security and utility middleware
app.use(helmet());
app.use(
  cors({
    origin: [config.clientUrl, 'http://localhost:5173', 'http://localhost:3000', 'http://localhost:80'],
    credentials: true,
  })
);
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());
app.use('/api', apiRateLimiter);

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  return sendSuccess(res, {
    status: 'HEALTHY',
    service: 'MyHealthCare API',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    environment: config.env,
  }, 'MyHealthCare API service is fully operational');
});

// Primary API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/patients', patientsRoutes);
app.use('/api/doctors', doctorsRoutes);
app.use('/api/specializations', specializationsRoutes);
app.use('/api/appointments', appointmentsRoutes);
app.use('/api/medical-records', medicalRecordsRoutes);
app.use('/api/vitals', vitalsRoutes);
app.use('/api/prescriptions', prescriptionsRoutes);
app.use('/api/medications', medicationsRoutes);
app.use('/api/laboratory', laboratoryRoutes);
app.use('/api/documents', documentsRoutes);
app.use('/api/billing', billingRoutes);
app.use('/api/payments', paymentsRoutes);
app.use('/api/insurance', insuranceRoutes);
app.use('/api/notifications', notificationsRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/audit-logs', auditLogsRoutes);
app.use('/api/cds', cdsRoutes);

// Fallback 404 handler for undefined API routes
app.use('/api/*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: `API endpoint ${req.method} ${req.originalUrl} not found`,
    data: null,
    error: {
      code: 'ROUTE_NOT_FOUND',
    },
  });
});

// Centralized error handling
app.use(errorHandler);

export default app;
