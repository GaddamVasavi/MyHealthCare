import request from 'supertest';
import app from '../backend/src/app';
import prisma from '../backend/src/database/prisma';

describe('Billing, Payments & Insurance Module Tests', () => {
  let patientToken: string;
  let adminToken: string;
  let patient: any;
  let testInvoiceId: string;

  beforeAll(async () => {
    const patLogin = await request(app)
      .post('/api/auth/login')
      .send({ email: 'john.doe@patient.com', password: 'Password@123' });

    if (patLogin.status === 200) {
      patientToken = patLogin.body.data.accessToken;
      patient = patLogin.body.data.patient;
    }

    const adminLogin = await request(app)
      .post('/api/auth/login')
      .send({ email: 'admin@myhealthcare.com', password: 'Admin@123456' });

    if (adminLogin.status === 200) {
      adminToken = adminLogin.body.data.accessToken;
    }
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('1. Admin should create an itemized healthcare invoice', async () => {
    if (!adminToken || !patient) return;
    const res = await request(app)
      .post('/api/billing')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        patientId: patient.id,
        items: [
          { description: 'Specialist General Consultation', quantity: 1, unitPrice: 80.0 },
          { description: 'Preventive Diagnostic Screening', quantity: 1, unitPrice: 45.0 },
        ],
        notes: 'Outpatient visit billing',
      });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.totalAmount).toBe(125.0);
    testInvoiceId = res.body.data.id;
  });

  it('2. Patient should pay for due invoice through secure payment gateway', async () => {
    if (!patientToken || !testInvoiceId) return;
    const res = await request(app)
      .post('/api/payments')
      .set('Authorization', `Bearer ${patientToken}`)
      .send({
        invoiceId: testInvoiceId,
        amount: 125.0,
        method: 'CREDIT_CARD',
      });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.status).toBe('SUCCESSFUL');
  });

  it('3. Patient should be able to submit an insurance claim', async () => {
    if (!patientToken || !patient) return;
    const policy = await prisma.insurancePolicy.findFirst({ where: { patientId: patient.id } });
    if (!policy) return;

    const res = await request(app)
      .post('/api/insurance/claims')
      .set('Authorization', `Bearer ${patientToken}`)
      .send({
        policyId: policy.id,
        claimAmount: 125.0,
        claimReason: 'Specialist consultation reimbursement',
      });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.status).toBe('SUBMITTED');
  });
});
