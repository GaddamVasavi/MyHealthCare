import prisma from '../../database/prisma';
import { InvoiceStatus } from '@prisma/client';
import crypto from 'crypto';

export class BillingService {
  static async createCustomInvoice(data: {
    patientId: string;
    items: Array<{ description: string; quantity: number; unitPrice: number }>;
    tax?: number;
    discount?: number;
    notes?: string;
    dueDate?: string;
  }) {
    const invoiceNumber = `INV-GEN-${Date.now().toString().slice(-6)}-${crypto.randomBytes(2).toString('hex').toUpperCase()}`;

    const subtotal = data.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
    const tax = data.tax || 0;
    const discount = data.discount || 0;
    const totalAmount = subtotal + tax - discount;

    return prisma.invoice.create({
      data: {
        invoiceNumber,
        patientId: data.patientId,
        subtotal,
        tax,
        discount,
        totalAmount,
        dueAmount: totalAmount,
        status: InvoiceStatus.PENDING,
        dueDate: data.dueDate ? new Date(data.dueDate) : new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
        notes: data.notes,
        items: {
          create: data.items.map((item) => ({
            description: item.description,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            totalPrice: item.quantity * item.unitPrice,
          })),
        },
      },
      include: {
        items: true,
        patient: true,
      },
    });
  }

  static async getInvoiceById(invoiceId: string, userRole: string, patientId?: string) {
    const invoice = await prisma.invoice.findUnique({
      where: { id: invoiceId },
      include: {
        patient: { include: { address: true } },
        appointment: { include: { doctor: { include: { specialization: true } } } },
        labOrder: { include: { results: true } },
        items: true,
        payments: { include: { refunds: true }, orderBy: { createdAt: 'desc' } },
      },
    });

    if (!invoice) {
      throw { statusCode: 404, message: 'Invoice not found', code: 'NOT_FOUND' };
    }

    if (userRole === 'PATIENT' && invoice.patientId !== patientId) {
      throw { statusCode: 403, message: 'Unauthorized to view this invoice', code: 'FORBIDDEN' };
    }

    return invoice;
  }

  static async listInvoices(query: any, userRole: string, patientId?: string) {
    const { status, page = 1, limit = 10 } = query;
    const pageNum = parseInt(page as string, 10);
    const limitNum = parseInt(limit as string, 10);
    const skip = (pageNum - 1) * limitNum;

    const where: any = {};
    if (userRole === 'PATIENT') {
      where.patientId = patientId;
    } else {
      if (query.patientId) where.patientId = query.patientId;
    }

    if (status) {
      where.status = status;
    }

    const [total, invoices] = await Promise.all([
      prisma.invoice.count({ where }),
      prisma.invoice.findMany({
        where,
        include: {
          patient: true,
          items: true,
          payments: true,
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limitNum,
      }),
    ]);

    return {
      invoices,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages: Math.ceil(total / limitNum),
      },
    };
  }
}
