import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Pill, Plus, Trash2, Save, Stethoscope, FlaskConical } from 'lucide-react';
import { api } from '../../services/api';
import { doctorService } from '../../services/doctor.service';
import { Patient, LabTest } from '../../types';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Select } from '../../components/common/Select';
import { Alert } from '../../components/common/Alert';

export const DoctorPrescriptionPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const patientIdParam = searchParams.get('patientId') || '';

  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatientId, setSelectedPatientId] = useState(patientIdParam);
  const [generalAdvice, setGeneralAdvice] = useState('');
  const [items, setItems] = useState<Array<{ medicineName: string; form: string; dosage: string; frequency: string; durationDays: number; instructions: string }>>([
    { medicineName: '', form: 'TABLET', dosage: '500 mg', frequency: '1-0-1', durationDays: 7, instructions: 'After meals' },
  ]);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    doctorService.getAssignedPatients().then((res) => {
      setPatients(res.data || []);
      if (!selectedPatientId && res.data && res.data.length > 0) {
        setSelectedPatientId(res.data[0].id);
      }
    });
  }, []);

  const handleAddItem = () => {
    setItems([
      ...items,
      { medicineName: '', form: 'TABLET', dosage: '500 mg', frequency: '1-0-1', durationDays: 7, instructions: 'After meals' },
    ]);
  };

  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleItemChange = (index: number, field: string, value: any) => {
    const next = [...items];
    (next[index] as any)[field] = value;
    setItems(next);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPatientId || items.some((item) => !item.medicineName)) {
      alert('Please enter medicine names for all prescribed items.');
      return;
    }
    setSaving(true);
    try {
      await api.post('/prescriptions', {
        patientId: selectedPatientId,
        generalAdvice,
        items,
      });
      setMessage('Prescription issued successfully!');
      setTimeout(() => navigate('/doctor/dashboard'), 1500);
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Issue Digital Prescription</h1>
        <p className="text-xs text-slate-500 mt-1">Specify medications, dosages, meal instructions, and duration.</p>
      </div>

      {message && <Alert variant="success">{message}</Alert>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card title="Patient & Advice">
          <div className="space-y-4">
            <Select
              label="Select Patient"
              options={patients.map((p) => ({ value: p.id, label: `${p.firstName} ${p.lastName} (${p.phone})` }))}
              value={selectedPatientId}
              onChange={(e) => setSelectedPatientId(e.target.value)}
            />
            <Input
              label="General Clinical Advice"
              placeholder="e.g. Drink plenty of warm fluids, rest for 3 days, avoid cold food"
              value={generalAdvice}
              onChange={(e) => setGeneralAdvice(e.target.value)}
            />
          </div>
        </Card>

        <Card
          title="Medication Items"
          action={
            <Button type="button" size="sm" variant="outline" onClick={handleAddItem} leftIcon={<Plus className="h-3.5 w-3.5" />}>
              Add Medicine
            </Button>
          }
        >
          <div className="space-y-4">
            {items.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>Medicine #{idx + 1}</span>
                  {items.length > 1 && (
                    <button type="button" onClick={() => handleRemoveItem(idx)} className="text-rose-500 hover:text-rose-700">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Input
                    placeholder="Medicine Name (e.g. Amoxicillin)"
                    required
                    value={item.medicineName}
                    onChange={(e) => handleItemChange(idx, 'medicineName', e.target.value)}
                  />
                  <Select
                    options={[
                      { value: 'TABLET', label: 'Tablet' },
                      { value: 'CAPSULE', label: 'Capsule' },
                      { value: 'SYRUP', label: 'Syrup' },
                      { value: 'INJECTION', label: 'Injection' },
                      { value: 'OINTMENT', label: 'Ointment' },
                    ]}
                    value={item.form}
                    onChange={(e) => handleItemChange(idx, 'form', e.target.value)}
                  />
                  <Input
                    placeholder="Dosage (e.g. 500 mg)"
                    required
                    value={item.dosage}
                    onChange={(e) => handleItemChange(idx, 'dosage', e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Input
                    placeholder="Frequency (e.g. 1-0-1)"
                    required
                    value={item.frequency}
                    onChange={(e) => handleItemChange(idx, 'frequency', e.target.value)}
                  />
                  <Input
                    label="Days"
                    type="number"
                    required
                    value={item.durationDays}
                    onChange={(e) => handleItemChange(idx, 'durationDays', parseInt(e.target.value, 10))}
                  />
                  <Input
                    placeholder="Instructions (e.g. Take after meals)"
                    value={item.instructions}
                    onChange={(e) => handleItemChange(idx, 'instructions', e.target.value)}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="flex justify-end gap-3">
          <Button type="button" variant="ghost" onClick={() => navigate('/doctor/dashboard')}>Cancel</Button>
          <Button type="submit" variant="primary" size="lg" isLoading={saving} leftIcon={<Save className="h-4 w-4" />}>
            Issue Prescription
          </Button>
        </div>
      </form>
    </div>
  );
};

export const DoctorLabOrdersPage: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [labTests, setLabTests] = useState<LabTest[]>([]);
  const [selectedPatientId, setSelectedPatientId] = useState('');
  const [selectedTestIds, setSelectedTestIds] = useState<string[]>([]);
  const [clinicalNotes, setClinicalNotes] = useState('');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([
      doctorService.getAssignedPatients(),
      api.get('/laboratory/tests'),
    ]).then(([patientsRes, testsRes]) => {
      setPatients(patientsRes.data || []);
      setLabTests(testsRes.data.data || []);
      if (patientsRes.data && patientsRes.data.length > 0) {
        setSelectedPatientId(patientsRes.data[0].id);
      }
    });
  }, []);

  const handleToggleTest = (id: string) => {
    if (selectedTestIds.includes(id)) {
      setSelectedTestIds(selectedTestIds.filter((t) => t !== id));
    } else {
      setSelectedTestIds([...selectedTestIds, id]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPatientId || selectedTestIds.length === 0) {
      alert('Please select a patient and at least one diagnostic test.');
      return;
    }
    setSaving(true);
    try {
      await api.post('/laboratory/orders', {
        patientId: selectedPatientId,
        testIds: selectedTestIds,
        clinicalNotes,
      });
      setMessage('Laboratory test order submitted successfully!');
      setSelectedTestIds([]);
      setClinicalNotes('');
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Order Laboratory Diagnostics</h1>
        <p className="text-xs text-slate-500 mt-1">Select pathology, biochemistry, or radiology test panels for patient diagnosis.</p>
      </div>

      {message && <Alert variant="success" onDismiss={() => setMessage(null)}>{message}</Alert>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card title="Patient & Indication">
          <div className="space-y-4">
            <Select
              label="Select Patient"
              options={patients.map((p) => ({ value: p.id, label: `${p.firstName} ${p.lastName} (${p.phone})` }))}
              value={selectedPatientId}
              onChange={(e) => setSelectedPatientId(e.target.value)}
            />
            <Input
              label="Clinical Indication / Diagnosis Notes"
              placeholder="e.g. Suspected hyperlipidemia, pre-operative routine evaluation"
              value={clinicalNotes}
              onChange={(e) => setClinicalNotes(e.target.value)}
            />
          </div>
        </Card>

        <Card title="Diagnostic Tests Catalog">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {labTests.map((t) => {
              const isChecked = selectedTestIds.includes(t.id);
              return (
                <div
                  key={t.id}
                  onClick={() => handleToggleTest(t.id)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                    isChecked ? 'bg-primary-50 border-primary-400 shadow-sm' : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => {}}
                    className="rounded border-slate-300 text-primary-600 focus:ring-primary-500 mt-0.5"
                  />
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-xs text-slate-900">{t.name} ({t.code})</h4>
                    <p className="text-[11px] text-slate-500">{t.category} | ${Number(t.price).toFixed(2)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <div className="flex justify-end">
          <Button type="submit" variant="primary" size="lg" isLoading={saving} leftIcon={<FlaskConical className="h-4 w-4" />}>
            Submit Lab Order ({selectedTestIds.length} Tests Selected)
          </Button>
        </div>
      </form>
    </div>
  );
};
