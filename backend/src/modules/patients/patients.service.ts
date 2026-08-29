import prisma from '../../database/prisma';

export class PatientsService {
  static async getPatientById(id: string) {
    const patient = await prisma.patient.findUnique({
      where: { id },
      include: {
        user: { select: { email: true, role: true, isActive: true } },
        address: true,
        emergencyContact: true,
        healthProfile: true,
        allergies: true,
        conditions: true,
        insurancePolicies: { include: { provider: true } },
      },
    });

    if (!patient || patient.deletedAt) {
      throw { statusCode: 404, message: 'Patient not found', code: 'NOT_FOUND' };
    }

    return patient;
  }

  static async getPatientByUserId(userId: string) {
    const patient = await prisma.patient.findUnique({
      where: { userId },
      include: {
        user: { select: { email: true, role: true, isActive: true } },
        address: true,
        emergencyContact: true,
        healthProfile: true,
        allergies: true,
        conditions: true,
        insurancePolicies: { include: { provider: true } },
      },
    });

    if (!patient || patient.deletedAt) {
      throw { statusCode: 404, message: 'Patient profile not found', code: 'NOT_FOUND' };
    }

    return patient;
  }

  static async updateProfile(patientId: string, data: any) {
    const {
      street,
      city,
      state,
      postalCode,
      country,
      emergencyContactName,
      emergencyContactRelationship,
      emergencyContactPhone,
      emergencyContactAltPhone,
      emergencyContactEmail,
      ...patientFields
    } = data;

    return prisma.$transaction(async (tx) => {
      // Update patient core info
      const patient = await tx.patient.update({
        where: { id: patientId },
        data: patientFields,
      });

      // Update or create address
      if (street || city || state || postalCode) {
        await tx.address.upsert({
          where: { patientId },
          create: {
            patientId,
            street: street || '',
            city: city || '',
            state: state || '',
            postalCode: postalCode || '',
            country: country || 'India',
          },
          update: {
            street: street !== undefined ? street : undefined,
            city: city !== undefined ? city : undefined,
            state: state !== undefined ? state : undefined,
            postalCode: postalCode !== undefined ? postalCode : undefined,
            country: country !== undefined ? country : undefined,
          },
        });
      }

      // Update or create emergency contact
      if (emergencyContactName || emergencyContactPhone) {
        await tx.emergencyContact.upsert({
          where: { patientId },
          create: {
            patientId,
            contactName: emergencyContactName || '',
            relationship: emergencyContactRelationship || 'Other',
            phone: emergencyContactPhone || '',
            altPhone: emergencyContactAltPhone,
            email: emergencyContactEmail,
          },
          update: {
            contactName: emergencyContactName !== undefined ? emergencyContactName : undefined,
            relationship: emergencyContactRelationship !== undefined ? emergencyContactRelationship : undefined,
            phone: emergencyContactPhone !== undefined ? emergencyContactPhone : undefined,
            altPhone: emergencyContactAltPhone !== undefined ? emergencyContactAltPhone : undefined,
            email: emergencyContactEmail !== undefined ? emergencyContactEmail : undefined,
          },
        });
      }

      return this.getPatientById(patientId);
    });
  }

  static async updateHealthProfile(patientId: string, data: any) {
    return prisma.healthProfile.upsert({
      where: { patientId },
      create: {
        patientId,
        ...data,
      },
      update: data,
    });
  }

  static async addAllergy(patientId: string, data: any) {
    return prisma.allergy.create({
      data: {
        patientId,
        allergen: data.allergen,
        reaction: data.reaction,
        severity: data.severity,
        diagnosedOn: data.diagnosedOn ? new Date(data.diagnosedOn) : undefined,
      },
    });
  }

  static async deleteAllergy(patientId: string, allergyId: string) {
    const allergy = await prisma.allergy.findFirst({
      where: { id: allergyId, patientId },
    });
    if (!allergy) {
      throw { statusCode: 404, message: 'Allergy record not found', code: 'NOT_FOUND' };
    }
    await prisma.allergy.delete({ where: { id: allergyId } });
    return true;
  }

  static async addCondition(patientId: string, data: any) {
    return prisma.medicalCondition.create({
      data: {
        patientId,
        name: data.name,
        icdCode: data.icdCode,
        status: data.status,
        diagnosedOn: data.diagnosedOn ? new Date(data.diagnosedOn) : undefined,
        resolvedOn: data.resolvedOn ? new Date(data.resolvedOn) : undefined,
        notes: data.notes,
      },
    });
  }

