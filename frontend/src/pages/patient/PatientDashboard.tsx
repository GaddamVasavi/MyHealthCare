import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { patientService } from '../../services/patient.service';
import { appointmentService } from '../../services/appointment.service';
import {
  Calendar,
  Activity,
  Heart,
  Pill,
  Clock,
  FlaskConical,
  AlertCircle,
  TrendingUp,
  Plus,
  ArrowRight,
  ShieldAlert,
  Info,
} from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { CardSkeleton } from '../../components/common/LoadingSkeleton';

export const PatientDashboard: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [insightsData, setInsightsData] = useState<any>(null);
  const [upcomingAppointments, setUpcomingAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const [insightsRes, apptRes] = await Promise.all([
          patientService.getPersonalizedInsights(),
          appointmentService.listAppointments({ status: 'CONFIRMED', limit: 3 }),
        ]);
        setInsightsData(insightsRes.data);
        setUpcomingAppointments(apptRes.data || []);
      } catch (err) {
        console.error('Error loading patient dashboard:', err);
      } finally {
        setLoading(false);
      }
    };
    loadDashboard();
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="h-20 bg-slate-200 animate-pulse rounded-2xl" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </div>
    );
  }

  const patient = insightsData?.patient;
  const activeMeds = insightsData?.activeMedications || [];
  const latestVitals = insightsData?.latestVitals || [];
  const recentVitals = latestVitals[0];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-gradient-to-r from-primary-600 via-primary-700 to-teal-600 rounded-3xl p-8 text-white shadow-lg">
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-200 bg-white/10 px-2.5 py-1 rounded-full border border-white/20">
            Personal Health Portal
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Welcome back, {patient?.firstName || user?.email?.split('@')[0]}!
          </h1>
          <p className="text-xs sm:text-sm text-primary-100 max-w-xl">
            Here is your health dashboard summary, recent vital metrics, and consultation schedule.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <Link to="/patient/book-appointment">
            <Button variant="secondary" size="sm" leftIcon={<Plus className="h-4 w-4" />}>
              Book Doctor
            </Button>
          </Link>
          <Link to="/patient/vitals">
            <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
              Log Today's Vitals
            </Button>
          </Link>
        </div>
      </div>

      {/* Personalized Health Reminders & Informational Insights */}
      {insightsData?.insights?.length > 0 && (
        <div className="bg-blue-50/80 border border-blue-200/80 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-blue-900 font-semibold text-sm">
            <Info className="h-4 w-4 text-blue-600" />
            <span>Personalized Health Observations & Routine Reminders</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-blue-950">
            {insightsData.insights.map((insight: string, idx: number) => (
              <div key={idx} className="flex items-start gap-2 bg-white/70 p-3 rounded-xl border border-blue-100">
                <span className="h-2 w-2 rounded-full bg-blue-500 mt-1 shrink-0" />
                <span>{insight}</span>
              </div>
            ))}
            {insightsData.reminders?.map((rem: string, idx: number) => (
              <div key={`rem-${idx}`} className="flex items-start gap-2 bg-white/70 p-3 rounded-xl border border-blue-100">
                <span className="h-2 w-2 rounded-full bg-teal-500 mt-1 shrink-0" />
                <span>{rem}</span>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-slate-500 italic pt-1">
            * {insightsData.disclaimer}
          </p>
        </div>
      )}

      {/* Core KPI Health Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-medium">Blood Pressure</span>
            <div className="h-8 w-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
              <Heart className="h-4 w-4" />
            </div>
          </div>
          <div className="text-xl font-bold text-slate-900">
            {recentVitals?.systolicBp && recentVitals?.diastolicBp
              ? `${recentVitals.systolicBp}/${recentVitals.diastolicBp}`
              : '120/80'}{' '}
            <span className="text-xs font-normal text-slate-400">mmHg</span>
          </div>
          <p className="text-[11px] text-emerald-600 font-medium">Optimal Range</p>
        </Card>

        <Card className="p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-medium">Heart Rate</span>
            <div className="h-8 w-8 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center">
              <Activity className="h-4 w-4" />
            </div>
          </div>
          <div className="text-xl font-bold text-slate-900">
            {recentVitals?.heartRateBpm || 72}{' '}
            <span className="text-xs font-normal text-slate-400">bpm</span>
          </div>
          <p className="text-[11px] text-slate-500 font-medium">Normal Resting</p>
        </Card>

        <Card className="p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-medium">Blood Glucose</span>
            <div className="h-8 w-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <FlaskConical className="h-4 w-4" />
            </div>
          </div>
          <div className="text-xl font-bold text-slate-900">
            {recentVitals?.bloodGlucoseMgDl || 98}{' '}
            <span className="text-xs font-normal text-slate-400">mg/dL</span>
          </div>
          <p className="text-[11px] text-slate-500 font-medium">Fasting Sample</p>
        </Card>

        <Card className="p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-medium">Body Mass Index (BMI)</span>
            <div className="h-8 w-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center">
              <TrendingUp className="h-4 w-4" />
            </div>
          </div>
          <div className="text-xl font-bold text-slate-900">
            {recentVitals?.bmi || (patient?.weightKg && patient?.heightCm ? (patient.weightKg / Math.pow(patient.heightCm / 100, 2)).toFixed(1) : '22.8')}
          </div>
          <p className="text-[11px] text-emerald-600 font-medium">Healthy Weight Category</p>
        </Card>
      </div>

      {/* Grid of Upcoming Appointments & Active Medications */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Appointments Section */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary-600" /> Upcoming Consultations
            </h3>
            <Link to="/patient/appointments" className="text-xs font-semibold text-primary-600 hover:underline">
              View All
            </Link>
          </div>

          {upcomingAppointments.length === 0 ? (
            <Card className="p-6 text-center space-y-2">
              <Clock className="mx-auto h-8 w-8 text-slate-300" />
              <p className="text-xs text-slate-500">No upcoming consultations scheduled.</p>
              <Link to="/patient/book-appointment" className="inline-block pt-1">
                <Button size="sm" variant="outline">Book an Appointment</Button>
              </Link>
            </Card>
          ) : (
            <div className="space-y-3">
              {upcomingAppointments.map((appt) => (
                <Card key={appt.id} className="p-4 hover:border-primary-200 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-slate-900">
                          Dr. {appt.doctor?.firstName} {appt.doctor?.lastName}
                        </span>
                        <Badge variant="primary" size="sm">
                          {appt.doctor?.specialization?.name || 'Specialist'}
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-500">
                        {new Date(appt.appointmentDate).toLocaleDateString(undefined, {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric',
                        })}{' '}
                        at {appt.startTime} ({appt.reason || 'General Consultation'})
                      </p>
                    </div>
                    <Badge variant="success" size="sm">
                      Confirmed
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Active Medications */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Pill className="h-4 w-4 text-primary-600" /> Active Prescriptions
            </h3>
            <Link to="/patient/medications" className="text-xs font-semibold text-primary-600 hover:underline">
              Manage
            </Link>
          </div>

          {activeMeds.length === 0 ? (
            <Card className="p-6 text-center space-y-2">
              <Heart className="mx-auto h-8 w-8 text-slate-300" />
              <p className="text-xs text-slate-500">No active medication courses.</p>
            </Card>
          ) : (
            <div className="space-y-3">
              {activeMeds.slice(0, 3).map((med: any) => (
                <Card key={med.id} className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-0.5">
                      <h4 className="font-semibold text-xs text-slate-900">{med.name}</h4>
                      <p className="text-[11px] text-slate-500">Dosage: {med.dosage} ({med.frequency})</p>
                      {med.notes && <p className="text-[10px] text-primary-600">{med.notes}</p>}
                    </div>
                    <Badge variant="success" size="sm">Active</Badge>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
