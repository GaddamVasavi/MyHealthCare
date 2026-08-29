export const APP_NAME = 'MyHealthCare';
export const APP_TAGLINE = 'Personalized Healthcare Management Platform';

export const BLOOD_GROUP_OPTIONS = [
  { value: 'A_POSITIVE', label: 'A+' },
  { value: 'A_NEGATIVE', label: 'A-' },
  { value: 'B_POSITIVE', label: 'B+' },
  { value: 'B_NEGATIVE', label: 'B-' },
  { value: 'AB_POSITIVE', label: 'AB+' },
  { value: 'AB_NEGATIVE', label: 'AB-' },
  { value: 'O_POSITIVE', label: 'O+' },
  { value: 'O_NEGATIVE', label: 'O-' },
  { value: 'UNKNOWN', label: 'Unknown' },
];

export const GENDER_OPTIONS = [
  { value: 'MALE', label: 'Male' },
  { value: 'FEMALE', label: 'Female' },
  { value: 'OTHER', label: 'Other' },
];

export const APPOINTMENT_STATUS_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  REQUESTED: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  CONFIRMED: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  RESCHEDULED: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  IN_PROGRESS: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  COMPLETED: { bg: 'bg-slate-100', text: 'text-slate-700', border: 'border-slate-300' },
  CANCELLED: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' },
  NO_SHOW: { bg: 'bg-gray-100', text: 'text-gray-600', border: 'border-gray-300' },
};

export const LAB_STATUS_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  ORDERED: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  SAMPLE_COLLECTED: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  PROCESSING: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  COMPLETED: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  CANCELLED: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' },
};

export const INVOICE_STATUS_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  PENDING: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  PAID: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  PARTIALLY_PAID: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  CANCELLED: { bg: 'bg-gray-100', text: 'text-gray-600', border: 'border-gray-300' },
  REFUNDED: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' },
};
