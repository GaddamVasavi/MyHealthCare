import prisma from '../../database/prisma';
import { AppointmentStatus, UserRole, MedicationStatus } from '@prisma/client';

export class AnalyticsService {
  static async getAdminDashboardOverview() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    const [
      totalPatients,
      totalDoctors,
      activeUsers,
      totalAppointments,
      completedAppointments,
      cancelledAppointments,
      todayAppointments,
      monthlyAppointments,
      totalLabOrders,
      activePrescriptions,
      invoices,
    ] = await Promise.all([
      prisma.patient.count({ where: { deletedAt: null } }),
      prisma.doctor.count({ where: { deletedAt: null } }),
      prisma.user.count({ where: { isActive: true, deletedAt: null } }),
      prisma.appointment.count(),
      prisma.appointment.count({ where: { status: AppointmentStatus.COMPLETED } }),
      prisma.appointment.count({ where: { status: AppointmentStatus.CANCELLED } }),
      prisma.appointment.count({
        where: {
          appointmentDate: { gte: today, lt: tomorrow },
        },
      }),
      prisma.appointment.count({
        where: {
          appointmentDate: { gte: firstDayOfMonth },
        },
      }),
      prisma.labOrder.count(),
      prisma.medication.count({ where: { status: MedicationStatus.ACTIVE } }),
      prisma.invoice.findMany({ select: { totalAmount: true, paidAmount: true, createdAt: true } }),
    ]);

    const totalRevenue = invoices.reduce((sum, inv) => sum + Number(inv.paidAmount), 0);
    const monthlyRevenue = invoices
      .filter((inv) => new Date(inv.createdAt) >= firstDayOfMonth)
      .reduce((sum, inv) => sum + Number(inv.paidAmount), 0);

    return {
      stats: {
        totalPatients,
        totalDoctors,
        activeUsers,
        totalAppointments,
        completedAppointments,
        cancelledAppointments,
        todayAppointments,
        monthlyAppointments,
        totalRevenue,
        monthlyRevenue,
        totalLabOrders,
        activePrescriptions,
      },
    };
  }

  static async getChartsData() {
    // 1. Appointments status distribution
    const appointmentsByStatus = await prisma.appointment.groupBy({
      by: ['status'],
      _count: { status: true },
    });

    const statusData = appointmentsByStatus.map((item) => ({
      name: item.status,
      count: item._count.status,
    }));

    // 2. Doctor specialization distribution
    const specializations = await prisma.specialization.findMany({
      include: {
        _count: { select: { doctors: true } },
      },
    });

    const specializationData = specializations.map((spec) => ({
      name: spec.name,
      doctorCount: spec._count.doctors,
    }));

    // 3. Monthly revenue and appointments trend (last 6 months)
    const monthsData = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date();
      d.setMonth(d.getMonth() - i);
      const start = new Date(d.getFullYear(), d.getMonth(), 1);
      const end = new Date(d.getFullYear(), d.getMonth() + 1, 0, 23, 59, 59);
      const monthName = start.toLocaleString('default', { month: 'short' });

      const [apptCount, monthInvoices] = await Promise.all([
        prisma.appointment.count({
          where: { appointmentDate: { gte: start, lte: end } },
        }),
        prisma.invoice.findMany({
          where: { createdAt: { gte: start, lte: end } },
          select: { paidAmount: true },
        }),
      ]);

      const rev = monthInvoices.reduce((acc, curr) => acc + Number(curr.paidAmount), 0);

      monthsData.push({
        month: monthName,
        appointments: apptCount,
        revenue: rev,
      });
    }

    return {
      statusData,
      specializationData,
      monthsData,
    };
  }

  static async getDoctorDashboardStats(doctorId: string) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const [
      todayAppointments,
      upcomingAppointments,
      completedAppointments,
      totalPatients,
      pendingLabOrders,
    ] = await Promise.all([
      prisma.appointment.findMany({
        where: {
          doctorId,
          appointmentDate: { gte: today, lt: tomorrow },
        },
        include: { patient: true },
        orderBy: { startTime: 'asc' },
      }),
      prisma.appointment.count({
        where: {
          doctorId,
          appointmentDate: { gte: tomorrow },
          status: { notIn: [AppointmentStatus.CANCELLED, AppointmentStatus.COMPLETED] },
        },
      }),
      prisma.appointment.count({
        where: {
          doctorId,
          status: AppointmentStatus.COMPLETED,
        },
      }),
      prisma.appointment.groupBy({
        by: ['patientId'],
        where: { doctorId },
      }),
      prisma.labOrder.count({
        where: {
          doctorId,
          status: { in: ['ORDERED', 'SAMPLE_COLLECTED', 'PROCESSING'] },
        },
      }),
    ]);

    return {
      todayAppointments,
      todayCount: todayAppointments.length,
      upcomingCount: upcomingAppointments,
      completedCount: completedAppointments,
      uniquePatientsCount: totalPatients.length,
      pendingLabOrders,
    };
  }
}
