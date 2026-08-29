import prisma from '../../database/prisma';
import crypto from 'crypto';
import { LabStatus, NotificationType, InvoiceStatus } from '@prisma/client';

export class LaboratoryService {
  static async getAllTests() {
    return prisma.labTest.findMany({
      where: { isActive: true },
      orderBy: { category: 'asc' },
    });
  }

  static async createLabTest(data: any) {
    return prisma.labTest.create({
      data: {
        code: data.code.toUpperCase(),
        name: data.name,
        category: data.category.toUpperCase(),
        description: data.description,
        price: data.price,
        normalRange: data.normalRange,
        unit: data.unit,
        sampleType: data.sampleType,
        tatHours: data.tatHours || 24,
      },
    });
  }

  static async createLabOrder(doctorId: string, data: any) {
    const orderNumber = `LAB-${Date.now().toString().slice(-6)}-${crypto.randomBytes(2).toString('hex').toUpperCase()}`;

    return prisma.$transaction(async (tx) => {
      const doctor = await tx.doctor.findUnique({
        where: { id: doctorId },
        include: { user: true },
      });

      if (!doctor) {
        throw { statusCode: 404, message: 'Doctor not found', code: 'NOT_FOUND' };
      }

      const patient = await tx.patient.findUnique({
        where: { id: data.patientId },
        include: { user: true },
      });

      if (!patient) {
        throw { statusCode: 404, message: 'Patient not found', code: 'NOT_FOUND' };
      }

      const tests = await tx.labTest.findMany({
        where: { id: { in: data.testIds } },
      });

      if (tests.length === 0) {
        throw { statusCode: 400, message: 'No valid lab tests selected', code: 'INVALID_TESTS' };
      }

      const totalLabPrice = tests.reduce((sum, t) => sum + Number(t.price), 0);

      const labOrder = await tx.labOrder.create({
        data: {
          orderNumber,
          doctorId,
          patientId: data.patientId,
          medicalRecordId: data.medicalRecordId,
          status: LabStatus.ORDERED,
          clinicalNotes: data.clinicalNotes,
          results: {
            create: tests.map((t) => ({
              labTestId: t.id,
              testName: t.name,
              resultValue: 'Pending',
              normalRange: t.normalRange,
              unit: t.unit,
            })),
          },
        },
        include: {
          doctor: { include: { specialization: true } },
          patient: true,
          results: { include: { labTest: true } },
        },
      });

      // Generate Lab Billing Invoice
      const invoiceNumber = `INV-LAB-${Date.now().toString().slice(-6)}-${crypto.randomBytes(2).toString('hex').toUpperCase()}`;
      await tx.invoice.create({
        data: {
          invoiceNumber,
          patientId: data.patientId,
          labOrderId: labOrder.id,
          subtotal: totalLabPrice,
          tax: 0,
          discount: 0,
          totalAmount: totalLabPrice,
          dueAmount: totalLabPrice,
          status: InvoiceStatus.PENDING,
          dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          items: {
            create: tests.map((t) => ({
              description: `Lab Test: ${t.name} (${t.code})`,
              quantity: 1,
              unitPrice: t.price,
              totalPrice: t.price,
            })),
          },
        },
      });

      // Send notification
      await tx.notification.create({
        data: {
          userId: patient.userId,
          title: 'Laboratory Tests Ordered',
          message: `Dr. ${doctor.firstName} ${doctor.lastName} ordered ${tests.length} diagnostic test(s) for you.`,
          type: NotificationType.LAB_RESULT,
          linkUrl: `/patient/lab-reports/${labOrder.id}`,
        },
      });

      return labOrder;
    });
  }

