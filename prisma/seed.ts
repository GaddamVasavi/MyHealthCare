import { PrismaClient, UserRole, Gender, BloodGroup, DayOfWeek, AppointmentStatus, LabStatus, InvoiceStatus, PaymentStatus, PaymentMethod, MedicationStatus, ClaimStatus, NotificationType } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding MyHealthCare production-grade demo dataset...');

  // 1. Clean existing records in reverse dependency order
  await prisma.auditLog.deleteMany({});
  await prisma.notification.deleteMany({});
  await prisma.insuranceClaim.deleteMany({});
  await prisma.insurancePolicy.deleteMany({});
  await prisma.insuranceProvider.deleteMany({});
  await prisma.refund.deleteMany({});
  await prisma.payment.deleteMany({});
  await prisma.invoiceItem.deleteMany({});
  await prisma.invoice.deleteMany({});
  await prisma.medicalDocument.deleteMany({});
  await prisma.labResult.deleteMany({});
  await prisma.labOrder.deleteMany({});
  await prisma.labTest.deleteMany({});
  await prisma.prescriptionItem.deleteMany({});
  await prisma.prescription.deleteMany({});
  await prisma.medication.deleteMany({});
  await prisma.treatment.deleteMany({});
  await prisma.clinicalNote.deleteMany({});
  await prisma.diagnosis.deleteMany({});
  await prisma.vitalSign.deleteMany({});
  await prisma.medicalRecord.deleteMany({});
  await prisma.appointment.deleteMany({});
  await prisma.doctorLeave.deleteMany({});
  await prisma.doctorSchedule.deleteMany({});
  await prisma.doctorAvailability.deleteMany({});
  await prisma.doctor.deleteMany({});
  await prisma.specialization.deleteMany({});
  await prisma.allergy.deleteMany({});
  await prisma.medicalCondition.deleteMany({});
  await prisma.healthProfile.deleteMany({});
  await prisma.emergencyContact.deleteMany({});
  await prisma.address.deleteMany({});
  await prisma.patient.deleteMany({});
  await prisma.session.deleteMany({});
  await prisma.user.deleteMany({});

  const defaultPassword = await bcrypt.hash('Password@123', 10);
  const adminPassword = await bcrypt.hash('Admin@123456', 10);

  // 2. Create Admin User
  const adminUser = await prisma.user.create({
    data: {
      email: 'admin@myhealthcare.com',
      passwordHash: adminPassword,
      role: UserRole.ADMIN,
      isEmailVerified: true,
      isActive: true,
    },
  });
  console.log(`Created Admin user: ${adminUser.email}`);

  // 3. Create Specializations
  const specializationsData = [
    { name: 'Cardiology', description: 'Heart and cardiovascular system care and disease management.', icon: 'Heart' },
    { name: 'Dermatology', description: 'Skin, hair, nails and aesthetic health diagnostics.', icon: 'Sparkles' },
    { name: 'General Medicine', description: 'Comprehensive primary care, preventive checkups and diagnosis.', icon: 'Stethoscope' },
    { name: 'Pediatrics', description: 'Infant, child and adolescent health and development specialist.', icon: 'Baby' },
    { name: 'Orthopedics', description: 'Musculoskeletal system, joints, bones and spine treatment.', icon: 'Activity' },
    { name: 'Neurology', description: 'Brain, spinal cord and nervous system disorders care.', icon: 'Brain' },
    { name: 'Endocrinology', description: 'Hormonal disorders, diabetes and metabolic healthcare.', icon: 'Zap' },
    { name: 'Psychiatry', description: 'Mental health, behavioral wellness and counseling therapy.', icon: 'Smile' },
  ];

  const specializations = await Promise.all(
    specializationsData.map((spec) => prisma.specialization.create({ data: spec }))
  );
  console.log(`Created ${specializations.length} specializations`);

  const specMap = Object.fromEntries(specializations.map((s) => [s.name, s.id]));

  // 4. Create Doctors
  const doctorsData = [
    {
      email: 'dr.smith@myhealthcare.com',
      firstName: 'Arthur',
      lastName: 'Smith',
      phone: '+1-555-0101',
      specializationId: specMap['Cardiology'],
      licenseNumber: 'MED-CARD-9012',
      qualifications: 'MD, FACC (Harvard Medical School)',
      experienceYears: 16,
      consultationFee: 120.0,
      clinicName: 'St. Jude Heart Institute',
      clinicAddress: '450 Healthcare Blvd, Suite 300, Boston, MA',
      languages: 'English, French',
      rating: 4.9,
      totalReviews: 84,
      biography: 'Dr. Arthur Smith is a board-certified cardiologist with over 16 years of experience specializing in preventive cardiology, coronary interventions, and hypertension management.',
    },
    {
      email: 'dr.sarah@myhealthcare.com',
      firstName: 'Sarah',
      lastName: 'Jenkins',
      phone: '+1-555-0102',
      specializationId: specMap['Dermatology'],
      licenseNumber: 'MED-DERM-4389',
      qualifications: 'MD (Johns Hopkins), FAAD',
      experienceYears: 11,
      consultationFee: 95.0,
      clinicName: 'ClearSkin Dermatology Center',
      clinicAddress: '120 Wellness Way, New York, NY',
      languages: 'English, Spanish',
      rating: 4.8,
      totalReviews: 62,
      biography: 'Dr. Jenkins provides comprehensive medical and cosmetic dermatology with a focus on skin cancer screening and chronic eczema treatments.',
    },
    {
      email: 'dr.aravind@myhealthcare.com',
      firstName: 'Aravind',
      lastName: 'Patel',
      phone: '+1-555-0103',
      specializationId: specMap['General Medicine'],
      licenseNumber: 'MED-GEN-7712',
      qualifications: 'MBBS, MD (Internal Medicine)',
      experienceYears: 14,
      consultationFee: 80.0,
      clinicName: 'Patel Family Health Clinic',
      clinicAddress: '78 Metro Plaza, Chicago, IL',
      languages: 'English, Hindi, Gujarati',
      rating: 4.9,
      totalReviews: 110,
      biography: 'Dr. Patel is a trusted family medicine physician dedicated to preventive health, routine wellness examinations, and chronic disease mitigation.',
    },
    {
      email: 'dr.emily@myhealthcare.com',
      firstName: 'Emily',
      lastName: 'Davis',
      phone: '+1-555-0104',
      specializationId: specMap['Pediatrics'],
      licenseNumber: 'MED-PED-2201',
      qualifications: 'MD, FAAP (Stanford Medicine)',
      experienceYears: 9,
      consultationFee: 85.0,
      clinicName: 'Little Smiles Pediatric Clinic',
      clinicAddress: '310 Sunbeam Lane, San Francisco, CA',
      languages: 'English',
      rating: 4.95,
      totalReviews: 95,
      biography: 'Compassionate pediatrician focusing on developmental milestones, childhood vaccinations, and pediatric allergy management.',
    },
    {
      email: 'dr.robert@myhealthcare.com',
      firstName: 'Robert',
      lastName: 'Chen',
      phone: '+1-555-0105',
      specializationId: specMap['Orthopedics'],
      licenseNumber: 'MED-ORTHO-6150',
      qualifications: 'MD, FAAOS (Columbia University)',
      experienceYears: 18,
      consultationFee: 150.0,
      clinicName: 'Apex Bone & Joint Surgery Center',
      clinicAddress: '880 Olympic Way, Seattle, WA',
      languages: 'English, Mandarin',
      rating: 4.85,
      totalReviews: 120,
      biography: 'Senior orthopedic surgeon specializing in sports medicine, arthroscopy, joint reconstruction, and spinal ergonomics.',
    },
  ];

  const doctors = [];
  const days: DayOfWeek[] = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'];

  for (const docData of doctorsData) {
    const user = await prisma.user.create({
      data: {
        email: docData.email,
        passwordHash: defaultPassword,
        role: UserRole.DOCTOR,
        isEmailVerified: true,
        isActive: true,
      },
    });

    const doctor = await prisma.doctor.create({
      data: {
        userId: user.id,
        specializationId: docData.specializationId,
        firstName: docData.firstName,
        lastName: docData.lastName,
        phone: docData.phone,
        licenseNumber: docData.licenseNumber,
        qualifications: docData.qualifications,
        experienceYears: docData.experienceYears,
        consultationFee: docData.consultationFee,
        clinicName: docData.clinicName,
        clinicAddress: docData.clinicAddress,
        languages: docData.languages,
        rating: docData.rating,
        totalReviews: docData.totalReviews,
        biography: docData.biography,
      },
    });

    for (const day of days) {
      await prisma.doctorAvailability.create({
        data: {
          doctorId: doctor.id,
          dayOfWeek: day,
          startTime: '09:00',
          endTime: '17:00',
          slotDurationMinutes: 30,
        },
      });
    }

    doctors.push(doctor);
  }
  console.log(`Created ${doctors.length} doctors with working schedules`);

  // 5. Create Patients
  const patientsData = [
    {
      email: 'john.doe@patient.com',
      firstName: 'John',
      lastName: 'Doe',
      dob: '1988-05-14',
      gender: Gender.MALE,
      phone: '+1-555-0201',
      bloodGroup: BloodGroup.B_POSITIVE,
      heightCm: 178,
      weightKg: 82,
      street: '742 Evergreen Terrace',
      city: 'Springfield',
      state: 'IL',
      postalCode: '62704',
      emergencyName: 'Mary Doe',
      emergencyRel: 'Spouse',
      emergencyPhone: '+1-555-0202',
      smoking: 'OCCASIONAL',
      alcohol: 'LIGHT',
      exercise: 'MODERATE',
      diet: 'NON_VEGETARIAN',
      chronic: 'Stage 1 Hypertension',
      allergies: [{ allergen: 'Sulfa Drugs', reaction: 'Skin rash & hives', severity: 'MODERATE' }],
      conditions: [{ name: 'Essential Hypertension', icdCode: 'I10', status: 'ACTIVE' }],
    },
    {
      email: 'jane.smith@patient.com',
      firstName: 'Jane',
      lastName: 'Smith',
      dob: '1993-09-22',
      gender: Gender.FEMALE,
      phone: '+1-555-0301',
      bloodGroup: BloodGroup.O_POSITIVE,
      heightCm: 165,
      weightKg: 60,
      street: '124 Conch Street',
      city: 'Bikini Bottom',
      state: 'CA',
      postalCode: '90210',
      emergencyName: 'David Smith',
      emergencyRel: 'Brother',
      emergencyPhone: '+1-555-0302',
      smoking: 'NEVER',
      alcohol: 'OCCASIONAL',
      exercise: 'ACTIVE',
      diet: 'VEGETARIAN',
      chronic: 'Mild Seasonal Asthma',
      allergies: [
        { allergen: 'Penicillin', reaction: 'Anaphylaxis & swelling', severity: 'SEVERE' },
        { allergen: 'Peanuts', reaction: 'Oral itching', severity: 'MILD' },
      ],
      conditions: [{ name: 'Allergic Rhinitis', icdCode: 'J30.9', status: 'ACTIVE' }],
    },
    {
      email: 'alex.turner@patient.com',
      firstName: 'Alex',
      lastName: 'Turner',
      dob: '1981-12-03',
      gender: Gender.MALE,
      phone: '+1-555-0401',
      bloodGroup: BloodGroup.A_POSITIVE,
      heightCm: 182,
      weightKg: 88,
      street: '55 Abbey Road',
      city: 'London',
      state: 'NY',
      postalCode: '10001',
      emergencyName: 'Helen Turner',
      emergencyRel: 'Mother',
      emergencyPhone: '+1-555-0402',
      smoking: 'FORMER',
      alcohol: 'MODERATE',
      exercise: 'LIGHT',
      diet: 'NON_VEGETARIAN',
      chronic: 'Type 2 Diabetes Mellitus',
      allergies: [],
      conditions: [{ name: 'Type 2 Diabetes', icdCode: 'E11', status: 'ACTIVE' }],
    },
  ];

  const patients = [];

  for (const pat of patientsData) {
    const user = await prisma.user.create({
      data: {
        email: pat.email,
        passwordHash: defaultPassword,
        role: UserRole.PATIENT,
        isEmailVerified: true,
        isActive: true,
      },
    });

    const patient = await prisma.patient.create({
      data: {
        userId: user.id,
        firstName: pat.firstName,
        lastName: pat.lastName,
        dateOfBirth: new Date(pat.dob),
        gender: pat.gender,
        phone: pat.phone,
        bloodGroup: pat.bloodGroup,
        heightCm: pat.heightCm,
        weightKg: pat.weightKg,
        address: {
          create: {
            street: pat.street,
            city: pat.city,
            state: pat.state,
            postalCode: pat.postalCode,
            country: 'United States',
          },
        },
        emergencyContact: {
          create: {
            contactName: pat.emergencyName,
            relationship: pat.emergencyRel,
            phone: pat.emergencyPhone,
          },
        },
        healthProfile: {
          create: {
            smokingStatus: pat.smoking,
            alcoholConsumption: pat.alcohol,
            exerciseHabits: pat.exercise,
            dietaryPreferences: pat.diet,
            chronicDiseases: pat.chronic,
            notes: 'Comprehensive health profile registered.',
          },
        },
        allergies: {
          create: pat.allergies.map((a) => ({
            allergen: a.allergen,
            reaction: a.reaction,
            severity: a.severity,
          })),
        },
        conditions: {
          create: pat.conditions.map((c) => ({
            name: c.name,
            icdCode: c.icdCode,
            status: c.status,
          })),
        },
      },
    });

    patients.push(patient);
  }
  console.log(`Created ${patients.length} patients with medical profiles`);

  // 6. Create Lab Test Catalog
  const labTestsData = [
    { code: 'CBC', name: 'Complete Blood Count', category: 'HEMATOLOGY', price: 35.0, normalRange: '4.5-11.0 x10^3/uL', unit: 'cells/mcL', sampleType: 'Blood', tatHours: 12 },
    { code: 'CMP', name: 'Comprehensive Metabolic Panel', category: 'BIOCHEMISTRY', price: 55.0, normalRange: '70-99 mg/dL Fasting', unit: 'mg/dL', sampleType: 'Blood', tatHours: 24 },
    { code: 'LIPID', name: 'Lipid Panel (Cholesterol, HDL, LDL)', category: 'BIOCHEMISTRY', price: 45.0, normalRange: '< 200 Total', unit: 'mg/dL', sampleType: 'Blood', tatHours: 24 },
    { code: 'HBA1C', name: 'Hemoglobin A1c (Glycated Hb)', category: 'BIOCHEMISTRY', price: 40.0, normalRange: '< 5.7 % Normal', unit: '%', sampleType: 'Blood', tatHours: 12 },
    { code: 'TSH', name: 'Thyroid Stimulating Hormone', category: 'IMMUNOLOGY', price: 50.0, normalRange: '0.4-4.0 uIU/mL', unit: 'uIU/mL', sampleType: 'Blood', tatHours: 24 },
    { code: 'URINE', name: 'Urinalysis Routine Examination', category: 'PATHOLOGY', price: 25.0, normalRange: 'Negative / Clear', unit: 'Index', sampleType: 'Urine', tatHours: 6 },
    { code: 'XRAY', name: 'Digital Chest X-Ray (PA View)', category: 'RADIOLOGY', price: 85.0, normalRange: 'Normal lung parenchyma', unit: 'Report', sampleType: 'Imaging', tatHours: 4 },
  ];

  const labTests = await Promise.all(
    labTestsData.map((test) => prisma.labTest.create({ data: test }))
  );
  console.log(`Created ${labTests.length} diagnostic lab tests in catalog`);

  // 7. Create Insurance Providers & Patient Policies
  const provider = await prisma.insuranceProvider.create({
    data: {
      name: 'BlueCross Health Shield',
      contactNumber: '1-800-555-BLUE',
      email: 'claims@bluecross.internal',
      address: '100 Health Plaza, Chicago, IL',
    },
  });

  await prisma.insurancePolicy.create({
    data: {
      patientId: patients[0].id,
      providerId: provider.id,
      policyNumber: 'BC-99824-H',
      policyType: 'COMPREHENSIVE_GOLD',
      coverageAmount: 50000.0,
      startDate: new Date('2025-01-01'),
      expirationDate: new Date('2027-01-01'),
    },
  });
  console.log('Created insurance provider and active patient policy');

  // 8. Create Vitals Time Series for John Doe
  const vitalsRecordDates = [
    { daysAgo: 60, weight: 84.5, systolic: 138, diastolic: 88, hr: 78, glucose: 112 },
    { daysAgo: 45, weight: 83.8, systolic: 134, diastolic: 86, hr: 75, glucose: 108 },
    { daysAgo: 30, weight: 83.0, systolic: 130, diastolic: 84, hr: 72, glucose: 105 },
    { daysAgo: 15, weight: 82.5, systolic: 126, diastolic: 82, hr: 70, glucose: 102 },
    { daysAgo: 2, weight: 82.0, systolic: 122, diastolic: 80, hr: 68, glucose: 98 },
  ];

  for (const v of vitalsRecordDates) {
    const recordedAt = new Date();
    recordedAt.setDate(recordedAt.getDate() - v.daysAgo);
    const hMeters = 178 / 100;
    const bmi = parseFloat((v.weight / (hMeters * hMeters)).toFixed(1));

    await prisma.vitalSign.create({
      data: {
        patientId: patients[0].id,
        recordedAt,
        heightCm: 178,
        weightKg: v.weight,
        bmi,
        systolicBp: v.systolic,
        diastolicBp: v.diastolic,
        heartRateBpm: v.hr,
        bloodGlucoseMgDl: v.glucose,
        temperatureCelsius: 36.8,
        oxygenSaturationPct: 99,
        recordedByRole: UserRole.DOCTOR,
        notes: 'Routine outpatient blood pressure follow-up.',
      },
    });
  }
  console.log('Created historical vitals time-series data for patient charting');

  // 9. Create Historical & Upcoming Appointments
  const pastDate = new Date();
  pastDate.setDate(pastDate.getDate() - 15);

  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 3);

  // Past completed appointment with EMR record, prescription, and invoice
  const pastAppt = await prisma.appointment.create({
    data: {
      appointmentNumber: 'APT-1001-HIST',
      patientId: patients[0].id,
      doctorId: doctors[0].id, // Dr. Arthur Smith (Cardiology)
      appointmentDate: pastDate,
      startTime: '10:00',
      endTime: '10:30',
      status: AppointmentStatus.COMPLETED,
      reason: 'Routine cardiovascular checkup and blood pressure monitoring',
      consultationFee: 120.0,
    },
  });

  const medRecord = await prisma.medicalRecord.create({
    data: {
      recordNumber: 'REC-1001-CARD',
      patientId: patients[0].id,
      doctorId: doctors[0].id,
      appointmentId: pastAppt.id,
      visitDate: pastDate,
      chiefComplaint: 'Follow-up for blood pressure monitoring and mild exertional fatigue.',
      historyOfIllness: 'Patient has a 2-year history of stage 1 essential hypertension, currently on daily medication.',
      assessment: 'Well-controlled hypertension. Good response to lifestyle modifications and ACE inhibitor.',
      treatmentPlan: 'Continue current medication regimen. Maintain low-sodium diet and 30 minutes daily moderate exercise.',
      followUpDate: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000),
      diagnoses: {
        create: [
          { code: 'I10', description: 'Essential (primary) hypertension', type: 'PRIMARY', severity: 'MILD' },
        ],
      },
      clinicalNotes: {
        create: [
          { noteType: 'PROGRESS', content: 'Heart sounds S1/S2 regular, no murmurs. Lungs clear to auscultation bilaterally.' },
        ],
      },
    },
  });

  // Prescription with active medication
  await prisma.prescription.create({
    data: {
      prescriptionNumber: 'RX-9011-CARD',
      patientId: patients[0].id,
      doctorId: doctors[0].id,
      medicalRecordId: medRecord.id,
      issuedDate: pastDate,
      validUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      generalAdvice: 'Take medication every morning with water. Monitor BP weekly.',
      items: {
        create: [
          {
            medicineName: 'Lisinopril',
            form: 'TABLET',
            dosage: '10 mg',
            frequency: '1-0-0',
            durationDays: 60,
            instructions: 'Take 1 tablet every morning after breakfast',
          },
          {
            medicineName: 'Amlodipine',
            form: 'TABLET',
            dosage: '5 mg',
            frequency: '0-0-1',
            durationDays: 60,
            instructions: 'Take 1 tablet before bedtime',
          },
        ],
      },
    },
  });

  await prisma.medication.createMany({
    data: [
      {
        patientId: patients[0].id,
        name: 'Lisinopril (10 mg)',
        dosage: '10 mg',
        frequency: 'Once daily morning',
        durationDays: 60,
        startDate: pastDate,
        status: MedicationStatus.ACTIVE,
        prescribedBy: 'Dr. Arthur Smith',
        notes: 'For blood pressure control',
      },
      {
        patientId: patients[0].id,
        name: 'Amlodipine (5 mg)',
        dosage: '5 mg',
        frequency: 'Once daily evening',
        durationDays: 60,
        startDate: pastDate,
        status: MedicationStatus.ACTIVE,
        prescribedBy: 'Dr. Arthur Smith',
        notes: 'For evening blood pressure management',
      },
    ],
  });

  // Invoice & Payment
  const invoice = await prisma.invoice.create({
    data: {
      invoiceNumber: 'INV-1001-PAID',
      patientId: patients[0].id,
      appointmentId: pastAppt.id,
      subtotal: 120.0,
      tax: 0,
      discount: 0,
      totalAmount: 120.0,
      paidAmount: 120.0,
      dueAmount: 0.0,
      status: InvoiceStatus.PAID,
      dueDate: pastDate,
      items: {
        create: {
          description: 'Cardiology Specialist Consultation (Dr. Arthur Smith)',
          quantity: 1,
          unitPrice: 120.0,
          totalPrice: 120.0,
        },
      },
    },
  });

  await prisma.payment.create({
    data: {
      paymentNumber: 'PAY-1001-CONF',
      invoiceId: invoice.id,
      amount: 120.0,
      method: PaymentMethod.CREDIT_CARD,
      status: PaymentStatus.SUCCESSFUL,
      transactionRef: 'TXN_CARD_887192',
      paidAt: pastDate,
    },
  });

  // Lab Order & Results for John Doe
  const labOrder = await prisma.labOrder.create({
    data: {
      orderNumber: 'LAB-5501-DONE',
      patientId: patients[0].id,
      doctorId: doctors[0].id,
      status: LabStatus.COMPLETED,
      clinicalNotes: 'Lipid profile and kidney function monitoring',
      orderedDate: pastDate,
      sampleCollectedDate: pastDate,
      completedDate: pastDate,
      results: {
        create: [
          {
            labTestId: labTests[2].id, // Lipid Panel
            testName: 'Lipid Panel',
            resultValue: '185',
            normalRange: '< 200 Total',
            unit: 'mg/dL',
            isAbnormal: false,
            verifiedBy: 'Dr. Gregory House, MD',
            verifiedAt: pastDate,
            comments: 'Lipid panel within normal limits.',
          },
          {
            labTestId: labTests[0].id, // CBC
            testName: 'Complete Blood Count',
            resultValue: '7.2',
            normalRange: '4.5-11.0 x10^3/uL',
            unit: 'cells/mcL',
            isAbnormal: false,
            verifiedBy: 'Dr. Gregory House, MD',
            verifiedAt: pastDate,
            comments: 'Normal leukocyte count.',
          },
        ],
      },
    },
  });

  // Upcoming confirmed appointment
  await prisma.appointment.create({
    data: {
      appointmentNumber: 'APT-2002-UPCOMING',
      patientId: patients[0].id,
      doctorId: doctors[2].id, // Dr. Aravind Patel (General Medicine)
      appointmentDate: futureDate,
      startTime: '11:00',
      endTime: '11:30',
      status: AppointmentStatus.CONFIRMED,
      reason: 'Annual preventive wellness checkup',
      consultationFee: 80.0,
    },
  });

  // Notifications
  const patientUser = await prisma.user.findUnique({ where: { email: 'john.doe@patient.com' } });
  if (patientUser) {
    await prisma.notification.createMany({
      data: [
        {
          userId: patientUser.id,
          title: 'Welcome to MyHealthCare',
          message: 'Your account is active. Explore your personalized dashboard, records, and doctor appointments.',
          type: NotificationType.SYSTEM,
          isRead: false,
        },
        {
          userId: patientUser.id,
          title: 'Upcoming Appointment Reminder',
          message: `Consultation with Dr. Aravind Patel scheduled for ${futureDate.toLocaleDateString()} at 11:00 AM.`,
          type: NotificationType.APPOINTMENT,
          linkUrl: '/patient/appointments',
          isRead: false,
        },
      ],
    });
  }

  console.log('✅ MyHealthCare seed dataset successfully generated!');
}

main()
  .catch((e) => {
    console.error('Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
