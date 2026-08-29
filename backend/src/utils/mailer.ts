import nodemailer from 'nodemailer';
import { config } from '../config';
import { logger } from './logger';

const transporter = nodemailer.createTransport({
  host: config.email.host,
  port: config.email.port,
  auth: config.email.user ? {
    user: config.email.user,
    pass: config.email.password,
  } : undefined,
});

export interface EmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export const sendEmail = async (options: EmailOptions): Promise<boolean> => {
  try {
    if (!config.email.user && process.env.NODE_ENV !== 'production') {
      logger.info(`[SIMULATED EMAIL] To: ${options.to} | Subject: ${options.subject}`);
      return true;
    }
    await transporter.sendMail({
      from: config.email.from,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
    });
    return true;
  } catch (error) {
    logger.error('Failed to send email:', error);
    return false;
  }
};
