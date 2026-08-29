import { api } from './api';
import { ApiResponse } from '../types';

export interface CDSAnalysisResult {
  patientId: string;
  timestamp: string;
  interactionsDetected: Array<{
    drugA: string;
    drugB: string;
    severity: string;
    mechanism: string;
    clinicalEffect: string;
    management: string;
    alternatives: string[];
  }>;
  allergyWarnings: Array<{
    allergenClass: string;
    relatedDrugClasses: string[];
    crossReactivityRatePct: number;
    mechanism: string;
    safeAlternatives: string[];
  }>;
  vitalAlerts: Array<{ param: string; value: number; status: string; advisory: string }>;
  guidelineAdvisories: Array<{
    conditionCode: string;
    conditionName: string;
    category: string;
    clinicalStatement: string;
    actionableSteps: string[];
    targetParameters: string;
    citation: string;
  }>;
  calculatedRiskScores: Array<{
    calculatorName: string;
    score: number;
    riskCategory: string;
    interpretation: string;
    recommendations: string[];
    references: string[];
  }>;
  overallRiskLevel: 'LOW' | 'MODERATE' | 'HIGH' | 'CRITICAL';
  suggestedClinicalActions: string[];
}

export const cdsService = {
  async analyzePatient(patientId: string, customData?: any): Promise<ApiResponse<CDSAnalysisResult>> {
    const res = await api.post<ApiResponse<CDSAnalysisResult>>(`/cds/analyze/${patientId}`, customData || {});
    return res.data;
  },

  async checkInteractions(medications: string[]): Promise<ApiResponse<{ interactions: any[]; count: number }>> {
    const res = await api.post<ApiResponse<any>>('/cds/check-interactions', { medications });
    return res.data;
  },

  async calculateScore(calculator: string, input: any): Promise<ApiResponse<any>> {
    const res = await api.post<ApiResponse<any>>('/cds/calculate-score', { calculator, input });
    return res.data;
  },

  async getGuidelines(): Promise<ApiResponse<{ guidelines: any[] }>> {
    const res = await api.get<ApiResponse<any>>('/cds/guidelines');
    return res.data;
  },
};
