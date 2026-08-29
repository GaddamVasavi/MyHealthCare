import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import {
  Users,
  Calendar,
  DollarSign,
  Heart,
  Stethoscope,
  Activity,
  ShieldCheck,
  FlaskConical,
  TrendingUp,
} from 'lucide-react';
import { analyticsService } from '../../services/analytics.service';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';

const COLORS = ['#0ea5e9', '#0d9488', '#f59e0b', '#e11d48', '#8b5cf6', '#64748b'];

export const AdminDashboard: React.FC = () => {
  const [overview, setOverview] = useState<any>(null);
  const [charts, setCharts] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      analyticsService.getAdminOverview(),
      analyticsService.getAdminCharts(),
    ]).then(([overviewRes, chartsRes]) => {
      setOverview(overviewRes.data?.stats);
      setCharts(chartsRes.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="text-center py-12 text-slate-400 text-xs">Loading admin analytics...</div>;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-slate-900 rounded-3xl p-8 text-white shadow-xl">
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary-400 bg-white/10 px-2.5 py-1 rounded-full">
            Executive Admin Control
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">System Performance & Health Metrics</h1>
          <p className="text-xs text-slate-400">Aggregated real-time metrics across clinical departments, revenue, and patient operations.</p>
        </div>
        <div className="flex gap-3">
          <Link to="/admin/reports">
            <Button variant="primary" size="sm">
              Export PDF / Reports
            </Button>
          </Link>
          <Link to="/admin/audit-logs">
            <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20">
              HIPAA Audit Logs
            </Button>
          </Link>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-5 space-y-1">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-medium">Total Registered Patients</span>
            <Users className="h-4 w-4 text-primary-600" />
          </div>
          <div className="text-2xl font-bold text-slate-900">{overview?.totalPatients || 0}</div>
          <p className="text-[11px] text-emerald-600 font-medium">+12% from last month</p>
        </Card>

        <Card className="p-5 space-y-1">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-medium">Certified Physicians</span>
            <Stethoscope className="h-4 w-4 text-teal-600" />
          </div>
          <div className="text-2xl font-bold text-slate-900">{overview?.totalDoctors || 0}</div>
          <p className="text-[11px] text-slate-400">Across 8 Medical Specialties</p>
        </Card>

        <Card className="p-5 space-y-1">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-medium">Total Revenue Collected</span>
            <DollarSign className="h-4 w-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-bold text-slate-900">${Number(overview?.totalRevenue || 0).toLocaleString()}</div>
          <p className="text-[11px] text-slate-400">Consultation & Diagnostic billing</p>
        </Card>

        <Card className="p-5 space-y-1">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-medium">Consultations Booked</span>
            <Calendar className="h-4 w-4 text-indigo-600" />
          </div>
          <div className="text-2xl font-bold text-slate-900">{overview?.totalAppointments || 0}</div>
          <p className="text-[11px] text-slate-400">{overview?.completedAppointments || 0} Completed encounters</p>
        </Card>
      </div>

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Revenue & Appointments Trend */}
        <Card title="Monthly Revenue & Consultation Trends (Past 6 Months)">
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={charts?.monthsData || []} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="appointments" fill="#0ea5e9" name="Appointments" radius={[4, 4, 0, 0]} />
                <Bar dataKey="revenue" fill="#0d9488" name="Revenue ($)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Doctor Specialization Distribution */}
        <Card title="Doctor Specialization Distribution">
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={charts?.specializationData || []}
                  dataKey="doctorCount"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  label={(entry) => `${entry.name} (${entry.doctorCount})`}
                >
                  {(charts?.specializationData || []).map((_: any, index: number) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};
