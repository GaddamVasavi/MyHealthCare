import prisma from '../../database/prisma';

export class DoctorsService {
  static async searchDoctors(query: any) {
    const {
      search,
      specializationId,
      minFee,
      maxFee,
      minExperience,
      minRating,
      isAvailable,
      page = 1,
      limit = 10,
      sortBy = 'rating',
      sortOrder = 'desc',
    } = query;

    const pageNum = parseInt(page as string, 10);
    const limitNum = parseInt(limit as string, 10);
    const skip = (pageNum - 1) * limitNum;

    const where: any = {
      deletedAt: null,
      user: { isActive: true },
    };

    if (search) {
      where.OR = [
        { firstName: { contains: search, mode: 'insensitive' } },
        { lastName: { contains: search, mode: 'insensitive' } },
        { clinicName: { contains: search, mode: 'insensitive' } },
        { qualifications: { contains: search, mode: 'insensitive' } },
      ];
    }

    if (specializationId) {
      where.specializationId = specializationId;
    }

    if (minFee || maxFee) {
      where.consultationFee = {};
      if (minFee) where.consultationFee.gte = parseFloat(minFee);
      if (maxFee) where.consultationFee.lte = parseFloat(maxFee);
    }

    if (minExperience) {
      where.experienceYears = { gte: parseInt(minExperience, 10) };
    }

    if (minRating) {
      where.rating = { gte: parseFloat(minRating) };
    }

    if (isAvailable !== undefined) {
      where.isAvailable = isAvailable === 'true' || isAvailable === true;
    }

    const orderBy: any = {};
    if (sortBy === 'fee') {
      orderBy.consultationFee = sortOrder;
    } else if (sortBy === 'experience') {
      orderBy.experienceYears = sortOrder;
    } else {
      orderBy.rating = sortOrder;
    }

    const [total, doctors] = await Promise.all([
      prisma.doctor.count({ where }),
      prisma.doctor.findMany({
        where,
        include: {
          specialization: true,
          availabilities: true,
        },
        orderBy,
        skip,
        take: limitNum,
      }),
    ]);

    return {
      doctors,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages: Math.ceil(total / limitNum),
      },
    };
  }

  static async getDoctorById(id: string) {
    const doctor = await prisma.doctor.findUnique({
      where: { id },
      include: {
        specialization: true,
        availabilities: true,
        leaves: {
          where: { endDate: { gte: new Date() } },
        },
      },
    });

    if (!doctor || doctor.deletedAt) {
      throw { statusCode: 404, message: 'Doctor not found', code: 'NOT_FOUND' };
    }

    return doctor;
  }

  static async updateDoctorProfile(doctorId: string, data: any) {
    return prisma.doctor.update({
      where: { id: doctorId },
      data,
      include: {
        specialization: true,
        availabilities: true,
      },
    });
  }

  static async setAvailability(doctorId: string, availabilities: any[]) {
    return prisma.$transaction(async (tx) => {
      // Remove old availability rules
      await tx.doctorAvailability.deleteMany({ where: { doctorId } });

      // Create new ones
      await tx.doctorAvailability.createMany({
        data: availabilities.map((a) => ({
          doctorId,
          dayOfWeek: a.dayOfWeek,
          startTime: a.startTime,
          endTime: a.endTime,
          slotDurationMinutes: a.slotDurationMinutes || 30,
          isActive: a.isActive !== false,
        })),
      });

      return tx.doctorAvailability.findMany({ where: { doctorId } });
    });
  }

  static async addLeave(doctorId: string, data: any) {
    return prisma.doctorLeave.create({
      data: {
        doctorId,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        reason: data.reason,
      },
    });
  }

  static async getDoctorLeaves(doctorId: string) {
    return prisma.doctorLeave.findMany({
      where: { doctorId },
      orderBy: { startDate: 'desc' },
    });
  }

  static async deleteDoctorLeave(doctorId: string, leaveId: string) {
    const leave = await prisma.doctorLeave.findFirst({
      where: { id: leaveId, doctorId },
    });
    if (!leave) {
      throw { statusCode: 404, message: 'Leave record not found', code: 'NOT_FOUND' };
    }
    await prisma.doctorLeave.delete({ where: { id: leaveId } });
    return true;
  }

  static async getDoctorPatients(doctorId: string) {
    const appointments = await prisma.appointment.findMany({
      where: { doctorId },
      select: {
        patient: {
          include: {
            user: { select: { email: true } },
            address: true,
            emergencyContact: true,
            healthProfile: true,
            vitalSigns: { take: 1, orderBy: { recordedAt: 'desc' } },
          },
        },
      },
      distinct: ['patientId'],
    });

    return appointments.map((a) => a.patient);
  }
}
