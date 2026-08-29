import api from './api';
import { ApiResponse, Patient, VitalSign, MedicalRecord, Prescription, Medication, LabOrder, MedicalDocument } from '../types';

export const patientService = {
  async getMyProfile(): Promise<ApiResponse<Patient>> {
    const res = await api.get<ApiResponse<Patient>>('/patients/me');
    return res.data;
  },

  async updateProfile(data: any): Promise<ApiResponse<Patient>> {
    const res = await api.put<ApiResponse<Patient>>('/patients/me', data);
    return res.data;
  },

  async updateHealthProfile(data: any): Promise<ApiResponse<any>> {
    const res = await api.put<ApiResponse<any>>('/patients/me/health-profile', data);
    return res.data;
  },

  async addAllergy(data: any): Promise<ApiResponse<any>> {
    const res = await api.post<ApiResponse<any>>('/patients/me/allergies', data);
    return res.data;
  },

  async deleteAllergy(allergyId: string): Promise<ApiResponse<any>> {
    const res = await api.delete<ApiResponse<any>>(`/patients/me/allergies/${allergyId}`);
    return res.data;
  },

  async addCondition(data: any): Promise<ApiResponse<any>> {
    const res = await api.post<ApiResponse<any>>('/patients/me/conditions', data);
    return res.data;
  },

  async deleteCondition(conditionId: string): Promise<ApiResponse<any>> {
    const res = await api.delete<ApiResponse<any>>(`/patients/me/conditions/${conditionId}`);
    return res.data;
  },

  async getPersonalizedInsights(): Promise<ApiResponse<any>> {
    const res = await api.get<ApiResponse<any>>('/patients/me/insights');
    return res.data;
  },

  async recordVitals(data: any): Promise<ApiResponse<VitalSign>> {
    const res = await api.post<ApiResponse<VitalSign>>('/vitals', data);
    return res.data;
  },

  async getVitalsHistory(): Promise<ApiResponse<VitalSign[]>> {
    const res = await api.get<ApiResponse<VitalSign[]>>('/vitals/my/history');
    return res.data;
  },

  async getVitalsTrends(days = 90): Promise<ApiResponse<any>> {
    const res = await api.get<ApiResponse<any>>(`/vitals/my/trends?days=${days}`);
    return res.data;
  },

  async getMyMedicalRecords(): Promise<ApiResponse<{ records: MedicalRecord[]; vitals: VitalSign[]; prescriptions: Prescription[]; labOrders: LabOrder[] }>> {
    const res = await api.get<ApiResponse<any>>('/medical-records/patient/me');
    return res.data;
  },

  async getMyPrescriptions(): Promise<ApiResponse<Prescription[]>> {
    const res = await api.get<ApiResponse<Prescription[]>>('/prescriptions');
    return res.data;
  },

  async getMyMedications(): Promise<ApiResponse<Medication[]>> {
    const res = await api.get<ApiResponse<Medication[]>>('/medications');
    return res.data;
  },

  async updateMedicationStatus(id: string, status: string): Promise<ApiResponse<Medication>> {
    const res = await api.patch<ApiResponse<Medication>>(`/medications/${id}/status`, { status });
    return res.data;
  },

  async getMyLabReports(): Promise<ApiResponse<LabOrder[]>> {
    const res = await api.get<ApiResponse<LabOrder[]>>('/laboratory/orders');
    return res.data;
  },

  async getMyDocuments(): Promise<ApiResponse<MedicalDocument[]>> {
    const res = await api.get<ApiResponse<MedicalDocument[]>>('/documents');
    return res.data;
  },

  async uploadDocument(data: any): Promise<ApiResponse<MedicalDocument>> {
    const res = await api.post<ApiResponse<MedicalDocument>>('/documents', data);
    return res.data;
  },

  async deleteDocument(id: string): Promise<ApiResponse<any>> {
    const res = await api.delete<ApiResponse<any>>(`/documents/${id}`);
    return res.data;
  },
};
