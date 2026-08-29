import api from './api';
import { ApiResponse, Doctor, Specialization, Patient } from '../types';

export const doctorService = {
  async searchDoctors(params?: any): Promise<ApiResponse<Doctor[]>> {
    const res = await api.get<ApiResponse<Doctor[]>>('/doctors', { params });
    return res.data;
  },

  async getDoctorById(id: string): Promise<ApiResponse<Doctor>> {
    const res = await api.get<ApiResponse<Doctor>>(`/doctors/${id}`);
    return res.data;
  },

  async getSpecializations(): Promise<ApiResponse<Specialization[]>> {
    const res = await api.get<ApiResponse<Specialization[]>>('/specializations');
    return res.data;
  },

  async updateDoctorProfile(data: any): Promise<ApiResponse<Doctor>> {
    const res = await api.put<ApiResponse<Doctor>>('/doctors/profile', data);
    return res.data;
  },

  async setAvailability(data: any): Promise<ApiResponse<any>> {
    const res = await api.post<ApiResponse<any>>('/doctors/availability', data);
    return res.data;
  },

  async getDoctorLeaves(): Promise<ApiResponse<any[]>> {
    const res = await api.get<ApiResponse<any[]>>('/doctors/leaves/my');
    return res.data;
  },

  async addDoctorLeave(data: any): Promise<ApiResponse<any>> {
    const res = await api.post<ApiResponse<any>>('/doctors/leaves', data);
    return res.data;
  },

  async deleteDoctorLeave(leaveId: string): Promise<ApiResponse<any>> {
    const res = await api.delete<ApiResponse<any>>(`/doctors/leaves/${leaveId}`);
    return res.data;
  },

  async getAssignedPatients(): Promise<ApiResponse<Patient[]>> {
    const res = await api.get<ApiResponse<Patient[]>>('/doctors/patients/assigned');
    return res.data;
  },

  async getDoctorDashboardStats(): Promise<ApiResponse<any>> {
    const res = await api.get<ApiResponse<any>>('/analytics/doctor/overview');
    return res.data;
  },
};
