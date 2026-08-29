import api from './api';
import { ApiResponse, User } from '../types';

export interface AuthResponseData {
  user: User;
  patient?: any;
  doctor?: any;
  accessToken: string;
  refreshToken: string;
}

export const authService = {
  async registerPatient(data: any): Promise<ApiResponse<AuthResponseData>> {
    const res = await api.post<ApiResponse<AuthResponseData>>('/auth/register/patient', data);
    return res.data;
  },

  async registerDoctor(data: any): Promise<ApiResponse<AuthResponseData>> {
    const res = await api.post<ApiResponse<AuthResponseData>>('/auth/register/doctor', data);
    return res.data;
  },

  async login(data: any): Promise<ApiResponse<AuthResponseData>> {
    const res = await api.post<ApiResponse<AuthResponseData>>('/auth/login', data);
    return res.data;
  },

  async logout(): Promise<void> {
    const refreshToken = localStorage.getItem('refreshToken');
    try {
      await api.post('/auth/logout', { refreshToken });
    } finally {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
    }
  },

  async getMe(): Promise<ApiResponse<User>> {
    const res = await api.get<ApiResponse<User>>('/auth/me');
    return res.data;
  },

  async forgotPassword(email: string): Promise<ApiResponse<{ emailSent: boolean }>> {
    const res = await api.post<ApiResponse<{ emailSent: boolean }>>('/auth/forgot-password', { email });
    return res.data;
  },

  async resetPassword(data: any): Promise<ApiResponse<{ reset: boolean }>> {
    const res = await api.post<ApiResponse<{ reset: boolean }>>('/auth/reset-password', data);
    return res.data;
  },

  async changePassword(data: any): Promise<ApiResponse<{ updated: boolean }>> {
    const res = await api.post<ApiResponse<{ updated: boolean }>>('/auth/change-password', data);
    return res.data;
  },
};
