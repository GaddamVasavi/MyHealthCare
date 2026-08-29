import api from './api';
import { ApiResponse } from '../types';

export const analyticsService = {
  async getAdminOverview(): Promise<ApiResponse<{ stats: any }>> {
    const res = await api.get<ApiResponse<{ stats: any }>>('/analytics/admin/overview');
    return res.data;
  },

  async getAdminCharts(): Promise<ApiResponse<{ statusData: any[]; specializationData: any[]; monthsData: any[] }>> {
    const res = await api.get<ApiResponse<any>>('/analytics/admin/charts');
    return res.data;
  },

  async getAuditLogs(params?: any): Promise<ApiResponse<any[]>> {
    const res = await api.get<ApiResponse<any[]>>('/audit-logs', { params });
    return res.data;
  },

  async listUsers(params?: any): Promise<ApiResponse<any[]>> {
    const res = await api.get<ApiResponse<any[]>>('/users', { params });
    return res.data;
  },

  async toggleUserStatus(userId: string, isActive: boolean): Promise<ApiResponse<any>> {
    const res = await api.patch<ApiResponse<any>>(`/users/${userId}/status`, { isActive });
    return res.data;
  },

  async deleteUser(userId: string): Promise<ApiResponse<any>> {
    const res = await api.delete<ApiResponse<any>>(`/users/${userId}`);
    return res.data;
  },
};
