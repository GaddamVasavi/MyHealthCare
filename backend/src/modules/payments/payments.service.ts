import prisma from '../../database/prisma';
import crypto from 'crypto';
import { PaymentMethod, PaymentStatus, InvoiceStatus, NotificationType } from '@prisma/client';

export class PaymentsService {
  static async processPayment(data: {
    invoiceId: string;
    amount: number;
    method: PaymentMethod;
    paymentToken?: string;
  }) {
    const paymentNumber = `PAY-${Date.now().toString().slice(-6)}-${crypto.randomBytes(2).toString('hex').toUpperCase()}`;
    const transactionRef = `TXN_${crypto.randomBytes(8).toString('hex').toUpperCase()}`;

    return prisma.$transaction(async (tx) => {
      const invoice = await tx.invoice.findUnique({
        where: { id: data.invoiceId },
        include: { patient: { include: { user: true } } },
      });

      if (!invoice) {
        throw { statusCode: 404, message: 'Invoice not found', code: 'NOT_FOUND' };
      }

      if (invoice.status === InvoiceStatus.PAID) {
        throw { statusCode: 400, message: 'This invoice has already been fully paid', code: 'ALREADY_PAID' };
      }

      const payment = await tx.payment.create({
        data: {
          paymentNumber,
          invoiceId: data.invoiceId,
          amount: data.amount,
          method: data.method,
          status: PaymentStatus.SUCCESSFUL,
          transactionRef,
          paidAt: new Date(),
          gatewayResponse: JSON.stringify({
            provider: 'stripe_mock_verified',
            status: 'succeeded',
            transactionRef,
            timestamp: new Date().toISOString(),
          }),
        },
      });

      // Update invoice paid & due amount
      const newPaidAmount = Number(invoice.paidAmount) + data.amount;
      const newDueAmount = Math.max(0, Number(invoice.totalAmount) - newPaidAmount);
      const newStatus = newDueAmount === 0 ? InvoiceStatus.PAID : InvoiceStatus.PARTIALLY_PAID;

      await tx.invoice.update({
        where: { id: data.invoiceId },
        data: {
          paidAmount: newPaidAmount,
          dueAmount: newDueAmount,
          status: newStatus,
        },
      });

      // Send notification
      await tx.notification.create({
        data: {
          userId: invoice.patient.userId,
          title: 'Payment Received',
          message: `Payment of $${data.amount} for invoice ${invoice.invoiceNumber} was processed successfully.`,
          type: NotificationType.BILLING,
          linkUrl: `/patient/billing/${invoice.id}`,
        },
      });

      return payment;
    });
  }

  static async processRefund(paymentId: string, amount: number, reason: string) {
    const refundNumber = `REF-${Date.now().toString().slice(-6)}-${crypto.randomBytes(2).toString('hex').toUpperCase()}`;

    return prisma.$transaction(async (tx) => {
      const payment = await tx.payment.findUnique({
        where: { id: paymentId },
        include: { invoice: { include: { patient: { include: { user: true } } } } },
      });

      if (!payment) {
        throw { statusCode: 404, message: 'Payment not found', code: 'NOT_FOUND' };
      }

      if (payment.status !== PaymentStatus.SUCCESSFUL) {
        throw { statusCode: 400, message: 'Only successful payments can be refunded', code: 'CANNOT_REFUND' };
      }

      const refund = await tx.refund.create({
        data: {
          refundNumber,
          paymentId,
          amount,
          reason,
          status: PaymentStatus.SUCCESSFUL,
          processedAt: new Date(),
        },
      });

      // Update payment and invoice status
      await tx.payment.update({
        where: { id: paymentId },
        data: { status: PaymentStatus.REFUNDED },
      });

      const newPaidAmount = Math.max(0, Number(payment.invoice.paidAmount) - amount);
      const newDueAmount = Number(payment.invoice.totalAmount) - newPaidAmount;

      await tx.invoice.update({
        where: { id: payment.invoiceId },
        data: {
          paidAmount: newPaidAmount,
          dueAmount: newDueAmount,
          status: newPaidAmount === 0 ? InvoiceStatus.REFUNDED : InvoiceStatus.PARTIALLY_PAID,
        },
      });

      await tx.notification.create({
        data: {
          userId: payment.invoice.patient.userId,
          title: 'Refund Processed',
          message: `Refund of $${amount} for payment ${payment.paymentNumber} has been initiated.`,
          type: NotificationType.BILLING,
        },
      });

      return refund;
    });
  }

  static async getPaymentHistory(query: any, userRole: string, patientId?: string) {
    const { page = 1, limit = 10 } = query;
    const pageNum = parseInt(page as string, 10);
    const limitNum = parseInt(limit as string, 10);
    const skip = (pageNum - 1) * limitNum;

    const where: any = {};
    if (userRole === 'PATIENT') {
      where.invoice = { patientId };
    }

    const [total, payments] = await Promise.all([
      prisma.payment.count({ where }),
      prisma.payment.findMany({
        where,
        include: {
          invoice: { include: { patient: true } },
          refunds: true,
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limitNum,
      }),
    ]);

    return {
      payments,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages: Math.ceil(total / limitNum),
      },
    };
  }
}
