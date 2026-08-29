import React, { useEffect, useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
} from 'recharts';
import { Activity, Heart, FlaskConical, TrendingUp, Plus, Calendar, CheckCircle2 } from 'lucide-react';
import { patientService } from '../../services/patient.service';
import { VitalSign } from '../../types';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Modal } from '../../components/common/Modal';
import { Alert } from '../../components/common/Alert';

export const VitalsTrackerPage: React.FC = () => {
  const [trends, setTrends] = useState<any>(null);
  const [history, setHistory] = useState<VitalSign[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    systolicBp: '',
    diastolicBp: '',
    heartRateBpm: '',
    bloodGlucoseMgDl: '',
    weightKg: '',
    heightCm: '',
    temperatureCelsius: '',
    oxygenSaturationPct: '',
    notes: '',
  });

  const loadVitalsData = async () => {
    setLoading(true);
    try {
      const [trendsRes, historyRes] = await Promise.all([
        patientService.getVitalsTrends(90),
        patientService.getVitalsHistory(),
      ]);
      setTrends(trendsRes.data);
      setHistory(historyRes.data || []);
    } catch (err) {
      console.error('Failed to load vitals:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadVitalsData();
  }, []);

  const handleRecordVitals = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await patientService.recordVitals({
        systolicBp: formData.systolicBp ? parseInt(formData.systolicBp, 10) : undefined,
        diastolicBp: formData.diastolicBp ? parseInt(formData.diastolicBp, 10) : undefined,
        heartRateBpm: formData.heartRateBpm ? parseInt(formData.heartRateBpm, 10) : undefined,
        bloodGlucoseMgDl: formData.bloodGlucoseMgDl ? parseFloat(formData.bloodGlucoseMgDl) : undefined,
        weightKg: formData.weightKg ? parseFloat(formData.weightKg) : undefined,
        heightCm: formData.heightCm ? parseFloat(formData.heightCm) : undefined,
        temperatureCelsius: formData.temperatureCelsius ? parseFloat(formData.temperatureCelsius) : undefined,
        oxygenSaturationPct: formData.oxygenSaturationPct ? parseFloat(formData.oxygenSaturationPct) : undefined,
        notes: formData.notes || undefined,
      });
      setMessage('Vital metrics successfully logged.');
      setIsLogModalOpen(false);
      loadVitalsData();
    } catch (err: any) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Vital Signs & Health Trends</h1>
          <p className="text-xs text-slate-500 mt-1">
            Monitor time-series trends for Blood Pressure, Heart Rate, Blood Sugar, and Weight over time.
          </p>
        </div>
        <Button size="sm" variant="primary" leftIcon={<Plus className="h-4 w-4" />} onClick={() => setIsLogModalOpen(true)}>
          Log New Measurements
        </Button>
      </div>

      {message && <Alert variant="success" onDismiss={() => setMessage(null)}>{message}</Alert>}

      {/* Chart Visualizations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Blood Pressure Trend */}
        <Card title="Blood Pressure Trend (mmHg)" subtitle="Systolic & Diastolic historical readings">
          <div className="h-64 w-full">
            {trends?.bpTrend?.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trends.bpTrend} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                  <YAxis domain={[50, 180]} tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="systolic" stroke="#e11d48" name="Systolic (mmHg)" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="diastolic" stroke="#0284c7" name="Diastolic (mmHg)" strokeWidth={2} dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex h-full items-center justify-center text-xs text-slate-400">
                Log at least two BP readings to render trends.
              </div>
            )}
          </div>
        </Card>

        {/* Heart Rate Trend */}
        <Card title="Resting Heart Rate (BPM)" subtitle="Pulse rate tracking">
          <div className="h-64 w-full">
            {trends?.heartRateTrend?.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trends.heartRateTrend} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                  <YAxis domain={[40, 140]} tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Area type="monotone" dataKey="heartRate" stroke="#0d9488" fill="#ccfbf1" name="Heart Rate (bpm)" />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex h-full items-center justify-center text-xs text-slate-400">
                No heart rate history logged yet.
              </div>
            )}
          </div>
        </Card>

        {/* Blood Glucose Trend */}
        <Card title="Blood Glucose (mg/dL)" subtitle="Fasting & postprandial glucose tracking">
          <div className="h-64 w-full">
            {trends?.glucoseTrend?.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trends.glucoseTrend} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                  <YAxis domain={[50, 250]} tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="glucose" stroke="#d97706" name="Glucose (mg/dL)" strokeWidth={2} dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex h-full items-center justify-center text-xs text-slate-400">
                No glucose measurements logged.
              </div>
            )}
          </div>
        </Card>

        {/* Weight & BMI Trend */}
        <Card title="Weight & BMI Progression" subtitle="Body weight (kg) tracking">
          <div className="h-64 w-full">
            {trends?.weightTrend?.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trends.weightTrend} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                  <YAxis domain={['auto', 'auto']} tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#4f46e5" name="Weight (kg)" strokeWidth={2} dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex h-full items-center justify-center text-xs text-slate-400">
                No body weight measurements recorded yet.
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Log Modal */}
      <Modal isOpen={isLogModalOpen} onClose={() => setIsLogModalOpen(false)} title="Log Health Vitals">
        <form onSubmit={handleRecordVitals} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Systolic BP (mmHg)"
              type="number"
              placeholder="120"
              value={formData.systolicBp}
              onChange={(e) => setFormData({ ...formData, systolicBp: e.target.value })}
            />
            <Input
              label="Diastolic BP (mmHg)"
              type="number"
              placeholder="80"
              value={formData.diastolicBp}
              onChange={(e) => setFormData({ ...formData, diastolicBp: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Heart Rate (BPM)"
              type="number"
              placeholder="72"
              value={formData.heartRateBpm}
              onChange={(e) => setFormData({ ...formData, heartRateBpm: e.target.value })}
            />
            <Input
              label="Blood Glucose (mg/dL)"
              type="number"
              placeholder="95"
              value={formData.bloodGlucoseMgDl}
              onChange={(e) => setFormData({ ...formData, bloodGlucoseMgDl: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Weight (kg)"
              type="number"
              step="0.1"
              placeholder="70.5"
              value={formData.weightKg}
              onChange={(e) => setFormData({ ...formData, weightKg: e.target.value })}
            />
            <Input
              label="Height (cm)"
              type="number"
              placeholder="175"
              value={formData.heightCm}
              onChange={(e) => setFormData({ ...formData, heightCm: e.target.value })}
            />
          </div>

          <Input
            label="Notes / Context"
            placeholder="e.g. Fasting morning measurement, after 15 min rest"
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          />

          <Button type="submit" variant="primary" className="w-full" size="lg" isLoading={submitting}>
            Save Vital Measurements
          </Button>
        </form>
      </Modal>
    </div>
  );
};
