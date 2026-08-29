import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { FileText, Stethoscope, Save, Plus, Heart, Activity, AlertCircle } from 'lucide-react';
import { api } from '../../services/api';
import { doctorService } from '../../services/doctor.service';
import { Patient } from '../../types';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Select } from '../../components/common/Select';
import { Alert } from '../../components/common/Alert';

export const DoctorClinicalRecordPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const patientIdParam = searchParams.get('patientId') || '';
  const appointmentIdParam = searchParams.get('appointmentId') || '';

  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatientId, setSelectedPatientId] = useState(patientIdParam);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    chiefComplaint: '',
    historyOfIllness: '',
    assessment: '',
    treatmentPlan: '',
    diagnosisCode: '',
    diagnosisDesc: '',
    systolicBp: '',
    diastolicBp: '',
    heartRateBpm: '',
    bloodGlucoseMgDl: '',
    notes: '',
  });

  useEffect(() => {
    doctorService.getAssignedPatients().then((res) => {
      setPatients(res.data || []);
      if (!selectedPatientId && res.data && res.data.length > 0) {
        setSelectedPatientId(res.data[0].id);
      }
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPatientId) return;
    setSaving(true);
    try {
      await api.post('/medical-records', {
        patientId: selectedPatientId,
        appointmentId: appointmentIdParam || undefined,
        chiefComplaint: formData.chiefComplaint,
        historyOfIllness: formData.historyOfIllness,
        assessment: formData.assessment,
        treatmentPlan: formData.treatmentPlan,
        diagnoses: formData.diagnosisDesc
          ? [
              {
                code: formData.diagnosisCode || undefined,
                description: formData.diagnosisDesc,
                type: 'PRIMARY',
              },
            ]
          : undefined,
        vitalSign: formData.systolicBp
          ? {
              systolicBp: parseInt(formData.systolicBp, 10),
              diastolicBp: formData.diastolicBp ? parseInt(formData.diastolicBp, 10) : undefined,
              heartRateBpm: formData.heartRateBpm ? parseInt(formData.heartRateBpm, 10) : undefined,
              bloodGlucoseMgDl: formData.bloodGlucoseMgDl ? parseFloat(formData.bloodGlucoseMgDl) : undefined,
            }
          : undefined,
      });

      setMessage('Medical record and clinical note saved successfully!');
      setTimeout(() => {
        navigate('/doctor/dashboard');
      }, 1500);
    } catch (err: any) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Record Clinical Consultation Note</h1>
        <p className="text-xs text-slate-500 mt-1">
          Document patient chief complaints, clinical examination findings, diagnoses, and treatment plans.
        </p>
      </div>

      {message && <Alert variant="success">{message}</Alert>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card title="Patient Selection">
          <Select
            label="Consulting Patient"
            options={patients.map((p) => ({
              value: p.id,
              label: `${p.firstName} ${p.lastName} (${p.gender}, Phone: ${p.phone})`,
            }))}
            value={selectedPatientId}
            onChange={(e) => setSelectedPatientId(e.target.value)}
          />
        </Card>

        <Card title="Clinical Findings & SOAP Notes">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Chief Complaint *</label>
              <textarea
                rows={2}
                required
                placeholder="Primary symptoms or reasons stated by patient..."
                className="block w-full rounded-lg border border-slate-300 py-2 px-3 text-sm focus:ring-primary-500 focus:outline-none"
                value={formData.chiefComplaint}
                onChange={(e) => setFormData({ ...formData, chiefComplaint: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">History of Present Illness (HPI)</label>
              <textarea
                rows={2}
                placeholder="Onset, duration, severity, and associated factors..."
                className="block w-full rounded-lg border border-slate-300 py-2 px-3 text-sm focus:ring-primary-500 focus:outline-none"
                value={formData.historyOfIllness}
                onChange={(e) => setFormData({ ...formData, historyOfIllness: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Clinical Assessment & Examination</label>
              <textarea
                rows={2}
                placeholder="Physical examination notes, auscultation, clinical observations..."
                className="block w-full rounded-lg border border-slate-300 py-2 px-3 text-sm focus:ring-primary-500 focus:outline-none"
                value={formData.assessment}
                onChange={(e) => setFormData({ ...formData, assessment: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Treatment Plan & Follow Up</label>
              <textarea
                rows={2}
                placeholder="Therapeutic recommendations, lifestyle adjustments, follow up interval..."
                className="block w-full rounded-lg border border-slate-300 py-2 px-3 text-sm focus:ring-primary-500 focus:outline-none"
                value={formData.treatmentPlan}
                onChange={(e) => setFormData({ ...formData, treatmentPlan: e.target.value })}
              />
            </div>
          </div>
        </Card>

        <Card title="Primary Diagnosis & Encounter Vitals">
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Input
                label="ICD-10 Code"
                placeholder="e.g. I10, J06.9"
                value={formData.diagnosisCode}
                onChange={(e) => setFormData({ ...formData, diagnosisCode: e.target.value })}
              />
              <div className="sm:col-span-2">
                <Input
                  label="Diagnosis Description"
                  placeholder="e.g. Acute Upper Respiratory Tract Infection"
                  value={formData.diagnosisDesc}
                  onChange={(e) => setFormData({ ...formData, diagnosisDesc: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 border-t border-slate-100">
              <Input
                label="Systolic BP"
                type="number"
                placeholder="120"
                value={formData.systolicBp}
                onChange={(e) => setFormData({ ...formData, systolicBp: e.target.value })}
              />
              <Input
                label="Diastolic BP"
                type="number"
                placeholder="80"
                value={formData.diastolicBp}
                onChange={(e) => setFormData({ ...formData, diastolicBp: e.target.value })}
              />
              <Input
                label="Heart Rate"
                type="number"
                placeholder="72"
                value={formData.heartRateBpm}
                onChange={(e) => setFormData({ ...formData, heartRateBpm: e.target.value })}
              />
              <Input
                label="Glucose (mg/dL)"
                type="number"
                placeholder="95"
                value={formData.bloodGlucoseMgDl}
                onChange={(e) => setFormData({ ...formData, bloodGlucoseMgDl: e.target.value })}
              />
            </div>
          </div>
        </Card>

        <div className="flex justify-end gap-3">
          <Button type="button" variant="ghost" onClick={() => navigate('/doctor/dashboard')}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" size="lg" isLoading={saving} leftIcon={<Save className="h-4 w-4" />}>
            Save Medical Record
          </Button>
        </div>
      </form>
    </div>
  );
};
