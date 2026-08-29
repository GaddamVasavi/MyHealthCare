import { COMPREHENSIVE_ICD10_DATA, ICD10FullRecord } from './icd10Comprehensive.data';
import { SNOMED_CT_DATA, SNOMEDConcept } from './snomedCt.data';
import { DETAILED_PHARMACEUTICAL_CATALOG, DetailedMedicationEntity } from './pharmaceuticalCatalog.data';
import { CLINICAL_PROTOCOLS_DATA, ClinicalProtocol } from './clinicalProtocols.data';
import { LAB_REFERENCE_CATALOG_DATA, LabTestCatalogItem } from './labReferenceCatalog.data';
import { ONCOLOGY_STAGING_DATA, TNMStagingSystem } from './oncologyStaging.data';

export class MedicalKnowledgeBaseService {
  public static queryICD10(search: string, chapter?: string, limit = 50): ICD10FullRecord[] {
    const q = search.toLowerCase();
    return COMPREHENSIVE_ICD10_DATA.filter((i) => {
      const match = (i.code + ' ' + i.description + ' ' + i.synonyms.join(' ')).toLowerCase().includes(q);
      const matchChap = !chapter || i.chapter.toLowerCase().includes(chapter.toLowerCase());
      return match && matchChap;
    }).slice(0, limit);
  }

  public static querySNOMED(search: string, tag?: string, limit = 50): SNOMEDConcept[] {
    const q = search.toLowerCase();
    return SNOMED_CT_DATA.filter((s) => {
      const match = (s.conceptId + ' ' + s.fullySpecifiedName + ' ' + s.preferredTerm).toLowerCase().includes(q);
      const matchTag = !tag || s.semanticTag === tag;
      return match && matchTag;
    }).slice(0, limit);
  }

  public static queryPharmaceuticals(search: string, therapeuticClass?: string, limit = 50): DetailedMedicationEntity[] {
    const q = search.toLowerCase();
    return DETAILED_PHARMACEUTICAL_CATALOG.filter((p) => {
      const match = (p.brandName + ' ' + p.genericName + ' ' + p.mechanismOfAction).toLowerCase().includes(q);
      const matchClass = !therapeuticClass || p.therapeuticClass.toLowerCase().includes(therapeuticClass.toLowerCase());
      return match && matchClass;
    }).slice(0, limit);
  }

  public static getProtocols(search?: string, acuity?: string): ClinicalProtocol[] {
    return CLINICAL_PROTOCOLS_DATA.filter((p) => {
      const match = !search || (p.protocolName + ' ' + p.targetDiagnosis).toLowerCase().includes(search.toLowerCase());
      const matchAcuity = !acuity || p.acuityLevel === acuity;
      return match && matchAcuity;
    });
  }

  public static getLabCatalog(department?: string): LabTestCatalogItem[] {
    return LAB_REFERENCE_CATALOG_DATA.filter((l) => !department || l.department === department);
  }

  public static getOncologyStaging(cancerType?: string): TNMStagingSystem[] {
    return ONCOLOGY_STAGING_DATA.filter((o) => !cancerType || o.cancerType.toLowerCase().includes(cancerType.toLowerCase()));
  }
}
