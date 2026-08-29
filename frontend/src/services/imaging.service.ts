import { api } from './api';
import { ApiResponse } from '../types';

export const imagingService = {
  async getPatientStudies(patientId: string): Promise<ApiResponse<{ studies: any[]; count: number }>> {
    const res = await api.get<ApiResponse<any>>(`/imaging/studies/${patientId}`);
    return res.data;
  },

  async createRadiologyReport(reportData: any): Promise<ApiResponse<any>> {
    const res = await api.post<ApiResponse<any>>('/imaging/reports', reportData);
    return res.data;
  },
};
