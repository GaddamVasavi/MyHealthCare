export type UserRole = 'PATIENT' | 'DOCTOR' | 'ADMIN';
export type Gender = 'MALE' | 'FEMALE' | 'OTHER';
export type BloodGroup = 'A_POSITIVE' | 'A_NEGATIVE' | 'B_POSITIVE' | 'B_NEGATIVE' | 'AB_POSITIVE' | 'AB_NEGATIVE' | 'O_POSITIVE' | 'O_NEGATIVE' | 'UNKNOWN';
export type AppointmentStatus = 'REQUESTED' | 'CONFIRMED' | 'RESCHEDULED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED' | 'NO_SHOW';
export type MedicationStatus = 'ACTIVE' | 'COMPLETED' | 'CANCELLED';
export type LabStatus = 'ORDERED' | 'SAMPLE_COLLECTED' | 'PROCESSING' | 'COMPLETED' | 'CANCELLED';
export type InvoiceStatus = 'PENDING' | 'PAID' | 'PARTIALLY_PAID' | 'CANCELLED' | 'REFUNDED';
export type PaymentStatus = 'PENDING' | 'SUCCESSFUL' | 'FAILED' | 'REFUNDED';
export type PaymentMethod = 'CREDIT_CARD' | 'DEBIT_CARD' | 'UPI' | 'NET_BANKING' | 'CASH' | 'INSURANCE_DIRECT';
export type ClaimStatus = 'SUBMITTED' | 'UNDER_REVIEW' | 'APPROVED' | 'REJECTED' | 'PAID';
export type NotificationType = 'APPOINTMENT' | 'PRESCRIPTION' | 'LAB_RESULT' | 'BILLING' | 'SYSTEM' | 'HEALTH_REMINDER';
export type DocumentCategory = 'LAB_REPORT' | 'PRESCRIPTION' | 'SCAN_IMAGING' | 'DISCHARGE_SUMMARY' | 'INSURANCE_DOC' | 'OTHER';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  isEmailVerified: boolean;
  isActive: boolean;
  lastLoginAt?: string;
  createdAt: string;
  patient?: Patient;
  doctor?: Doctor;
}

export interface Patient {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: Gender;
  phone: string;
  profileImage?: string;
  bloodGroup: BloodGroup;
  heightCm?: number;
  weightKg?: number;
  occupation?: string;
  maritalStatus?: string;
  user?: User;
  address?: Address;
  emergencyContact?: EmergencyContact;
  healthProfile?: HealthProfile;
  allergies?: Allergy[];
  conditions?: MedicalCondition[];
}

