# MyHealthCare – Personalized Healthcare Management Platform

An enterprise-grade, personalized digital healthcare platform built with React, TypeScript, Tailwind CSS, Redux Toolkit, Node.js/Express, and PostgreSQL with Prisma ORM. It connects Patients, Licensed Doctors, and Administrative Personnel through unified workflows for appointment booking with double-booking prevention, electronic medical records (EMR), vital signs tracking and trends, digital prescriptions, laboratory orders and diagnostics, itemized billing, payment processing, insurance claims, and HIPAA-aligned security audit logs.

---

## Architecture & Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, React Router v6, Redux Toolkit, Axios, Recharts, Lucide Icons, React Hook Form, Zod.
- **Backend**: Node.js, Express.js, TypeScript, REST API Architecture, JWT Access & Refresh Token Rotation, Helmet, CORS, Rate Limiting, Winston Logger, Nodemailer.
- **Database**: PostgreSQL with Prisma ORM (relational models, transaction-level double-booking locks, and cascade behaviors).
- **Caching & Sessions**: Redis.
- **Containerization**: Multi-stage Dockerfiles and Docker Compose.
- **Testing**: Jest and Supertest automated test suites.
- **API Specs**: OpenAPI 3.0 / Swagger.

---

## Six Primary Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts concurrent development mode for backend API (`:5000`) and frontend web (`:5173`) |
| `npm run build` | Compiles TypeScript for backend and generates optimized Vite production bundle for frontend |
| `npm run start` | Boots the compiled production Node.js server (`backend/dist/server.js`) |
| `npm run db:migrate` | Applies Prisma database migrations to PostgreSQL |
| `npm run db:seed` | Seeds the full demo dataset (Admin, Doctors across 8 specialties, Patients with medical history, vitals, prescriptions, lab results, and invoices) |
| `npm run test` | Runs Jest & Supertest integration tests across authentication, appointments, EMR, prescriptions, and billing |

---

## Six Core System Modules

### 1. Patient & User Management (Authentication & Profiles)
- Secure patient registration, doctor onboarding, and admin sign-in.
- JWT Access and Refresh token rotation with bcrypt password hashing.
- Patient personal profile, home address, emergency contacts, and blood group.
- Health profile tracking allergies, active conditions, smoking, alcohol, exercise, and previous surgical history.
- Dynamic informational health observations and preventative care reminders.

### 2. Doctor & Appointment Management
- Specialist physician catalog across 8 clinical disciplines (Cardiology, Dermatology, General Medicine, Pediatrics, Orthopedics, Neurology, Endocrinology, Psychiatry).
- Doctor working hours, slot interval configuration, and leave management.
- Real-time slot availability calculator preventing double-booking via database transactions.
- Patient booking, rescheduling, and cancellation workflows.

### 3. Electronic Medical Records (EMR) & Vitals Tracking
- Doctor-created clinical encounter notes (chief complaint, HPI, assessment, treatment plan).
- Time-series vital signs recording (Blood Pressure, Heart Rate, Blood Glucose, Weight, Height, BMI).
- Interactive Recharts trend visualizations with normal range references.
- HIPAA-aligned immutable audit trail logging on every medical record access.

### 4. Prescriptions, Medications & Laboratory
- Digital prescription generation with medicine forms, dosage, frequency, and duration.
- Automated synchronization of active medication adherence courses.
- Diagnostic lab test catalog (CBC, CMP, Lipid Panel, HbA1c, TSH, Urinalysis, Chest X-Ray).
- Lab orders, sample collection status, pathologist result verification, and report indexing.

### 5. Billing, Payments & Insurance
- Automated invoice generation for consultations and lab orders.
- Secure multi-method payment checkout (Credit Card, Debit Card, UPI, Net Banking) without raw credential storage.
- Health insurance policy registration and claim submission/adjudication.

### 6. Administration, Analytics & Audit Logs
- Real-time executive dashboard with revenue trends, monthly encounters, and department metrics.
- User management and account deactivation controls.
- Exportable CSV/PDF reports across patients, doctors, billing, and lab operations.
- Security audit log inspection covering all system events.

---

## Demo Accounts & Seed Credentials

Run `npm run db:seed` to populate the database with these fictional development accounts:

- **Administrator**: `admin@myhealthcare.com` / `Admin@123456`
- **Cardiologist (Doctor)**: `dr.smith@myhealthcare.com` / `Password@123`
- **Dermatologist (Doctor)**: `dr.sarah@myhealthcare.com` / `Password@123`
- **General Medicine (Doctor)**: `dr.aravind@myhealthcare.com` / `Password@123`
- **Pediatrician (Doctor)**: `dr.emily@myhealthcare.com` / `Password@123`
- **Patient**: `john.doe@patient.com` / `Password@123`
- **Patient**: `jane.smith@patient.com` / `Password@123`

---

## Installation & Setup

1. **Clone repository and configure environment variables**:
   ```bash
   cp .env.example .env
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Initialize Database & Seed**:
   ```bash
   npx prisma generate
   npm run db:push
   npm run db:seed
   ```

4. **Start Development Environment**:
   ```bash
   npm run dev
   ```
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5000/api`
   - Health Check: `http://localhost:5000/api/health`

5. **Run with Docker Compose**:
   ```bash
   docker-compose up --build
   ```

---

## Automated Testing

Run the automated integration tests:
```bash
npm run test
```

---

## Security & HIPAA Considerations

- **Access Isolation**: Patients cannot access other patients' medical profiles or records.
- **Audit Logging**: Every read and write to medical records, diagnoses, and lab results is recorded in the `AuditLog` table.
- **Safe Credentials**: Card details are never stored directly; transactions use cryptographic token references.
- **Security Headers**: Powered by Helmet, CORS origin restriction, and IP-based rate limiting.
