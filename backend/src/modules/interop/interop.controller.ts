import { Request, Response, NextFunction } from 'express';
import { InteropService } from './interop.service';
import { sendSuccess } from '../../utils/response';

export class InteropController {
  public static async exportPatientFHIR(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const patientId = req.params.patientId;
      const fhirBundle = await InteropService.exportPatientFHIRBundle(patientId);
      sendSuccess(res, fhirBundle, 'FHIR R4 Patient Bundle generated successfully.');
    } catch (err) {
      next(err);
    }
  }

  public static async exportPatientHL7(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const patientId = req.params.patientId;
      const hl7Data = await InteropService.exportPatientHL7ADT(patientId);
      sendSuccess(res, hl7Data, 'HL7 v2.5.1 ADT message generated successfully.');
    } catch (err) {
      next(err);
    }
  }

  public static async exportLabOrderHL7(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const labOrderId = req.params.labOrderId;
      const hl7Data = await InteropService.exportLabOrderHL7ORU(labOrderId);
      sendSuccess(res, hl7Data, 'HL7 v2.5.1 ORU message generated successfully.');
    } catch (err) {
      next(err);
    }
  }

  public static async parseHL7(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { rawMessage } = req.body;
      const parsed = InteropService.parseHL7Message(rawMessage);
      sendSuccess(res, parsed, 'HL7 message parsed successfully.');
    } catch (err) {
      next(err);
    }
  }
}
