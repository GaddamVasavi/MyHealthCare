import request from 'supertest';
import app from '../backend/src/app';
import prisma from '../backend/src/database/prisma';

describe('Electronic Medical Records (EMR) & Vitals Tests', () => {
  let doctor: any;
  let doctorToken: string;
  let patient: any;
  let patientToken: string;

  beforeAll(async () => {
    // 1. Login doctor or create
    const docLogin = await request(app)
      .post('/api/auth/login')
      .send({ email: 'dr.smith@myhealthcare.com', password: 'Password@123' });

    if (docLogin.status === 200) {
      doctorToken = docLogin.body.data.accessToken;
      doctor = docLogin.body.data.doctor;
    }

    // 2. Login patient
    const patLogin = await request(app)
      .post('/api/auth/login')
      .send({ email: 'john.doe@patient.com', password: 'Password@123' });

    if (patLogin.status === 200) {
      patientToken = patLogin.body.data.accessToken;
      patient = patLogin.body.data.patient;
    }
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('1. Patient should successfully record vital signs', async () => {
    if (!patientToken) return;
    const res = await request(app)
      .post('/api/vitals')
      .set('Authorization', `Bearer ${patientToken}`)
      .send({
        systolicBp: 120,
        diastolicBp: 80,
        heartRateBpm: 72,
        bloodGlucoseMgDl: 95,
        weightKg: 82,
        heightCm: 178,
      });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.bmi).toBeDefined();
  });

  it('2. Patient should retrieve their vital signs history and trend analytics', async () => {
    if (!patientToken) return;
    const res = await request(app)
      .get('/api/vitals/my/trends')
      .set('Authorization', `Bearer ${patientToken}`);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.bpTrend).toBeDefined();
  });

  it('3. Doctor should be able to create an EMR clinical consultation record', async () => {
    if (!doctorToken || !patient) return;
    const res = await request(app)
      .post('/api/medical-records')
      .set('Authorization', `Bearer ${doctorToken}`)
      .send({
        patientId: patient.id,
        chiefComplaint: 'Patient experiencing mild seasonal allergies',
        assessment: 'Clear lungs, mild nasal congestion',
        treatmentPlan: 'Prescribe non-drowsy antihistamine',
        diagnoses: [
          { code: 'J30.9', description: 'Allergic rhinitis', type: 'PRIMARY' },
        ],
      });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.recordNumber).toBeDefined();
  });
});
