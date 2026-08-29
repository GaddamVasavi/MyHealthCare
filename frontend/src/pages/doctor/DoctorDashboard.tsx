import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { doctorService } from '../../services/doctor.service';
import { appointmentService } from '../../services/appointment.service';
import {
  Calendar,
  Users,
  Clock,
  FlaskConical,
  CheckCircle,
  Stethoscope,
  ChevronRight,
  FileText,
  Pill,
} from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { CardSkeleton } from '../../components/common/LoadingSkeleton';

export const DoctorDashboard: React.FC = () => {
  const { user, doctor } = useSelector((state: RootState) => state.auth);
  const [stats, setStats] = useState<any>(null);
  const [todayAppts, setTodayAppts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [statsRes, apptRes] = await Promise.all([
          doctorService.getDoctorDashboardStats(),
          appointmentService.listAppointments({
            date: new Date().toISOString().split('T')[0],
          }),
        ]);
        setStats(statsRes.data);
        setTodayAppts(apptRes.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) return <div className="text-center py-12 text-slate-400 text-xs">Loading doctor dashboard...</div>;

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-gradient-to-r from-slate-900 via-slate-800 to-primary-950 rounded-3xl p-8 text-white shadow-xl">
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/20">
            Physician Clinical Portal
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Dr. {doctor?.firstName || user?.email?.split('@')[0]} {doctor?.lastName || ''}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Specialization: {doctor?.specialization?.name || 'Practitioner'} | License: {doctor?.licenseNumber || 'MED-VERIFIED'}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/doctor/schedule">
            <Button variant="secondary" size="sm" leftIcon={<Clock className="h-4 w-4" />}>
              Configure Working Hours
            </Button>
          </Link>
          <Link to="/doctor/clinical-notes">
            <Button variant="primary" size="sm" leftIcon={<FileText className="h-4 w-4" />}>
              New EMR Clinical Note
            </Button>
          </Link>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-5 space-y-1">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-medium">Today's Appointments</span>
            <Calendar className="h-4 w-4 text-primary-600" />
          </div>
          <div className="text-2xl font-bold text-slate-900">{stats?.todayCount || todayAppts.length}</div>
          <p className="text-[11px] text-slate-400">Scheduled consultations today</p>
        </Card>

        <Card className="p-5 space-y-1">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-medium">Upcoming Schedule</span>
            <Clock className="h-4 w-4 text-teal-600" />
          </div>
          <div className="text-2xl font-bold text-slate-900">{stats?.upcomingCount || 0}</div>
          <p className="text-[11px] text-slate-400">Future bookings on calendar</p>
        </Card>

        <Card className="p-5 space-y-1">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-medium">Completed Encounters</span>
            <CheckCircle className="h-4 w-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-bold text-slate-900">{stats?.completedCount || 0}</div>
          <p className="text-[11px] text-slate-400">Total consultations finished</p>
        </Card>

        <Card className="p-5 space-y-1">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-medium">Pending Diagnostic Labs</span>
            <FlaskConical className="h-4 w-4 text-amber-600" />
          </div>
          <div className="text-2xl font-bold text-slate-900">{stats?.pendingLabOrders || 0}</div>
          <p className="text-[11px] text-slate-400">Awaiting lab result reports</p>
        </Card>
      </div>

      {/* Today's Queue */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary-600" /> Today's Patient Consultation Queue
          </h3>
          <Link to="/doctor/appointments" className="text-xs font-semibold text-primary-600 hover:underline">
            View All
          </Link>
        </div>

        {todayAppts.length === 0 ? (
          <Card className="p-12 text-center text-xs text-slate-400">
            No consultations scheduled for today.
          </Card>
        ) : (
          <div className="space-y-3">
            {todayAppts.map((appt) => (
              <Card key={appt.id} className="p-4 hover:border-primary-300 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-slate-900">
                        {appt.patient?.firstName} {appt.patient?.lastName}
                      </span>
                      <span className="text-xs text-slate-400">({appt.patient?.phone})</span>
                      <Badge variant="primary" size="sm">{appt.status}</Badge>
                    </div>
                    <p className="text-xs text-slate-500">
                      Slot: <span className="font-semibold text-slate-700">{appt.startTime} - {appt.endTime}</span> | Reason: {appt.reason || 'General Checkup'}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link to={`/doctor/clinical-notes?patientId=${appt.patientId}&appointmentId=${appt.id}`}>
                      <Button size="sm" variant="primary" leftIcon={<FileText className="h-3.5 w-3.5" />}>
                        Clinical Assessment
                      </Button>
                    </Link>
                    <Link to={`/doctor/prescriptions?patientId=${appt.patientId}`}>
                      <Button size="sm" variant="outline" leftIcon={<Pill className="h-3.5 w-3.5" />}>
                        Prescribe
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
