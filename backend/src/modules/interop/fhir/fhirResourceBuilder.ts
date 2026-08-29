import {
  FHIRPatientResource,
  FHIRObservationResource,
  FHIRConditionResource,
  FHIRMedicationRequestResource,
  FHIRBundleResource,
} from './types';

export class FHIRResourceBuilder {
  /**
   * Build FHIR R4 Patient Resource from Prisma Patient
   */
  public static buildPatient(patient: any): FHIRPatientResource {
    return {
      resourceType: 'Patient',
      id: patient.id,
      identifier: [
        {
          use: 'official',
          system: 'urn:oid:2.16.840.1.113883.4.1',
          value: patient.id,
        },
        {
          use: 'secondary',
          system: 'https://myhealthcare.platform/patients',
          value: `PAT-${patient.id.slice(0, 8).toUpperCase()}`,
        },
      ],
      active: true,
      name: [
        {
          use: 'official',
          family: patient.lastName,
          given: [patient.firstName],
        },
      ],
      telecom: [
        {
          system: 'phone',
          value: patient.phone || '',
          use: 'mobile',
        },
        {
          system: 'email',
          value: patient.user?.email || '',
          use: 'home',
        },
      ],
      gender: patient.gender === 'MALE' ? 'male' : patient.gender === 'FEMALE' ? 'female' : 'other',
      birthDate: patient.dateOfBirth ? new Date(patient.dateOfBirth).toISOString().split('T')[0] : '1990-01-01',
      address: patient.address
        ? [
            {
              use: 'home',
              line: [patient.address.street || ''],
              city: patient.address.city || '',
              state: patient.address.state || '',
              postalCode: patient.address.postalCode || '',
              country: 'USA',
            },
          ]
        : undefined,
    };
  }

  /**
   * Build FHIR R4 Vital Signs Observation
   */
  public static buildVitalObservation(vital: any, patientId: string): FHIRObservationResource[] {
    const observations: FHIRObservationResource[] = [];
    const timestamp = vital.recordedAt ? new Date(vital.recordedAt).toISOString() : new Date().toISOString();

    // 1. Blood Pressure (Composite Component Observation)
    if (vital.systolicBp && vital.diastolicBp) {
      observations.push({
        resourceType: 'Observation',
        id: `obs-bp-${vital.id}`,
        status: 'final',
        category: [
          {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/observation-category',
                code: 'vital-signs',
                display: 'Vital Signs',
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '85354-9',
              display: 'Blood pressure panel with all children optional',
            },
          ],
          text: 'Blood Pressure',
        },
        subject: {
          reference: `Patient/${patientId}`,
        },
        effectiveDateTime: timestamp,
        component: [
          {
            code: {
              coding: [{ system: 'http://loinc.org', code: '8480-6', display: 'Systolic blood pressure' }],
            },
            valueQuantity: {
              value: vital.systolicBp,
              unit: 'mm[Hg]',
              system: 'http://unitsofmeasure.org',
              code: 'mm[Hg]',
            },
          },
          {
            code: {
              coding: [{ system: 'http://loinc.org', code: '8462-4', display: 'Diastolic blood pressure' }],
            },
            valueQuantity: {
              value: vital.diastolicBp,
              unit: 'mm[Hg]',
              system: 'http://unitsofmeasure.org',
              code: 'mm[Hg]',
            },
          },
        ],
      });
    }

    // 2. Heart Rate Observation
    if (vital.heartRateBpm) {
      observations.push({
        resourceType: 'Observation',
        id: `obs-hr-${vital.id}`,
        status: 'final',
        category: [
          {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/observation-category',
                code: 'vital-signs',
                display: 'Vital Signs',
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '8867-4',
              display: 'Heart rate',
            },
          ],
          text: 'Heart Rate',
        },
        subject: {
          reference: `Patient/${patientId}`,
        },
        effectiveDateTime: timestamp,
        valueQuantity: {
          value: vital.heartRateBpm,
          unit: 'beats/minute',
          system: 'http://unitsofmeasure.org',
          code: '/min',
        },
      });
    }

    // 3. Blood Glucose Observation
    if (vital.bloodGlucoseMgDl) {
      observations.push({
        resourceType: 'Observation',
        id: `obs-glucose-${vital.id}`,
        status: 'final',
        category: [
          {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/observation-category',
                code: 'laboratory',
                display: 'Laboratory',
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '2339-0',
              display: 'Glucose [Mass/volume] in Blood',
            },
          ],
          text: 'Blood Glucose',
        },
        subject: {
          reference: `Patient/${patientId}`,
        },
        effectiveDateTime: timestamp,
        valueQuantity: {
          value: vital.bloodGlucoseMgDl,
          unit: 'mg/dL',
          system: 'http://unitsofmeasure.org',
          code: 'mg/dL',
        },
      });
    }

    return observations;
  }

  /**
   * Build FHIR R4 Bundle containing full Patient Health Record
   */
  public static buildPatientRecordBundle(patientData: any): FHIRBundleResource {
    const patientResource = this.buildPatient(patientData);
    const entries: Array<{ fullUrl: string; resource: any }> = [
      {
        fullUrl: `urn:uuid:${patientResource.id}`,
        resource: patientResource,
      },
    ];

    // Add Vitals Observations
    if (patientData.vitals) {
      for (const v of patientData.vitals) {
        const obsList = this.buildVitalObservation(v, patientData.id);
        for (const obs of obsList) {
          entries.push({
            fullUrl: `urn:uuid:${obs.id}`,
            resource: obs,
          });
        }
      }
    }

    // Add Conditions
    if (patientData.conditions) {
      for (const cond of patientData.conditions) {
        entries.push({
          fullUrl: `urn:uuid:${cond.id}`,
          resource: {
            resourceType: 'Condition',
            id: cond.id,
            clinicalStatus: {
              coding: [{ system: 'http://terminology.hl7.org/CodeSystem/condition-clinical', code: 'active' }],
            },
            verificationStatus: {
              coding: [{ system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status', code: 'confirmed' }],
            },
            category: [
              {
                coding: [{ system: 'http://terminology.hl7.org/CodeSystem/condition-category', code: 'problem-list-item' }],
              },
            ],
            code: {
              coding: [
                {
                  system: 'http://hl7.org/fhir/sid/icd-10-cm',
                  code: cond.icdCode || 'R69',
                  display: cond.name,
                },
              ],
              text: cond.name,
            },
            subject: {
              reference: `Patient/${patientData.id}`,
            },
          },
        });
      }
    }

    return {
      resourceType: 'Bundle',
      id: `bundle-patient-${patientData.id}`,
      type: 'document',
      timestamp: new Date().toISOString(),
      total: entries.length,
      entry: entries,
    };
  }
}
