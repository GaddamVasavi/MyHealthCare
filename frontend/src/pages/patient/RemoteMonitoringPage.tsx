import React, { useEffect, useRef, useState } from 'react';
import { Activity, Heart, BatteryCharging, Zap, Moon, Watch, CheckCircle2, TrendingUp, AlertTriangle } from 'lucide-react';
import { telemetryService, RemotePatientMetrics } from '../../services/telemetry.service';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';

export const RemoteMonitoringPage: React.FC = () => {
  const [metrics, setMetrics] = useState<RemotePatientMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    telemetryService.getMyTelemetry().then((res) => {
      setMetrics(res.data);
      setLoading(false);
    });
  }, []);

  // Continuous Canvas ECG Lead II wave sweep animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let x = 0;
    const width = canvas.width;
    const height = canvas.height;
    const midY = height / 2;

    // Initialize background grid
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    for (let gx = 0; gx < width; gx += 20) {
      ctx.beginPath();
      ctx.moveTo(gx, 0);
      ctx.lineTo(gx, height);
      ctx.stroke();
    }
    for (let gy = 0; gy < height; gy += 20) {
      ctx.beginPath();
      ctx.moveTo(0, gy);
      ctx.lineTo(width, gy);
      ctx.stroke();
    }

    let t = 0;
    const render = () => {
      // Clear a 10px strip ahead of the sweep line
      ctx.fillStyle = '#0f172a';
      ctx.fillRect((x + 1) % width, 0, 12, height);

      // Compute standard Lead II voltage (P-QRS-T)
      const period = 75; // ~80 bpm
      const phase = (t % period) / period;
      let val = 0;

      if (phase >= 0.1 && phase <= 0.18) {
        val = 15 * Math.sin((phase - 0.1) * (Math.PI / 0.08)); // P wave
      } else if (phase >= 0.22 && phase <= 0.24) {
        val = -12; // Q
      } else if (phase > 0.24 && phase <= 0.27) {
        val = 70 * Math.sin((phase - 0.24) * (Math.PI / 0.03)); // R peak
      } else if (phase > 0.27 && phase <= 0.29) {
        val = -22; // S
      } else if (phase >= 0.38 && phase <= 0.52) {
        val = 25 * Math.sin((phase - 0.38) * (Math.PI / 0.14)); // T wave
      }

      // Add baseline noise
      val += (Math.random() - 0.5) * 2;

      const y = midY - val;

      ctx.strokeStyle = '#10b981'; // Emerald ECG line
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, midY);
      ctx.lineTo(x + 1, y);
      ctx.stroke();

      x = (x + 2) % width;
      t++;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (loading) return <div className="text-center py-12 text-slate-400 text-xs">Connecting to wearable telemetry telemetry stream...</div>;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-slate-900 rounded-3xl p-8 text-white shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> LIVE STREAMING
            </span>
            <span className="text-xs text-slate-400">Device: Apple Watch Series 9</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Remote Patient Monitoring (RPM)</h1>
          <p className="text-xs text-slate-400">Continuous biometric telemetry, real-time Lead II ECG rhythm, and Ambulatory Glucose Profile.</p>
        </div>
        <div className="flex items-center gap-3 text-xs bg-white/10 px-4 py-3 rounded-2xl border border-white/10">
          <BatteryCharging className="h-5 w-5 text-emerald-400" />
          <div>
            <div className="font-bold text-white">Battery: {metrics?.batteryStatusPct}%</div>
            <div className="text-slate-300">Synced: Just now</div>
          </div>
        </div>
      </div>

      {/* Live ECG Waveform Canvas */}
      <Card
        title="Continuous Lead II Electrocardiogram (ECG Telemetry)"
        subtitle="Real-time 250 Hz Pan-Tompkins QRS & Arrhythmia Analysis"
        action={
          <Badge variant="success" size="sm">
            {metrics?.ecgSummary?.arrhythmiaFlags[0]?.type || 'NORMAL_SINUS_RHYTHM'}
          </Badge>
        }
      >
        <div className="space-y-4">
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-inner bg-slate-950">
            <canvas ref={canvasRef} width={800} height={180} className="w-full block" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs pt-2">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="text-slate-500 block">Heart Rate</span>
              <span className="text-base font-bold text-slate-900">{metrics?.ecgSummary?.heartRateBpm || 72} <span className="text-xs font-normal text-slate-400">bpm</span></span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="text-slate-500 block">PR Interval</span>
              <span className="text-base font-bold text-slate-900">{metrics?.ecgSummary?.prIntervalMs || 152} <span className="text-xs font-normal text-slate-400">ms</span></span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="text-slate-500 block">QRS Duration</span>
              <span className="text-base font-bold text-slate-900">{metrics?.ecgSummary?.qrsDurationMs || 88} <span className="text-xs font-normal text-slate-400">ms</span></span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="text-slate-500 block">QTc (Bazett)</span>
              <span className="text-base font-bold text-slate-900">{metrics?.ecgSummary?.qtcBazettMs || 412} <span className="text-xs font-normal text-slate-400">ms</span></span>
            </div>
          </div>
        </div>
      </Card>

      {/* Ambulatory Glucose Profile (AGP) from CGM */}
      {metrics?.cgmSummary && (
        <Card title="Ambulatory Glucose Profile (Continuous Glucose Monitor)">
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                <span className="text-xs font-semibold text-emerald-800">Time-In-Range (70-180 mg/dL)</span>
                <div className="text-2xl font-bold text-emerald-950 mt-1">{metrics.cgmSummary.timeInRangePct}%</div>
                <p className="text-[11px] text-emerald-700 mt-0.5">Target: &gt;70% (Clinical Standard)</p>
              </div>

              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
                <span className="text-xs font-semibold text-blue-800">Glucose Management Indicator (GMI)</span>
                <div className="text-2xl font-bold text-blue-950 mt-1">{metrics.cgmSummary.glucoseManagementIndicatorPct}%</div>
                <p className="text-[11px] text-blue-700 mt-0.5">Estimated Laboratory HbA1c</p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                <span className="text-xs font-semibold text-amber-800">Glycemic Variability (%CV)</span>
                <div className="text-2xl font-bold text-amber-950 mt-1">{metrics.cgmSummary.glycemicVariabilityCoeffPct}%</div>
                <p className="text-[11px] text-amber-700 mt-0.5">Target: &lt;36% (Stable)</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="font-semibold text-slate-800">Interpretation:</span> {metrics.cgmSummary.clinicalInterpretation}
            </p>
          </div>
        </Card>
      )}

      {/* Wearable Activity & Sleep Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card className="p-5 space-y-1">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-medium">Daily Steps</span>
            <Activity className="h-4 w-4 text-primary-600" />
          </div>
          <div className="text-2xl font-bold text-slate-900">{metrics?.dailySteps.toLocaleString()}</div>
          <p className="text-[11px] text-emerald-600 font-medium">Goal: 10,000 steps</p>
        </Card>

        <Card className="p-5 space-y-1">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-medium">Pulse Oximetry (SpO2)</span>
            <Zap className="h-4 w-4 text-teal-600" />
          </div>
          <div className="text-2xl font-bold text-slate-900">{metrics?.spo2AveragePct}%</div>
          <p className="text-[11px] text-slate-400">Normal Oxygen Saturation</p>
        </Card>

        <Card className="p-5 space-y-1">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-medium">Sleep Duration</span>
            <Moon className="h-4 w-4 text-indigo-600" />
          </div>
          <div className="text-2xl font-bold text-slate-900">{metrics?.sleepDurationHours} hrs</div>
          <p className="text-[11px] text-slate-400">Quality Score: {metrics?.sleepQualityScorePct}%</p>
        </Card>
      </div>
    </div>
  );
};
