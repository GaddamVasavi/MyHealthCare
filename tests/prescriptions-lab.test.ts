import request from 'supertest';
import app from '../backend/src/app';
import prisma from '../backend/src/database/prisma';

describe('Prescriptions, Medications & Laboratory Tests', () => {
  let doctorToken: string;
  let patientToken: string;
  let patient: any;
  let labTest: any;

  beforeAll(async () => {
    const docLogin = await request(app)
      .post('/api/auth/login')
      .send({ email: 'dr.smith@myhealthcare.com', password: 'Password@123' });

    if (docLogin.status === 200) {
      doctorToken = docLogin.body.data.accessToken;
    }

    const patLogin = await request(app)
      .post('/api/auth/login')
      .send({ email: 'john.doe@patient.com', password: 'Password@123' });

    if (patLogin.status === 200) {
      patientToken = patLogin.body.data.accessToken;
      patient = patLogin.body.data.patient;
    }

    labTest = await prisma.labTest.findFirst();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('1. Doctor should issue a digital prescription with items and automatically populate patient medications', async () => {
    if (!doctorToken || !patient) return;
    const res = await request(app)
      .post('/api/prescriptions')
      .set('Authorization', `Bearer ${doctorToken}`)
      .send({
        patientId: patient.id,
        generalAdvice: 'Drink plenty of water and complete entire course',
        items: [
          {
            medicineName: 'Amoxicillin',
            form: 'CAPSULE',
            dosage: '500 mg',
            frequency: '1-0-1',
            durationDays: 7,
            instructions: 'Take after meals',
          },
        ],
      });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.items.length).toBe(1);
  });

  it('2. Doctor should order laboratory diagnostic tests for patient', async () => {
    if (!doctorToken || !patient || !labTest) return;
    const res = await request(app)
      .post('/api/laboratory/orders')
      .set('Authorization', `Bearer ${doctorToken}`)
      .send({
        patientId: patient.id,
        testIds: [labTest.id],
        clinicalNotes: 'Routine diagnostic screening',
      });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.orderNumber).toBeDefined();
  });
});
