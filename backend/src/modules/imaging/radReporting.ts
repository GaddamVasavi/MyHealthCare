import { StructuredRadiologyReport, DICOMStudyMetadata } from './types';

export class RadiologyReportingEngine {
  /**
   * Classify Lung-RADS findings on Low-Dose CT (LDCT) Screening
   */
  public static classifyLungRADS(noduleDiameterMm: number, isSolid: boolean, isPartSolid: boolean): { category: string; recommendation: string } {
    if (noduleDiameterMm < 4.0) {
      return {
        category: 'Lung-RADS 1 (Negative)',
        recommendation: 'Continue annual low-dose screening CT in 12 months.',
      };
    } else if (noduleDiameterMm < 6.0) {
      return {
        category: 'Lung-RADS 2 (Benign Appearance)',
        recommendation: 'Continue annual screening LDCT in 12 months.',
      };
    } else if (noduleDiameterMm < 8.0) {
      return {
        category: 'Lung-RADS 3 (Probably Benign)',
        recommendation: 'Repeat low-dose chest CT in 6 months.',
      };
    } else if (noduleDiameterMm < 15.0) {
      return {
        category: 'Lung-RADS 4A (Suspicious)',
        recommendation: 'Repeat low-dose CT in 3 months; consider PET-CT if solid component >=8mm.',
      };
    } else {
      return {
        category: 'Lung-RADS 4B / 4X (Very Suspicious)',
        recommendation: 'Chest CT with IV contrast, PET-CT, and tissue biopsy / multidisciplinary thoracic oncology review.',
      };
    }
  }

  /**
   * Classify Breast Imaging Reporting and Data System (BI-RADS)
   */
  public static classifyBIRADS(code: number): { category: string; description: string; recommendation: string } {
    switch (code) {
      case 0:
        return { category: 'BI-RADS 0', description: 'Incomplete Assessment', recommendation: 'Recall for additional diagnostic mammographic views or targeted ultrasound.' };
      case 1:
        return { category: 'BI-RADS 1', description: 'Negative', recommendation: 'Routine screening mammography at 1-2 year intervals.' };
      case 2:
        return { category: 'BI-RADS 2', description: 'Benign Findings (e.g. simple cyst, fibroadenoma with classic calcifications)', recommendation: 'Routine screening mammography.' };
      case 3:
        return { category: 'BI-RADS 3', description: 'Probably Benign (<2% malignancy risk)', recommendation: 'Short-interval 6-month unilateral follow-up mammogram.' };
      case 4:
        return { category: 'BI-RADS 4', description: 'Suspicious Abnormality (2% - 95% malignancy risk)', recommendation: 'Ultrasound-guided core needle tissue biopsy recommended.' };
      case 5:
        return { category: 'BI-RADS 5', description: 'Highly Suggestive of Malignancy (>95% risk)', recommendation: 'Urgent tissue biopsy and surgical oncology consultation.' };
      case 6:
        return { category: 'BI-RADS 6', description: 'Known Biopsy-Proven Malignancy', recommendation: 'Surgical excision / neoadjuvant treatment planning.' };
      default:
        return { category: 'BI-RADS 0', description: 'Incomplete', recommendation: 'Additional diagnostic views needed.' };
    }
  }
}
