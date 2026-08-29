import { api } from './api';
import { ApiResponse } from '../types';

export const interopService = {
  async getPatientFHIR(patientId: string): Promise<ApiResponse<any>> {
    const res = await api.get<ApiResponse<any>>(`/interop/fhir/patient/${patientId}`);
    return res.data;
  },

  async getPatientHL7(patientId: string): Promise<ApiResponse<{ format: string; messageType: string; rawMessage: string }>> {
    const res = await api.get<ApiResponse<any>>(`/interop/hl7/patient/${patientId}`);
    return res.data;
  },

  async getLabOrderHL7(labOrderId: string): Promise<ApiResponse<{ format: string; messageType: string; rawMessage: string }>> {
    const res = await api.get<ApiResponse<any>>(`/interop/hl7/lab-order/${labOrderId}`);
    return res.data;
  },

  async parseHL7(rawMessage: string): Promise<ApiResponse<any>> {
    const res = await api.post<ApiResponse<any>>('/interop/hl7/parse', { rawMessage });
    return res.data;
  },
};
