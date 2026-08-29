export type ImagingModality = 'CR' | 'DX' | 'CT' | 'MR' | 'US' | 'NM' | 'MG';

export interface DICOMStudyMetadata {
  studyInstanceUid: string;
  studyDate: string;
  studyTime: string;
  accessionNumber: string;
  patientId: string;
  patientName: string;
  modalitiesInStudy: ImagingModality[];
  studyDescription: string;
  referringPhysician: string;
  seriesList: DICOMSeriesMetadata[];
}

export interface DICOMSeriesMetadata {
  seriesInstanceUid: string;
  seriesNumber: number;
  modality: ImagingModality;
  seriesDescription: string;
  bodyPartExamined: string;
  numberOfInstances: number;
  windowCenter: number;
  windowWidth: number;
  instances: DICOMInstanceMetadata[];
}

export interface DICOMInstanceMetadata {
  sopInstanceUid: string;
  instanceNumber: number;
  rows: number;
  columns: number;
  pixelSpacing: [number, number];
  sliceThicknessMm?: number;
  sliceLocationMm?: number;
  kvp?: number;
  xrayTubeCurrentMa?: number;
  exposureTimeMs?: number;
  photometricInterpretation: 'MONOCHROME1' | 'MONOCHROME2' | 'RGB';
  imageUri: string;
}

export interface StructuredRadiologyReport {
  reportId: string;
  studyInstanceUid: string;
  patientId: string;
  modality: ImagingModality;
  examDate: string;
  clinicalIndication: string;
  technique: string;
  comparisonStudies?: string;
  findings: {
    systemFindings: Record<string, string>;
    primaryLesionMeasurementsMm?: [number, number, number];
  };
  impression: string[];
  radsClassification?: {
    system: 'BI-RADS' | 'Lung-RADS' | 'LI-RADS' | 'PI-RADS';
    category: string;
    managementRecommendation: string;
  };
  radiologistName: string;
  isSigned: boolean;
  signedTimestamp?: string;
}
