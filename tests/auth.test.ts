import request from 'supertest';
import app from '../backend/src/app';
import prisma from '../backend/src/database/prisma';

describe('Authentication & Authorization Module Tests', () => {
  const testPatientEmail = `test.patient.${Date.now()}@testmail.com`;
  let accessToken: string;
  let refreshToken: string;

  afterAll(async () => {
    // Cleanup created test user
    const user = await prisma.user.findUnique({ where: { email: testPatientEmail } });
    if (user) {
      await prisma.session.deleteMany({ where: { userId: user.id } });
      await prisma.patient.deleteMany({ where: { userId: user.id } });
      await prisma.user.delete({ where: { id: user.id } });
    }
    await prisma.$disconnect();
  });

  it('1. Should successfully register a new patient', async () => {
    const res = await request(app)
      .post('/api/auth/register/patient')
      .send({
        email: testPatientEmail,
        password: 'Password@123',
        firstName: 'Test',
        lastName: 'User',
        phone: '+1-555-9999',
        dateOfBirth: '1995-01-01',
        gender: 'MALE',
        bloodGroup: 'O_POSITIVE',
      });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.user.email).toBe(testPatientEmail);
    expect(res.body.data.accessToken).toBeDefined();
    expect(res.body.data.refreshToken).toBeDefined();

    accessToken = res.body.data.accessToken;
    refreshToken = res.body.data.refreshToken;
  });

  it('2. Should reject duplicate patient registration with 409 Conflict', async () => {
    const res = await request(app)
      .post('/api/auth/register/patient')
      .send({
        email: testPatientEmail,
        password: 'Password@123',
        firstName: 'Duplicate',
        lastName: 'User',
        phone: '+1-555-9999',
        dateOfBirth: '1995-01-01',
        gender: 'MALE',
      });

    expect(res.status).toBe(409);
    expect(res.body.success).toBe(false);
  });

  it('3. Should login with valid credentials and return JWT tokens', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: testPatientEmail,
        password: 'Password@123',
      });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.accessToken).toBeDefined();
  });

  it('4. Should reject login with invalid password', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: testPatientEmail,
        password: 'WrongPassword@999',
      });

    expect(res.status).toBe(401);
    expect(res.body.success).toBe(false);
  });

  it('5. Should refresh access token with valid refresh token', async () => {
    const res = await request(app)
      .post('/api/auth/refresh-token')
      .send({ refreshToken });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.accessToken).toBeDefined();
  });

  it('6. Should return authenticated user profile on /api/auth/me', async () => {
    const res = await request(app)
      .get('/api/auth/me')
      .set('Authorization', `Bearer ${accessToken}`);

    expect(res.status).toBe(200);
    expect(res.body.data.email).toBe(testPatientEmail);
    expect(res.body.data.role).toBe('PATIENT');
  });
});