  static async updateCondition(patientId: string, conditionId: string, data: any) {
    const condition = await prisma.medicalCondition.findFirst({
      where: { id: conditionId, patientId },
    });
    if (!condition) {
      throw { statusCode: 404, message: 'Condition record not found', code: 'NOT_FOUND' };
    }
    return prisma.medicalCondition.update({
      where: { id: conditionId },
      data: {
        ...data,
        diagnosedOn: data.diagnosedOn ? new Date(data.diagnosedOn) : undefined,
        resolvedOn: data.resolvedOn ? new Date(data.resolvedOn) : undefined,
      },
    });
  }

  static async deleteCondition(patientId: string, conditionId: string) {
    const condition = await prisma.medicalCondition.findFirst({
      where: { id: conditionId, patientId },
    });
    if (!condition) {
      throw { statusCode: 404, message: 'Condition record not found', code: 'NOT_FOUND' };
    }
    await prisma.medicalCondition.delete({ where: { id: conditionId } });
    return true;
  }

  static async getPersonalizedInsights(patientId: string) {
    const [
      patient,
      latestVitals,
      recentAppointments,
      activeMedications,
      recentLabOrders,
      allergies,
      conditions,
    ] = await Promise.all([
      prisma.patient.findUnique({
        where: { id: patientId },
        include: { healthProfile: true },
      }),
      prisma.vitalSign.findMany({
        where: { patientId },
        orderBy: { recordedAt: 'desc' },
        take: 5,
      }),
      prisma.appointment.findMany({
        where: { patientId, appointmentDate: { gte: new Date() } },
        orderBy: { appointmentDate: 'asc' },
        take: 3,
        include: { doctor: { include: { specialization: true } } },
      }),
      prisma.medication.findMany({
        where: { patientId, status: 'ACTIVE' },
        orderBy: { startDate: 'desc' },
      }),
      prisma.labOrder.findMany({
        where: { patientId },
        orderBy: { orderedDate: 'desc' },
        take: 3,
        include: { results: true },
      }),
      prisma.allergy.findMany({ where: { patientId } }),
      prisma.medicalCondition.findMany({ where: { patientId, status: 'ACTIVE' } }),
    ]);

    // Generate personalized informational reminders and insights
    const insights: string[] = [];
    const reminders: string[] = [];

    if (patient?.weightKg && patient.heightCm) {
      const heightInMeters = patient.heightCm / 100;
      const bmi = parseFloat((patient.weightKg / (heightInMeters * heightInMeters)).toFixed(1));
      if (bmi < 18.5) {
        insights.push(`Your calculated BMI is ${bmi} (Underweight range). Balanced nutrition tracking recommended.`);
      } else if (bmi >= 25 && bmi < 30) {
        insights.push(`Your calculated BMI is ${bmi} (Overweight range). Regular physical exercise and dietary moderation recommended.`);
      } else if (bmi >= 30) {
        insights.push(`Your calculated BMI is ${bmi} (Obese range). Consider consulting a lifestyle medicine specialist.`);
      } else {
        insights.push(`Your calculated BMI is ${bmi} (Normal healthy range). Maintain active routine.`);
      }
    }

    if (latestVitals.length > 0) {
      const v = latestVitals[0];
      if (v.systolicBp && v.diastolicBp) {
        if (v.systolicBp > 130 || v.diastolicBp > 85) {
          insights.push(`Recent Blood Pressure reading was ${v.systolicBp}/${v.diastolicBp} mmHg. Regular monitoring is recommended.`);
        }
      }
      if (v.bloodGlucoseMgDl && v.bloodGlucoseMgDl > 140) {
        insights.push(`Recent Blood Glucose reading was ${v.bloodGlucoseMgDl} mg/dL. Discuss fasting sugar benchmarks with your physician.`);
      }
    }

    if (activeMedications.length > 0) {
      reminders.push(`You have ${activeMedications.length} active medication course(s). Remember to take scheduled doses as prescribed.`);
    }

    if (recentAppointments.length > 0) {
      const nextAppt = recentAppointments[0];
      reminders.push(`Upcoming appointment with Dr. ${nextAppt.doctor.firstName} ${nextAppt.doctor.lastName} on ${new Date(nextAppt.appointmentDate).toLocaleDateString()} at ${nextAppt.startTime}.`);
    } else {
      reminders.push('No upcoming consultations scheduled. Regular annual preventive checkups are recommended.');
    }

    return {
      patient,
      latestVitals,
      recentAppointments,
      activeMedications,
      recentLabOrders,
      allergies,
      conditions,
      insights,
      reminders,
      disclaimer: 'Personalized insights and reminders are provided for general health awareness and tracking only. Always consult a certified healthcare professional for medical diagnosis and treatment plans.',
    };
  }
}