export interface Address {
  id: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface EmergencyContact {
  id: string;
  contactName: string;
  relationship: string;
  phone: string;
  altPhone?: string;
  email?: string;
}

export interface HealthProfile {
  id: string;
  smokingStatus?: string;
  alcoholConsumption?: string;
  exerciseHabits?: string;
  dietaryPreferences?: string;
  chronicDiseases?: string;
  previousSurgeries?: string;
  familyMedicalHistory?: string;
  notes?: string;
}

export interface Allergy {
  id: string;
  allergen: string;
  reaction: string;
  severity: 'MILD' | 'MODERATE' | 'SEVERE';
  diagnosedOn?: string;
}

export interface MedicalCondition {
  id: string;
  name: string;
  icdCode?: string;
  status: string;
  diagnosedOn?: string;
  resolvedOn?: string;
  notes?: string;
}

export interface Specialization {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  _count?: { doctors: number };
}

export interface Doctor {
  id: string;
  userId: string;
  specializationId: string;
  firstName: string;
  lastName: string;
  phone: string;
  licenseNumber: string;
  qualifications: string;
  experienceYears: number;
  consultationFee: number | string;
  biography?: string;
  clinicName?: string;
  clinicAddress?: string;
  languages?: string;
  profileImage?: string;
  rating: number;
  totalReviews: number;
  isAvailable: boolean;
  specialization?: Specialization;
  availabilities?: DoctorAvailability[];
}

export interface DoctorAvailability {
  id: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  slotDurationMinutes: number;
  isActive: boolean;
}

export interface Appointment {
  id: string;
  appointmentNumber: string;
  patientId: string;
  doctorId: string;
  appointmentDate: string;
  startTime: string;
  endTime: string;
  status: AppointmentStatus;
  reason?: string;
  notes?: string;
  cancellationReason?: string;
  consultationFee: number | string;
  doctor?: Doctor;
  patient?: Patient;
  invoice?: Invoice;
  medicalRecord?: MedicalRecord;
}

export interface MedicalRecord {
  id: string;
  recordNumber: string;
  patientId: string;
  doctorId: string;
  appointmentId?: string;
  visitDate: string;
  chiefComplaint: string;
  historyOfIllness?: string;
  assessment?: string;
  treatmentPlan?: string;
  followUpDate?: string;
  doctor?: Doctor;
  patient?: Patient;
  vitalSigns?: VitalSign[];
  diagnoses?: Diagnosis[];
  clinicalNotes?: ClinicalNote[];
  prescriptions?: Prescription[];
  labOrders?: LabOrder[];
}

export interface VitalSign {
  id: string;
  patientId: string;
  recordedAt: string;
  heightCm?: number;
  weightKg?: number;
  bmi?: number;
  systolicBp?: number;
  diastolicBp?: number;
  heartRateBpm?: number;
  respiratoryRate?: number;
  temperatureCelsius?: number;
  oxygenSaturationPct?: number;
  bloodGlucoseMgDl?: number;
  notes?: string;
  recordedByRole: UserRole;
}

export interface Diagnosis {
  id: string;
  code?: string;
  description: string;
  type: string;
  severity?: string;
}

export interface ClinicalNote {
  id: string;
  noteType: string;
  content: string;
  createdAt: string;
}

export interface Prescription {
  id: string;
  prescriptionNumber: string;
  patientId: string;
  doctorId: string;
  issuedDate: string;
  validUntil?: string;
  generalAdvice?: string;
  followUpDate?: string;
  doctor?: Doctor;
  patient?: Patient;
  items: PrescriptionItem[];
}

export interface PrescriptionItem {
  id: string;
  medicineName: string;
  form: string;
  dosage: string;
  frequency: string;
  durationDays: number;
  instructions?: string;
}

export interface Medication {
  id: string;
  patientId: string;
  name: string;
  dosage: string;
  frequency: string;
  durationDays?: number;
  startDate: string;
  endDate?: string;
  status: MedicationStatus;
  prescribedBy?: string;
  reminderTimes?: string;
  notes?: string;
}

export interface LabTest {
  id: string;
  code: string;
  name: string;
  category: string;
  description?: string;
  price: number | string;
  normalRange?: string;
  unit?: string;
  sampleType?: string;
  tatHours: number;
}

export interface LabOrder {
  id: string;
  orderNumber: string;
  patientId: string;
  doctorId: string;
  status: LabStatus;
  clinicalNotes?: string;
  orderedDate: string;
  sampleCollectedDate?: string;
  completedDate?: string;
  doctor?: Doctor;
  patient?: Patient;
  results: LabResult[];
  invoice?: Invoice;
}

export interface LabResult {
  id: string;
  labTestId: string;
  testName: string;
  resultValue: string;
  normalRange?: string;
  unit?: string;
  isAbnormal: boolean;
  verifiedBy?: string;
  verifiedAt?: string;
  comments?: string;
  reportFileUrl?: string;
  labTest?: LabTest;
}

export interface MedicalDocument {
  id: string;
  patientId: string;
  title: string;
  category: DocumentCategory;
  fileUrl: string;
  fileName: string;
  fileSize: number;
  mimeType: string;
  description?: string;
  uploadedBy: string;
  createdAt: string;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  patientId: string;
  appointmentId?: string;
  labOrderId?: string;
  subtotal: number | string;
  tax: number | string;
  discount: number | string;
  totalAmount: number | string;
  paidAmount: number | string;
  dueAmount: number | string;
  status: InvoiceStatus;
  dueDate: string;
  notes?: string;
  patient?: Patient;
  appointment?: Appointment;
  items: InvoiceItem[];
  payments?: Payment[];
  createdAt: string;
}

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number | string;
  totalPrice: number | string;
}

export interface Payment {
  id: string;
  paymentNumber: string;
  invoiceId: string;
  amount: number | string;
  method: PaymentMethod;
  status: PaymentStatus;
  transactionRef?: string;
  paidAt?: string;
  createdAt: string;
  invoice?: Invoice;
}

export interface InsuranceProvider {
  id: string;
  name: string;
  contactNumber: string;
  email: string;
  address?: string;
}

export interface InsurancePolicy {
  id: string;
  patientId: string;
  providerId: string;
  policyNumber: string;
  policyType: string;
  coverageAmount: number | string;
  startDate: string;
  expirationDate: string;
  isActive: boolean;
  provider?: InsuranceProvider;
}

export interface InsuranceClaim {
  id: string;
  claimNumber: string;
  patientId: string;
  policyId: string;
  claimAmount: number | string;
  approvedAmount?: number | string;
  status: ClaimStatus;
  claimReason: string;
  denialReason?: string;
  submittedDate: string;
  adjudicatedDate?: string;
  policy?: InsurancePolicy;
  patient?: Patient;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: NotificationType;
  linkUrl?: string;
  isRead: boolean;
  createdAt: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data: T;
  error?: {
    code: string;
    details?: any;
  };
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
