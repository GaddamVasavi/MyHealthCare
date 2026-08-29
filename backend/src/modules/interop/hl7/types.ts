export type HL7MessageType = 'ADT^A01' | 'ADT^A08' | 'ORU^R01' | 'ORM^O01' | 'SIU^S12' | 'DFT^P03';

export interface HL7Segment {
  name: string;
  fields: string[];
}

export interface HL7Message {
  messageType: HL7MessageType;
  controlId: string;
  segments: HL7Segment[];
  rawER7?: string;
}
