export type FHIRResourceType =
  | 'Patient'
  | 'Practitioner'
  | 'Encounter'
  | 'Observation'
  | 'Condition'
  | 'MedicationRequest'
  | 'DiagnosticReport'
  | 'AllergyIntolerance'
  | 'Coverage'
  | 'Claim'
  | 'Bundle';

export interface FHIRCoding {
  system: string;
  code: string;
  display?: string;
  version?: string;
}

export interface FHIRCodeableConcept {
  coding: FHIRCoding[];
  text?: string;
}

export interface FHIRIdentifier {
  use?: 'usual' | 'official' | 'temp' | 'secondary';
  type?: FHIRCodeableConcept;
  system: string;
  value: string;
}

export interface FHIRReference {
  reference: string;
  type?: string;
  display?: string;
}

export interface FHIRPeriod {
  start?: string;
  end?: string;
}

export interface FHIRQuantity {
  value: number;
  unit: string;
  system?: string;
  code?: string;
  comparator?: '<' | '<=' | '>=' | '>';
}

export interface FHIRPatientResource {
  resourceType: 'Patient';
  id: string;
  identifier: FHIRIdentifier[];
  active: boolean;
  name: Array<{
    use: 'official' | 'usual';
    family: string;
    given: string[];
    prefix?: string[];
  }>;
  telecom: Array<{
    system: 'phone' | 'email';
    value: string;
    use: 'home' | 'work' | 'mobile';
  }>;
  gender: 'male' | 'female' | 'other' | 'unknown';
  birthDate: string;
  address?: Array<{
    use: 'home';
    line: string[];
    city: string;
    state: string;
    postalCode: string;
    country: string;
  }>;
}

export interface FHIRObservationResource {
  resourceType: 'Observation';
  id: string;
  status: 'registered' | 'preliminary' | 'final' | 'amended' | 'corrected';
  category: FHIRCodeableConcept[];
  code: FHIRCodeableConcept;
  subject: FHIRReference;
  effectiveDateTime: string;
  issued?: string;
  performer?: FHIRReference[];
  valueQuantity?: FHIRQuantity;
  valueString?: string;
  interpretation?: FHIRCodeableConcept[];
  referenceRange?: Array<{
    low?: FHIRQuantity;
    high?: FHIRQuantity;
    text?: string;
  }>;
  component?: Array<{
    code: FHIRCodeableConcept;
    valueQuantity?: FHIRQuantity;
    interpretation?: FHIRCodeableConcept[];
  }>;
}

export interface FHIRConditionResource {
  resourceType: 'Condition';
  id: string;
  clinicalStatus: FHIRCodeableConcept;
  verificationStatus: FHIRCodeableConcept;
  category: FHIRCodeableConcept[];
  severity?: FHIRCodeableConcept;
  code: FHIRCodeableConcept;
  subject: FHIRReference;
  recordedDate?: string;
  note?: Array<{ text: string }>;
}

export interface FHIRMedicationRequestResource {
  resourceType: 'MedicationRequest';
  id: string;
  status: 'active' | 'on-hold' | 'cancelled' | 'completed' | 'entered-in-error' | 'stopped';
  intent: 'proposal' | 'plan' | 'order' | 'original-order' | 'reflex-order' | 'filler-order' | 'instance-order' | 'option';
  medicationCodeableConcept: FHIRCodeableConcept;
  subject: FHIRReference;
  authoredOn: string;
  requester?: FHIRReference;
  dosageInstruction?: Array<{
    text: string;
    timing?: { code?: FHIRCodeableConcept };
    route?: FHIRCodeableConcept;
    doseAndRate?: Array<{
      doseQuantity?: FHIRQuantity;
    }>;
  }>;
}

export interface FHIRBundleResource {
  resourceType: 'Bundle';
  id: string;
  type: 'document' | 'message' | 'transaction' | 'transaction-response' | 'batch' | 'batch-response' | 'history' | 'searchset' | 'collection';
  timestamp: string;
  total?: number;
  entry: Array<{
    fullUrl: string;
    resource: any;
  }>;
}
