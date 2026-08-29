import { api } from './api';
import { ApiResponse } from '../types';

export const populationService = {
  async getHEDISDashboard(): Promise<ApiResponse<{ measures: any[]; careGaps: any[]; registry: any[] }>> {
    const res = await api.get<ApiResponse<any>>('/epidemiology/hedis-dashboard');
    return res.data;
  },
};
