import { ICD10_CM_DATA } from './icd10cm.data';
import { CPT_CODES_DATA, LOINC_CODES_DATA, RXNORM_CODES_DATA } from './cptAndLoinc.data';
import { ICD10Entry, CPTEntry, LOINCEntry, RxNormEntry } from './types';

export class TerminologyService {
  /**
   * Search ICD-10 Diagnosis Codes
   */
  public static searchICD10(query: string, chapter?: string): ICD10Entry[] {
    const q = query.toLowerCase();
    return ICD10_CM_DATA.filter((item) => {
      const matchText = `${item.code} ${item.description} ${item.category}`.toLowerCase().includes(q);
      const matchChapter = !chapter || item.chapter.toLowerCase() === chapter.toLowerCase();
      return matchText && matchChapter;
    });
  }

  /**
   * Search CPT / HCPCS Procedure Codes
   */
  public static searchCPT(query: string, category?: string): CPTEntry[] {
    const q = query.toLowerCase();
    return CPT_CODES_DATA.filter((item) => {
      const matchText = `${item.code} ${item.description}`.toLowerCase().includes(q);
      const matchCategory = !category || item.category === category;
      return matchText && matchCategory;
    });
  }

  /**
   * Search LOINC Lab Codes
   */
  public static searchLOINC(query: string): LOINCEntry[] {
    const q = query.toLowerCase();
    return LOINC_CODES_DATA.filter((item) =>
      `${item.code} ${item.component} ${item.longCommonName}`.toLowerCase().includes(q)
    );
  }

  /**
   * Search RxNorm Drug Catalog
   */
  public static searchRxNorm(query: string): RxNormEntry[] {
    const q = query.toLowerCase();
    return RXNORM_CODES_DATA.filter((item) =>
      `${item.rxcui} ${item.name} ${item.therapeuticClass} ${item.activeIngredients.join(' ')}`.toLowerCase().includes(q)
    );
  }
}
