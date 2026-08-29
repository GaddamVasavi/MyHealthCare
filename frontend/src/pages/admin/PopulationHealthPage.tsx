import React, { useEffect, useState } from 'react';
import { Users, Heart, AlertCircle, CheckCircle2, TrendingUp, ShieldCheck, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { populationService } from '../../services/population.service';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';

export const PopulationHealthPage: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    populationService.getHEDISDashboard().then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="text-center py-12 text-slate-400 text-xs">Computing population health quality metrics...</div>;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Population Health & HEDIS Quality Performance</h1>
        <p className="text-xs text-slate-500 mt-1">
          HEDIS clinical quality measures, chronic disease disease registries, and automated gaps-in-care patient outreach.
        </p>
      </div>

      {/* HEDIS Quality Measures */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-900">Healthcare Effectiveness Data and Information Set (HEDIS)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.measures?.map((m: any, idx: number) => {
            const isPassing = m.performanceRatePct >= m.benchmarkTargetPct;
            return (
              <Card key={idx} className="p-5 space-y-3 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-primary-700">{m.measureCode}</span>
                    <Badge variant={isPassing ? 'success' : 'warning'} size="sm">
                      {isPassing ? 'Met Target' : 'Action Needed'}
                    </Badge>
                  </div>
                  <h4 className="font-bold text-xs text-slate-900">{m.measureName}</h4>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                  <div className="flex justify-between items-end">
                    <span className="text-slate-500">Compliance Rate:</span>
                    <span className="text-xl font-bold text-slate-900">{m.performanceRatePct}%</span>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${isPassing ? 'bg-emerald-500' : 'bg-amber-500'}`}
                      style={{ width: `${Math.min(100, m.performanceRatePct)}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>Benchmark: {m.benchmarkTargetPct}%</span>
                    <span>Compliant: {m.numeratorCompliant} / {m.eligiblePopulation}</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Chronic Disease Registries */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-900">Chronic Care Management (CCM) Registry</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.registry?.map((reg: any, idx: number) => (
            <Card key={idx} className="p-4 space-y-2">
              <h4 className="font-bold text-xs text-slate-900">{reg.condition}</h4>
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span>Active Cohort:</span>
                <span className="font-bold text-slate-900">{reg.prevalenceCount} Patients ({reg.prevalenceRatePct}%)</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span>Clinically Controlled:</span>
                <span className="font-semibold text-emerald-600">{reg.controlledCount} ({reg.controlledRatePct}%)</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span>High-Risk Tier:</span>
                <span className="font-semibold text-rose-600">{reg.highRiskCount} Patients</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Gaps-in-Care Action List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900">Identified Gaps-In-Care (Outreach Queue)</h3>
          <Button size="sm" variant="primary" leftIcon={<Mail className="h-3.5 w-3.5" />}>
            Broadcast Outreach Reminders
          </Button>
        </div>

        <div className="space-y-3">
          {data?.careGaps?.map((gap: any, idx: number) => (
            <Card key={idx} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xs text-slate-900">{gap.patientName}</span>
                  <span className="text-xs text-slate-400">({gap.phone})</span>
                  <Badge variant="warning" size="sm">{gap.measureCode}</Badge>
                </div>
                <p className="text-xs text-slate-600">{gap.gapDescription}</p>
                <p className="text-xs text-primary-700 font-medium">{gap.recommendedAction}</p>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                <Button size="sm" variant="outline" leftIcon={<Phone className="h-3.5 w-3.5" />}>
                  Contact
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
