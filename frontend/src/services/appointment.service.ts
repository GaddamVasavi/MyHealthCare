import api from './api';
import { ApiResponse, Appointment } from '../types';

export const appointmentService = {
  async getAvailableSlots(doctorId: string, date: string): Promise<ApiResponse<{ isAvailable: boolean; reason?: string; slots: Array<{ startTime: string; endTime: string; isBooked: boolean }> }>> {
    const res = await api.get<ApiResponse<any>>(`/appointments/available-slots?doctorId=${doctorId}&date=${date}`);
    return res.data;
  },

  async bookAppointment(data: any): Promise<ApiResponse<Appointment>> {
    const res = await api.post<ApiResponse<Appointment>>('/appointments', data);
    return res.data;
  },

  async rescheduleAppointment(id: string, data: any): Promise<ApiResponse<Appointment>> {
    const res = await api.put<ApiResponse<Appointment>>(`/appointments/${id}/reschedule`, data);
    return res.data;
  },

  async cancelAppointment(id: string, cancellationReason: string): Promise<ApiResponse<Appointment>> {
    const res = await api.put<ApiResponse<Appointment>>(`/appointments/${id}/cancel`, { cancellationReason });
    return res.data;
  },

  async updateStatus(id: string, status: string, notes?: string): Promise<ApiResponse<Appointment>> {
    const res = await api.patch<ApiResponse<Appointment>>(`/appointments/${id}/status`, { status, notes });
    return res.data;
  },

  async getAppointmentById(id: string): Promise<ApiResponse<Appointment>> {
    const res = await api.get<ApiResponse<Appointment>>(`/appointments/${id}`);
    return res.data;
  },

  async listAppointments(params?: any): Promise<ApiResponse<Appointment[]>> {
    const res = await api.get<ApiResponse<Appointment[]>>('/appointments', { params });
    return res.data;
  },
};
