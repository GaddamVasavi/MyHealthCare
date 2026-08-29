import React, { useEffect, useState } from 'react';
import { Stethoscope, AlertTriangle, ShieldAlert, CheckCircle2, BookOpen, Calculator, Search, Plus, Trash2 } from 'lucide-react';
import { cdsService, CDSAnalysisResult } from '../../services/cds.service';
import { doctorService } from '../../services/doctor.service';
import { Patient } from '../../types';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Select } from '../../components/common/Select';
import { Badge } from '../../components/common/Badge';
import { Alert } from '../../components/common/Alert';

export const ClinicalDecisionSupportPage: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatientId, setSelectedPatientId] = useState('');
  const [analysis, setAnalysis] = useState<CDSAnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);

  // Drug Interaction Quick Checker state
  const [rxList, setRxList] = useState<string[]>(['Warfarin', 'Aspirin']);
  const [newRx, setNewRx] = useState('');
  const [interactionResults, setInteractionResults] = useState<any[]>([]);

  // Calculator State
  const [activeCalc, setActiveCalc] = useState('FRAMINGHAM_CVD');
  const [calcInput, setCalcInput] = useState({
    patientAge: 55,
    gender: 'MALE',
    systolicBp: 145,
    totalCholesterol: 220,
    hdlCholesterol: 42,
    isSmoker: true,
    isHypertensiveTreated: true,
  });
  const [calcResult, setCalcResult] = useState<any>(null);

  useEffect(() => {
    doctorService.getAssignedPatients().then((res) => {
      setPatients(res.data || []);
      if (res.data && res.data.length > 0) {
        setSelectedPatientId(res.data[0].id);
      }
    });
  }, []);

  const handleRunAnalysis = async () => {
    if (!selectedPatientId) return;
    setLoading(true);
    try {
      const res = await cdsService.analyzePatient(selectedPatientId);
      setAnalysis(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCheckInteractions = async () => {
    if (rxList.length < 2) return;
    try {
      const res = await cdsService.checkInteractions(rxList);
      setInteractionResults(res.data.interactions || []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleRunCalculator = async () => {
    try {
      const res = await cdsService.calculateScore(activeCalc, calcInput);
      setCalcResult(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Clinical Decision Support (CDS) & Expert Rules</h1>
        <p className="text-xs text-slate-500 mt-1">Real-time drug interaction screening, allergy cross-reactivity matrices, and validated clinical risk score engines.</p>
      </div>

      {/* Patient Automated Analysis Banner */}
      <Card title="Patient Clinical Risk & Conflict Evaluator">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <Select
              label="Select Patient for Comprehensive Rule Evaluation"
              options={patients.map((p) => ({ value: p.id, label: `${p.firstName} ${p.lastName} (${p.phone})` }))}
              value={selectedPatientId}
              onChange={(e) => setSelectedPatientId(e.target.value)}
            />
          </div>
          <div className="sm:self-end">
            <Button variant="primary" size="md" isLoading={loading} onClick={handleRunAnalysis} leftIcon={<Stethoscope className="h-4 w-4" />}>
              Run CDS Evaluation
            </Button>
          </div>
        </div>

        {analysis && (
          <div className="space-y-6 pt-6 border-t border-slate-100 mt-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">Overall Patient Risk Stratification:</span>
              <Badge variant={analysis.overallRiskLevel === 'CRITICAL' ? 'danger' : analysis.overallRiskLevel === 'HIGH' ? 'warning' : 'success'} size="md">
                {analysis.overallRiskLevel} RISK
              </Badge>
            </div>

            {/* Drug Interactions */}
            {analysis.interactionsDetected.length > 0 ? (
              <div className="space-y-3">
                <h4 className="font-bold text-xs text-rose-900 flex items-center gap-1.5">
                  <AlertTriangle className="h-4 w-4 text-rose-600" /> Detected Drug-Drug Interactions ({analysis.interactionsDetected.length})
                </h4>
                {analysis.interactionsDetected.map((rule, idx) => (
                  <div key={idx} className="bg-rose-50 border border-rose-200 rounded-xl p-4 space-y-2 text-xs text-rose-950">
                    <div className="flex justify-between items-center">
                      <span className="font-bold">{rule.drugA} + {rule.drugB}</span>
                      <Badge variant={rule.severity === 'CONTRAINDICATED' ? 'danger' : 'warning'} size="sm">{rule.severity}</Badge>
                    </div>
                    <p><span className="font-semibold">Clinical Effect:</span> {rule.clinicalEffect}</p>
                    <p><span className="font-semibold">Management:</span> {rule.management}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-emerald-700 bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                ✓ No adverse drug-drug interactions detected among current prescriptions.
              </p>
            )}

            {/* Risk Scores */}
            <div className="space-y-3">
              <h4 className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                <Calculator className="h-4 w-4 text-primary-600" /> Evidence-Based Clinical Risk Scores
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {analysis.calculatedRiskScores.map((score, idx) => (
                  <Card key={idx} className="p-4 space-y-2">
                    <h5 className="font-bold text-xs text-slate-900">{score.calculatorName}</h5>
                    <div className="text-xl font-bold text-primary-700">{score.score}</div>
                    <p className="text-xs text-slate-600 leading-relaxed">{score.interpretation}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
      </Card>

      {/* Standalone Drug-Drug Interaction Screen */}
      <Card title="Direct Drug-Drug Interaction Simulator">
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Enter medication name (e.g. Clopidogrel, Omeprazole, Simvastatin)..."
              value={newRx}
              onChange={(e) => setNewRx(e.target.value)}
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                if (newRx.trim()) {
                  setRxList([...rxList, newRx.trim()]);
                  setNewRx('');
                }
              }}
            >
              Add
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {rxList.map((rx, idx) => (
              <span key={idx} className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs font-semibold text-slate-800">
                {rx}
                <button onClick={() => setRxList(rxList.filter((_, i) => i !== idx))} className="text-slate-400 hover:text-rose-600">×</button>
              </span>
            ))}
          </div>

          <Button variant="primary" size="sm" onClick={handleCheckInteractions}>
            Check Active Regimen ({rxList.length} drugs)
          </Button>

          {interactionResults.length > 0 && (
            <div className="space-y-3 pt-3 border-t border-slate-100">
              {interactionResults.map((r, i) => (
                <div key={i} className="p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-1 text-xs text-amber-950">
                  <div className="flex justify-between font-bold">
                    <span>{r.drugA} + {r.drugB}</span>
                    <Badge variant="warning" size="sm">{r.severity}</Badge>
                  </div>
                  <p>{r.mechanism}</p>
                  <p className="font-semibold text-slate-800">Management: {r.management}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
