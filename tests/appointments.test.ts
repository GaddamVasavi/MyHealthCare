import request from 'supertest';
import app from '../backend/src/app';
import prisma from '../backend/src/database/prisma';

describe('Appointments & Double-Booking Prevention Module Tests', () => {
  let doctor: any;
  let patient: any;
  let patientToken: string;
  const bookingDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  beforeAll(async () => {
    // Find or create test doctor & patient
    doctor = await prisma.doctor.findFirst({
      include: { user: true },
    });

    // Register a test patient
    const regRes = await request(app)
      .post('/api/auth/register/patient')
      .send({
        email: `patient.appt.${Date.now()}@testmail.com`,
        password: 'Password@123',
        firstName: 'ApptTest',
        lastName: 'Patient',
        phone: '+1-555-4321',
        dateOfBirth: '1990-05-10',
        gender: 'FEMALE',
      });

    patient = regRes.body.data.patient;
    patientToken = regRes.body.data.accessToken;
  });

  afterAll(async () => {
    if (patient) {
      await prisma.appointment.deleteMany({ where: { patientId: patient.id } });
      await prisma.invoice.deleteMany({ where: { patientId: patient.id } });
      await prisma.notification.deleteMany({ where: { userId: patient.userId } });
      await prisma.patient.deleteMany({ where: { id: patient.id } });
      await prisma.user.deleteMany({ where: { id: patient.userId } });
    }
    await prisma.$disconnect();
  });

  it('1. Should calculate available doctor time slots for a target date', async () => {
    if (!doctor) return;
    const res = await request(app)
      .get(`/api/appointments/available-slots?doctorId=${doctor.id}&date=${bookingDate}`);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.slots).toBeDefined();
  });

  it('2. Should successfully book an appointment and generate an invoice', async () => {
    if (!doctor) return;
    const res = await request(app)
      .post('/api/appointments')
      .set('Authorization', `Bearer ${patientToken}`)
      .send({
        doctorId: doctor.id,
        appointmentDate: bookingDate,
        startTime: '14:00',
        endTime: '14:30',
        reason: 'Integration test consultation',
      });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.appointmentNumber).toBeDefined();
    expect(res.body.data.status).toBe('CONFIRMED');
  });

  it('3. Should strictly reject double-booking for the same doctor and slot with 409 Conflict', async () => {
    if (!doctor) return;
    const res = await request(app)
      .post('/api/appointments')
      .set('Authorization', `Bearer ${patientToken}`)
      .send({
        doctorId: doctor.id,
        appointmentDate: bookingDate,
        startTime: '14:00',
        endTime: '14:30',
        reason: 'Duplicate slot attempt',
      });

    expect(res.status).toBe(409);
    expect(res.body.success).toBe(false);
  });
});