  static async updateOrderStatus(orderId: string, status: LabStatus) {
    const updateData: any = { status };
    if (status === LabStatus.SAMPLE_COLLECTED) {
      updateData.sampleCollectedDate = new Date();
    } else if (status === LabStatus.COMPLETED) {
      updateData.completedDate = new Date();
    }

    const order = await prisma.labOrder.update({
      where: { id: orderId },
      data: updateData,
      include: {
        patient: { include: { user: true } },
        doctor: { include: { user: true } },
      },
    });

    if (status === LabStatus.COMPLETED) {
      await prisma.notification.create({
        data: {
          userId: order.patient.userId,
          title: 'Lab Results Ready',
          message: `Your laboratory order (${order.orderNumber}) results are ready for review.`,
          type: NotificationType.LAB_RESULT,
          linkUrl: `/patient/lab-reports/${order.id}`,
        },
      });
    }

    return order;
  }

  static async enterResult(orderId: string, data: any, verifiedBy?: string) {
    return prisma.$transaction(async (tx) => {
      const result = await tx.labResult.upsert({
        where: { id: data.resultId || 'new-result' },
        create: {
          labOrderId: orderId,
          labTestId: data.labTestId,
          testName: data.testName,
          resultValue: data.resultValue,
          normalRange: data.normalRange,
          unit: data.unit,
          isAbnormal: data.isAbnormal || false,
          comments: data.comments,
          reportFileUrl: data.reportFileUrl,
          verifiedBy: verifiedBy || 'Chief Pathologist',
          verifiedAt: new Date(),
        },
        update: {
          resultValue: data.resultValue,
          isAbnormal: data.isAbnormal,
          comments: data.comments,
          reportFileUrl: data.reportFileUrl,
          verifiedBy: verifiedBy || 'Chief Pathologist',
          verifiedAt: new Date(),
        },
      });

      // Check if all results are completed
      const allResults = await tx.labResult.findMany({ where: { labOrderId: orderId } });
      const allDone = allResults.every((r) => r.resultValue !== 'Pending');
      if (allDone) {
        await tx.labOrder.update({
          where: { id: orderId },
          data: { status: LabStatus.COMPLETED, completedDate: new Date() },
        });
      }

      return result;
    });
  }

  static async getOrderById(orderId: string, userRole: string, patientId?: string, doctorId?: string) {
    const order = await prisma.labOrder.findUnique({
      where: { id: orderId },
      include: {
        doctor: { include: { specialization: true } },
        patient: { include: { address: true, emergencyContact: true } },
        results: { include: { labTest: true } },
        invoice: { include: { items: true, payments: true } },
      },
    });

    if (!order) {
      throw { statusCode: 404, message: 'Lab order not found', code: 'NOT_FOUND' };
    }

    if (userRole === 'PATIENT' && order.patientId !== patientId) {
      throw { statusCode: 403, message: 'Unauthorized to view this laboratory record', code: 'FORBIDDEN' };
    }

    return order;
  }

  static async listOrders(query: any, userRole: string, patientId?: string, doctorId?: string) {
    const { status, page = 1, limit = 10 } = query;
    const pageNum = parseInt(page as string, 10);
    const limitNum = parseInt(limit as string, 10);
    const skip = (pageNum - 1) * limitNum;

    const where: any = {};
    if (userRole === 'PATIENT') {
      where.patientId = patientId;
    } else if (userRole === 'DOCTOR') {
      where.doctorId = doctorId;
    } else {
      if (query.patientId) where.patientId = query.patientId;
      if (query.doctorId) where.doctorId = query.doctorId;
    }

    if (status) {
      where.status = status;
    }

    const [total, orders] = await Promise.all([
      prisma.labOrder.count({ where }),
      prisma.labOrder.findMany({
        where,
        include: {
          doctor: { include: { specialization: true } },
          patient: true,
          results: { include: { labTest: true } },
          invoice: { select: { id: true, status: true, totalAmount: true } },
        },
        orderBy: { orderedDate: 'desc' },
        skip,
        take: limitNum,
      }),
    ]);

    return {
      orders,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages: Math.ceil(total / limitNum),
      },
    };
  }
}
