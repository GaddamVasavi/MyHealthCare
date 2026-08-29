import { HL7Message, HL7Segment } from './types';

export class HL7Serializer {
  private static formatHL7Date(date: Date = new Date()): string {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    const ss = String(date.getSeconds()).padStart(2, '0');
    return `${yyyy}${mm}${dd}${hh}${min}${ss}`;
  }

  /**
   * Serialize Patient Admission / Registration into HL7 v2.5.1 ADT^A08 message
   */
  public static serializePatientADT(patient: any): string {
    const timestamp = this.formatHL7Date();
    const controlId = `MSG-${Date.now()}`;
    const dob = patient.dateOfBirth ? this.formatHL7Date(new Date(patient.dateOfBirth)).slice(0, 8) : '19900101';
    const gender = patient.gender === 'MALE' ? 'M' : patient.gender === 'FEMALE' ? 'F' : 'U';

    const segments: string[] = [];

    // MSH - Message Header
    segments.push(`MSH|^~\\&|MYHEALTHCARE_EHR|MYHEALTHCARE_HOSPITAL|CENTRAL_HIE|REGIONAL_HEALTH|${timestamp}||ADT^A08^ADT_A01|${controlId}|P|2.5.1|||AL|NE||UNICODE UTF-8`);

    // EVN - Event Type
    segments.push(`EVN|A08|${timestamp}|||DR_SYSTEM`);

    // PID - Patient Identification
    const addressStr = patient.address
      ? `${patient.address.street || ''}^^${patient.address.city || ''}^${patient.address.state || ''}^${patient.address.postalCode || ''}^USA`
      : '^^Chicago^IL^60601^USA';
    segments.push(`PID|1||${patient.id}^^^MYHEALTHCARE^MR||${patient.lastName}^${patient.firstName}||${dob}|${gender}|||${addressStr}||${patient.phone || ''}|||S||${patient.id}`);

    // PV1 - Patient Visit
    segments.push(`PV1|1|O|CLINIC^ROOM101^1||||DR_ATTENDING^PRIMARY^MD|||MED||||||||${patient.id}|||||||||||||||||||||||||${timestamp}`);

    return segments.join('\r\n');
  }

  /**
   * Serialize Lab Order Results into HL7 v2.5.1 ORU^R01 message
   */
  public static serializeLabResultsORU(labOrder: any): string {
    const timestamp = this.formatHL7Date();
    const controlId = `ORU-${Date.now()}`;
    const patient = labOrder.patient;
    const dob = patient?.dateOfBirth ? this.formatHL7Date(new Date(patient.dateOfBirth)).slice(0, 8) : '19900101';
    const gender = patient?.gender === 'MALE' ? 'M' : patient?.gender === 'FEMALE' ? 'F' : 'U';

    const segments: string[] = [];

    // MSH
    segments.push(`MSH|^~\\&|MYHEALTHCARE_LIS|CENTRAL_LAB|MYHEALTHCARE_EHR|CLINICAL_PORTAL|${timestamp}||ORU^R01^ORU_R01|${controlId}|P|2.5.1|||AL|NE||UNICODE UTF-8`);

    // PID
    segments.push(`PID|1||${patient?.id}^^^MYHEALTHCARE^MR||${patient?.lastName}^${patient?.firstName}||${dob}|${gender}`);

    // OBR - Observation Request
    segments.push(`OBR|1|${labOrder.orderNumber}|${labOrder.id}|LAB_PANEL^Routine Diagnostic Panel^LN|||${timestamp}|||||||||DR_${labOrder.doctor?.lastName || 'ATTENDING'}|||||||${timestamp}|||F`);

    // OBX - Observation Results
    if (labOrder.results && labOrder.results.length > 0) {
      labOrder.results.forEach((res: any, idx: number) => {
        const flag = res.isAbnormal ? 'A' : 'N';
        segments.push(`OBX|${idx + 1}|NM|${res.testCode || 'TEST'}^${res.testName}^LN||${res.resultValue}|${res.unit || ''}|${res.normalRange || ''}|${flag}|||F|||${timestamp}|PATHOLOGIST_VERIFIED`);
      });
    }

    return segments.join('\r\n');
  }
}

export class HL7Parser {
  /**
   * Parse ER7 pipe-delimited HL7 message into structured AST
   */
  public static parse(rawMessage: string): HL7Message {
    const lines = rawMessage.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n').filter((l) => l.trim().length > 0);
    const segments: HL7Segment[] = [];
    let messageType: any = 'ADT^A01';
    let controlId = 'UNKNOWN';

    for (const line of lines) {
      const parts = line.split('|');
      const name = parts[0];
      const fields = parts.slice(1);

      segments.push({ name, fields });

      if (name === 'MSH') {
        if (fields[7]) messageType = fields[7];
        if (fields[8]) controlId = fields[8];
      }
    }

    return {
      messageType,
      controlId,
      segments,
      rawER7: rawMessage,
    };
  }
}
