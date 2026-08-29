import app from './app';
import { config } from './config';
import { logger } from './utils/logger';
import prisma from './database/prisma';

const startServer = async () => {
  try {
    // Verify database connectivity
    await prisma.$connect();
    logger.info('Database connection successfully established via Prisma');

    const server = app.listen(config.port, () => {
      logger.info(`====================================================`);
      logger.info(`  MyHealthCare Platform API Server running`);
      logger.info(`  Port: ${config.port}`);
      logger.info(`  Environment: ${config.env}`);
      logger.info(`  API Base: http://localhost:${config.port}/api`);
      logger.info(`  Health: http://localhost:${config.port}/api/health`);
      logger.info(`====================================================`);
    });

    const shutdown = async (signal: string) => {
      logger.info(`Received ${signal}. Shutting down gracefully...`);
      server.close(async () => {
        await prisma.$disconnect();
        logger.info('Database disconnected. Process terminated.');
        process.exit(0);
      });
    };

    process.on('SIGTERM', () => shutdown('SIGTERM'));
    process.on('SIGINT', () => shutdown('SIGINT'));
  } catch (error) {
    logger.error('Failed to initialize server:', error);
    process.exit(1);
  }
};

startServer();
