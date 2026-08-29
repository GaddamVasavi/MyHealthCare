import api from './api';
import { ApiResponse, Invoice, Payment, InsuranceProvider, InsurancePolicy, InsuranceClaim } from '../types';

export const billingService = {
  async listInvoices(params?: any): Promise<ApiResponse<Invoice[]>> {
    const res = await api.get<ApiResponse<Invoice[]>>('/billing', { params });
    return res.data;
  },

  async getInvoiceById(id: string): Promise<ApiResponse<Invoice>> {
    const res = await api.get<ApiResponse<Invoice>>(`/billing/${id}`);
    return res.data;
  },

  async createInvoice(data: any): Promise<ApiResponse<Invoice>> {
    const res = await api.post<ApiResponse<Invoice>>('/billing', data);
    return res.data;
  },

  async processPayment(data: any): Promise<ApiResponse<Payment>> {
    const res = await api.post<ApiResponse<Payment>>('/payments', data);
    return res.data;
  },

  async getPaymentHistory(params?: any): Promise<ApiResponse<Payment[]>> {
    const res = await api.get<ApiResponse<Payment[]>>('/payments', { params });
    return res.data;
  },

  async processRefund(data: any): Promise<ApiResponse<any>> {
    const res = await api.post<ApiResponse<any>>('/payments/refund', data);
    return res.data;
  },

  async getInsuranceProviders(): Promise<ApiResponse<InsuranceProvider[]>> {
    const res = await api.get<ApiResponse<InsuranceProvider[]>>('/insurance/providers');
    return res.data;
  },

  async getMyPolicies(patientId?: string): Promise<ApiResponse<InsurancePolicy[]>> {
    const url = patientId ? `/insurance/policies/patient/${patientId}` : '/insurance/policies';
    const res = await api.get<ApiResponse<InsurancePolicy[]>>(url);
    return res.data;
  },

  async addPolicy(data: any): Promise<ApiResponse<InsurancePolicy>> {
    const res = await api.post<ApiResponse<InsurancePolicy>>('/insurance/policies', data);
    return res.data;
  },

  async submitClaim(data: any): Promise<ApiResponse<InsuranceClaim>> {
    const res = await api.post<ApiResponse<InsuranceClaim>>('/insurance/claims', data);
    return res.data;
  },

  async listClaims(params?: any): Promise<ApiResponse<InsuranceClaim[]>> {
    const res = await api.get<ApiResponse<InsuranceClaim[]>>('/insurance/claims', { params });
    return res.data;
  },

  async adjudicateClaim(id: string, data: any): Promise<ApiResponse<InsuranceClaim>> {
    const res = await api.patch<ApiResponse<InsuranceClaim>>(`/insurance/claims/${id}/adjudicate`, data);
    return res.data;
  },
};
