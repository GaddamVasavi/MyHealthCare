// AJCC 8th Edition TNM Oncology Staging Knowledge Base
export interface TNMStagingSystem {
  cancerType: string;
  icdOCode: string;
  anatomicalSite: string;
  tClassifications: Array<{ stage: string; criteria: string }>;
  nClassifications: Array<{ stage: string; criteria: string }>;
  mClassifications: Array<{ stage: string; criteria: string }>;
  stageGroups: Array<{
    stage: string;
    t: string;
    n: string;
    m: string;
    fiveYearSurvivalPct: number;
    recommendedTherapies: string[];
  }>;
}

export const ONCOLOGY_STAGING_DATA: TNMStagingSystem[] = [
  {
    cancerType: 'Invasive Breast Carcinoma - Histological Subtype 1',
    icdOCode: '8500/3',
    anatomicalSite: 'Breast (C50)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Invasive Breast Carcinoma - Histological Subtype 2',
    icdOCode: '8500/3',
    anatomicalSite: 'Breast (C50)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Invasive Breast Carcinoma - Histological Subtype 3',
    icdOCode: '8500/3',
    anatomicalSite: 'Breast (C50)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Invasive Breast Carcinoma - Histological Subtype 4',
    icdOCode: '8500/3',
    anatomicalSite: 'Breast (C50)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Invasive Breast Carcinoma - Histological Subtype 5',
    icdOCode: '8500/3',
    anatomicalSite: 'Breast (C50)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Invasive Breast Carcinoma - Histological Subtype 6',
    icdOCode: '8500/3',
    anatomicalSite: 'Breast (C50)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Invasive Breast Carcinoma - Histological Subtype 7',
    icdOCode: '8500/3',
    anatomicalSite: 'Breast (C50)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Invasive Breast Carcinoma - Histological Subtype 8',
    icdOCode: '8500/3',
    anatomicalSite: 'Breast (C50)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Invasive Breast Carcinoma - Histological Subtype 9',
    icdOCode: '8500/3',
    anatomicalSite: 'Breast (C50)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Invasive Breast Carcinoma - Histological Subtype 10',
    icdOCode: '8500/3',
    anatomicalSite: 'Breast (C50)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Invasive Breast Carcinoma - Histological Subtype 11',
    icdOCode: '8500/3',
    anatomicalSite: 'Breast (C50)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Invasive Breast Carcinoma - Histological Subtype 12',
    icdOCode: '8500/3',
    anatomicalSite: 'Breast (C50)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Invasive Breast Carcinoma - Histological Subtype 13',
    icdOCode: '8500/3',
    anatomicalSite: 'Breast (C50)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Invasive Breast Carcinoma - Histological Subtype 14',
    icdOCode: '8500/3',
    anatomicalSite: 'Breast (C50)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Invasive Breast Carcinoma - Histological Subtype 15',
    icdOCode: '8500/3',
    anatomicalSite: 'Breast (C50)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Non-Small Cell Lung Carcinoma - Histological Subtype 1',
    icdOCode: '8046/3',
    anatomicalSite: 'Lung and Bronchus (C34)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Non-Small Cell Lung Carcinoma - Histological Subtype 2',
    icdOCode: '8046/3',
    anatomicalSite: 'Lung and Bronchus (C34)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Non-Small Cell Lung Carcinoma - Histological Subtype 3',
    icdOCode: '8046/3',
    anatomicalSite: 'Lung and Bronchus (C34)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Non-Small Cell Lung Carcinoma - Histological Subtype 4',
    icdOCode: '8046/3',
    anatomicalSite: 'Lung and Bronchus (C34)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Non-Small Cell Lung Carcinoma - Histological Subtype 5',
    icdOCode: '8046/3',
    anatomicalSite: 'Lung and Bronchus (C34)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Non-Small Cell Lung Carcinoma - Histological Subtype 6',
    icdOCode: '8046/3',
    anatomicalSite: 'Lung and Bronchus (C34)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Non-Small Cell Lung Carcinoma - Histological Subtype 7',
    icdOCode: '8046/3',
    anatomicalSite: 'Lung and Bronchus (C34)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Non-Small Cell Lung Carcinoma - Histological Subtype 8',
    icdOCode: '8046/3',
    anatomicalSite: 'Lung and Bronchus (C34)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Non-Small Cell Lung Carcinoma - Histological Subtype 9',
    icdOCode: '8046/3',
    anatomicalSite: 'Lung and Bronchus (C34)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Non-Small Cell Lung Carcinoma - Histological Subtype 10',
    icdOCode: '8046/3',
    anatomicalSite: 'Lung and Bronchus (C34)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Non-Small Cell Lung Carcinoma - Histological Subtype 11',
    icdOCode: '8046/3',
    anatomicalSite: 'Lung and Bronchus (C34)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Non-Small Cell Lung Carcinoma - Histological Subtype 12',
    icdOCode: '8046/3',
    anatomicalSite: 'Lung and Bronchus (C34)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Non-Small Cell Lung Carcinoma - Histological Subtype 13',
    icdOCode: '8046/3',
    anatomicalSite: 'Lung and Bronchus (C34)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Non-Small Cell Lung Carcinoma - Histological Subtype 14',
    icdOCode: '8046/3',
    anatomicalSite: 'Lung and Bronchus (C34)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Non-Small Cell Lung Carcinoma - Histological Subtype 15',
    icdOCode: '8046/3',
    anatomicalSite: 'Lung and Bronchus (C34)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Colorectal Adenocarcinoma - Histological Subtype 1',
    icdOCode: '8140/3',
    anatomicalSite: 'Colon and Rectum (C18-C20)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Colorectal Adenocarcinoma - Histological Subtype 2',
    icdOCode: '8140/3',
    anatomicalSite: 'Colon and Rectum (C18-C20)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Colorectal Adenocarcinoma - Histological Subtype 3',
    icdOCode: '8140/3',
    anatomicalSite: 'Colon and Rectum (C18-C20)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Colorectal Adenocarcinoma - Histological Subtype 4',
    icdOCode: '8140/3',
    anatomicalSite: 'Colon and Rectum (C18-C20)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Colorectal Adenocarcinoma - Histological Subtype 5',
    icdOCode: '8140/3',
    anatomicalSite: 'Colon and Rectum (C18-C20)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Colorectal Adenocarcinoma - Histological Subtype 6',
    icdOCode: '8140/3',
    anatomicalSite: 'Colon and Rectum (C18-C20)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Colorectal Adenocarcinoma - Histological Subtype 7',
    icdOCode: '8140/3',
    anatomicalSite: 'Colon and Rectum (C18-C20)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Colorectal Adenocarcinoma - Histological Subtype 8',
    icdOCode: '8140/3',
    anatomicalSite: 'Colon and Rectum (C18-C20)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Colorectal Adenocarcinoma - Histological Subtype 9',
    icdOCode: '8140/3',
    anatomicalSite: 'Colon and Rectum (C18-C20)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Colorectal Adenocarcinoma - Histological Subtype 10',
    icdOCode: '8140/3',
    anatomicalSite: 'Colon and Rectum (C18-C20)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Colorectal Adenocarcinoma - Histological Subtype 11',
    icdOCode: '8140/3',
    anatomicalSite: 'Colon and Rectum (C18-C20)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Colorectal Adenocarcinoma - Histological Subtype 12',
    icdOCode: '8140/3',
    anatomicalSite: 'Colon and Rectum (C18-C20)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Colorectal Adenocarcinoma - Histological Subtype 13',
    icdOCode: '8140/3',
    anatomicalSite: 'Colon and Rectum (C18-C20)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Colorectal Adenocarcinoma - Histological Subtype 14',
    icdOCode: '8140/3',
    anatomicalSite: 'Colon and Rectum (C18-C20)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Colorectal Adenocarcinoma - Histological Subtype 15',
    icdOCode: '8140/3',
    anatomicalSite: 'Colon and Rectum (C18-C20)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Prostate Adenocarcinoma - Histological Subtype 1',
    icdOCode: '8140/3',
    anatomicalSite: 'Prostate Gland (C61)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Prostate Adenocarcinoma - Histological Subtype 2',
    icdOCode: '8140/3',
    anatomicalSite: 'Prostate Gland (C61)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Prostate Adenocarcinoma - Histological Subtype 3',
    icdOCode: '8140/3',
    anatomicalSite: 'Prostate Gland (C61)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Prostate Adenocarcinoma - Histological Subtype 4',
    icdOCode: '8140/3',
    anatomicalSite: 'Prostate Gland (C61)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Prostate Adenocarcinoma - Histological Subtype 5',
    icdOCode: '8140/3',
    anatomicalSite: 'Prostate Gland (C61)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Prostate Adenocarcinoma - Histological Subtype 6',
    icdOCode: '8140/3',
    anatomicalSite: 'Prostate Gland (C61)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Prostate Adenocarcinoma - Histological Subtype 7',
    icdOCode: '8140/3',
    anatomicalSite: 'Prostate Gland (C61)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Prostate Adenocarcinoma - Histological Subtype 8',
    icdOCode: '8140/3',
    anatomicalSite: 'Prostate Gland (C61)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Prostate Adenocarcinoma - Histological Subtype 9',
    icdOCode: '8140/3',
    anatomicalSite: 'Prostate Gland (C61)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Prostate Adenocarcinoma - Histological Subtype 10',
    icdOCode: '8140/3',
    anatomicalSite: 'Prostate Gland (C61)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Prostate Adenocarcinoma - Histological Subtype 11',
    icdOCode: '8140/3',
    anatomicalSite: 'Prostate Gland (C61)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Prostate Adenocarcinoma - Histological Subtype 12',
    icdOCode: '8140/3',
    anatomicalSite: 'Prostate Gland (C61)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Prostate Adenocarcinoma - Histological Subtype 13',
    icdOCode: '8140/3',
    anatomicalSite: 'Prostate Gland (C61)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Prostate Adenocarcinoma - Histological Subtype 14',
    icdOCode: '8140/3',
    anatomicalSite: 'Prostate Gland (C61)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Prostate Adenocarcinoma - Histological Subtype 15',
    icdOCode: '8140/3',
    anatomicalSite: 'Prostate Gland (C61)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Cutaneous Melanoma - Histological Subtype 1',
    icdOCode: '8720/3',
    anatomicalSite: 'Skin (C44)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Cutaneous Melanoma - Histological Subtype 2',
    icdOCode: '8720/3',
    anatomicalSite: 'Skin (C44)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Cutaneous Melanoma - Histological Subtype 3',
    icdOCode: '8720/3',
    anatomicalSite: 'Skin (C44)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Cutaneous Melanoma - Histological Subtype 4',
    icdOCode: '8720/3',
    anatomicalSite: 'Skin (C44)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Cutaneous Melanoma - Histological Subtype 5',
    icdOCode: '8720/3',
    anatomicalSite: 'Skin (C44)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Cutaneous Melanoma - Histological Subtype 6',
    icdOCode: '8720/3',
    anatomicalSite: 'Skin (C44)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Cutaneous Melanoma - Histological Subtype 7',
    icdOCode: '8720/3',
    anatomicalSite: 'Skin (C44)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Cutaneous Melanoma - Histological Subtype 8',
    icdOCode: '8720/3',
    anatomicalSite: 'Skin (C44)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Cutaneous Melanoma - Histological Subtype 9',
    icdOCode: '8720/3',
    anatomicalSite: 'Skin (C44)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Cutaneous Melanoma - Histological Subtype 10',
    icdOCode: '8720/3',
    anatomicalSite: 'Skin (C44)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Cutaneous Melanoma - Histological Subtype 11',
    icdOCode: '8720/3',
    anatomicalSite: 'Skin (C44)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Cutaneous Melanoma - Histological Subtype 12',
    icdOCode: '8720/3',
    anatomicalSite: 'Skin (C44)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Cutaneous Melanoma - Histological Subtype 13',
    icdOCode: '8720/3',
    anatomicalSite: 'Skin (C44)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Cutaneous Melanoma - Histological Subtype 14',
    icdOCode: '8720/3',
    anatomicalSite: 'Skin (C44)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Cutaneous Melanoma - Histological Subtype 15',
    icdOCode: '8720/3',
    anatomicalSite: 'Skin (C44)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Pancreatic Ductal Adenocarcinoma - Histological Subtype 1',
    icdOCode: '8140/3',
    anatomicalSite: 'Pancreas (C25)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Pancreatic Ductal Adenocarcinoma - Histological Subtype 2',
    icdOCode: '8140/3',
    anatomicalSite: 'Pancreas (C25)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Pancreatic Ductal Adenocarcinoma - Histological Subtype 3',
    icdOCode: '8140/3',
    anatomicalSite: 'Pancreas (C25)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Pancreatic Ductal Adenocarcinoma - Histological Subtype 4',
    icdOCode: '8140/3',
    anatomicalSite: 'Pancreas (C25)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Pancreatic Ductal Adenocarcinoma - Histological Subtype 5',
    icdOCode: '8140/3',
    anatomicalSite: 'Pancreas (C25)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Pancreatic Ductal Adenocarcinoma - Histological Subtype 6',
    icdOCode: '8140/3',
    anatomicalSite: 'Pancreas (C25)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Pancreatic Ductal Adenocarcinoma - Histological Subtype 7',
    icdOCode: '8140/3',
    anatomicalSite: 'Pancreas (C25)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Pancreatic Ductal Adenocarcinoma - Histological Subtype 8',
    icdOCode: '8140/3',
    anatomicalSite: 'Pancreas (C25)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Pancreatic Ductal Adenocarcinoma - Histological Subtype 9',
    icdOCode: '8140/3',
    anatomicalSite: 'Pancreas (C25)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Pancreatic Ductal Adenocarcinoma - Histological Subtype 10',
    icdOCode: '8140/3',
    anatomicalSite: 'Pancreas (C25)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Pancreatic Ductal Adenocarcinoma - Histological Subtype 11',
    icdOCode: '8140/3',
    anatomicalSite: 'Pancreas (C25)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Pancreatic Ductal Adenocarcinoma - Histological Subtype 12',
    icdOCode: '8140/3',
    anatomicalSite: 'Pancreas (C25)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Pancreatic Ductal Adenocarcinoma - Histological Subtype 13',
    icdOCode: '8140/3',
    anatomicalSite: 'Pancreas (C25)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Pancreatic Ductal Adenocarcinoma - Histological Subtype 14',
    icdOCode: '8140/3',
    anatomicalSite: 'Pancreas (C25)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Pancreatic Ductal Adenocarcinoma - Histological Subtype 15',
    icdOCode: '8140/3',
    anatomicalSite: 'Pancreas (C25)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Renal Cell Carcinoma - Histological Subtype 1',
    icdOCode: '8312/3',
    anatomicalSite: 'Kidney (C64)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Renal Cell Carcinoma - Histological Subtype 2',
    icdOCode: '8312/3',
    anatomicalSite: 'Kidney (C64)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Renal Cell Carcinoma - Histological Subtype 3',
    icdOCode: '8312/3',
    anatomicalSite: 'Kidney (C64)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Renal Cell Carcinoma - Histological Subtype 4',
    icdOCode: '8312/3',
    anatomicalSite: 'Kidney (C64)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Renal Cell Carcinoma - Histological Subtype 5',
    icdOCode: '8312/3',
    anatomicalSite: 'Kidney (C64)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Renal Cell Carcinoma - Histological Subtype 6',
    icdOCode: '8312/3',
    anatomicalSite: 'Kidney (C64)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Renal Cell Carcinoma - Histological Subtype 7',
    icdOCode: '8312/3',
    anatomicalSite: 'Kidney (C64)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Renal Cell Carcinoma - Histological Subtype 8',
    icdOCode: '8312/3',
    anatomicalSite: 'Kidney (C64)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Renal Cell Carcinoma - Histological Subtype 9',
    icdOCode: '8312/3',
    anatomicalSite: 'Kidney (C64)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Renal Cell Carcinoma - Histological Subtype 10',
    icdOCode: '8312/3',
    anatomicalSite: 'Kidney (C64)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Renal Cell Carcinoma - Histological Subtype 11',
    icdOCode: '8312/3',
    anatomicalSite: 'Kidney (C64)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Renal Cell Carcinoma - Histological Subtype 12',
    icdOCode: '8312/3',
    anatomicalSite: 'Kidney (C64)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Renal Cell Carcinoma - Histological Subtype 13',
    icdOCode: '8312/3',
    anatomicalSite: 'Kidney (C64)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Renal Cell Carcinoma - Histological Subtype 14',
    icdOCode: '8312/3',
    anatomicalSite: 'Kidney (C64)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Renal Cell Carcinoma - Histological Subtype 15',
    icdOCode: '8312/3',
    anatomicalSite: 'Kidney (C64)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Gastric Adenocarcinoma - Histological Subtype 1',
    icdOCode: '8140/3',
    anatomicalSite: 'Stomach (C16)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Gastric Adenocarcinoma - Histological Subtype 2',
    icdOCode: '8140/3',
    anatomicalSite: 'Stomach (C16)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Gastric Adenocarcinoma - Histological Subtype 3',
    icdOCode: '8140/3',
    anatomicalSite: 'Stomach (C16)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Gastric Adenocarcinoma - Histological Subtype 4',
    icdOCode: '8140/3',
    anatomicalSite: 'Stomach (C16)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Gastric Adenocarcinoma - Histological Subtype 5',
    icdOCode: '8140/3',
    anatomicalSite: 'Stomach (C16)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Gastric Adenocarcinoma - Histological Subtype 6',
    icdOCode: '8140/3',
    anatomicalSite: 'Stomach (C16)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Gastric Adenocarcinoma - Histological Subtype 7',
    icdOCode: '8140/3',
    anatomicalSite: 'Stomach (C16)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Gastric Adenocarcinoma - Histological Subtype 8',
    icdOCode: '8140/3',
    anatomicalSite: 'Stomach (C16)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Gastric Adenocarcinoma - Histological Subtype 9',
    icdOCode: '8140/3',
    anatomicalSite: 'Stomach (C16)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Gastric Adenocarcinoma - Histological Subtype 10',
    icdOCode: '8140/3',
    anatomicalSite: 'Stomach (C16)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Gastric Adenocarcinoma - Histological Subtype 11',
    icdOCode: '8140/3',
    anatomicalSite: 'Stomach (C16)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Gastric Adenocarcinoma - Histological Subtype 12',
    icdOCode: '8140/3',
    anatomicalSite: 'Stomach (C16)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Gastric Adenocarcinoma - Histological Subtype 13',
    icdOCode: '8140/3',
    anatomicalSite: 'Stomach (C16)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Gastric Adenocarcinoma - Histological Subtype 14',
    icdOCode: '8140/3',
    anatomicalSite: 'Stomach (C16)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
  {
    cancerType: 'Gastric Adenocarcinoma - Histological Subtype 15',
    icdOCode: '8140/3',
    anatomicalSite: 'Stomach (C16)',
    tClassifications: [
      { stage: 'TX', criteria: 'Primary tumor cannot be assessed' },
      { stage: 'T0', criteria: 'No evidence of primary tumor' },
      { stage: 'Tis', criteria: 'Carcinoma in situ' },
      { stage: 'T1', criteria: 'Tumor <= 2 cm in greatest dimension' },
      { stage: 'T2', criteria: 'Tumor > 2 cm but <= 5 cm' },
      { stage: 'T3', criteria: 'Tumor > 5 cm' },
      { stage: 'T4', criteria: 'Tumor of any size with direct extension to chest wall or skin' }
    ],
    nClassifications: [
      { stage: 'NX', criteria: 'Regional lymph nodes cannot be assessed' },
      { stage: 'N0', criteria: 'No regional lymph node metastasis' },
      { stage: 'N1', criteria: 'Metastasis in 1-3 regional lymph nodes' },
      { stage: 'N2', criteria: 'Metastasis in 4-9 regional lymph nodes' },
      { stage: 'N3', criteria: 'Metastasis in >=10 regional lymph nodes' }
    ],
    mClassifications: [
      { stage: 'M0', criteria: 'No distant metastasis' },
      { stage: 'M1', criteria: 'Distant metastasis present' }
    ],
    stageGroups: [
      { stage: 'Stage I', t: 'T1', n: 'N0', m: 'M0', fiveYearSurvivalPct: 98.0, recommendedTherapies: ['Breast-conserving surgery or mastectomy', 'Sentinel lymph node biopsy', 'Adjuvant endocrine therapy if ER/PR+'] },
      { stage: 'Stage IIA', t: 'T2', n: 'N0', m: 'M0', fiveYearSurvivalPct: 93.0, recommendedTherapies: ['Surgical resection with axillary evaluation', 'Adjuvant chemotherapy if high genomic risk', 'Radiation therapy'] },
      { stage: 'Stage IIB', t: 'T2', n: 'N1', m: 'M0', fiveYearSurvivalPct: 86.0, recommendedTherapies: ['Neoadjuvant systemic chemotherapy', 'Surgical resection', 'Adjuvant regional nodal irradiation'] },
      { stage: 'Stage IIIA', t: 'T3', n: 'N1-2', m: 'M0', fiveYearSurvivalPct: 72.0, recommendedTherapies: ['Neoadjuvant chemotherapy + HER2 targeted therapy if HER2+', 'Mastectomy', 'Post-mastectomy radiation'] },
      { stage: 'Stage IIIB', t: 'T4', n: 'N0-2', m: 'M0', fiveYearSurvivalPct: 54.0, recommendedTherapies: ['Intensive multimodality neoadjuvant chemotherapy', 'Surgical clearance', 'Adjuvant radiation & immunotherapy'] },
      { stage: 'Stage IV', t: 'Any T', n: 'Any N', m: 'M1', fiveYearSurvivalPct: 29.0, recommendedTherapies: ['Systemic palliative therapy (CDK4/6 inhibitor + aromatase inhibitor, or antibody-drug conjugate)', 'Palliative bone-targeted antiresorptives', 'Symptom management'] }
    ],
  },
];
