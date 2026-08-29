import React from 'react';
import { NavLink } from 'react-router-dom';
import { clsx } from 'clsx';
import {
  LayoutDashboard,
  Calendar,
  User,
  Heart,
  FileText,
  Activity,
  Pill,
  Clock,
  FlaskConical,
  CreditCard,
  ShieldCheck,
  FolderOpen,
  Bell,
  Settings,
  Users,
  Stethoscope,
  BarChart3,
  ShieldAlert,
} from 'lucide-react';
import { UserRole } from '../../types';

interface NavItem {
  to: string;
  label: string;
  icon: React.ReactNode;
}

export const Sidebar: React.FC<{ role: UserRole }> = ({ role }) => {
  const patientNav: NavItem[] = [
    { to: '/patient/dashboard', label: 'Dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
    { to: '/patient/appointments', label: 'My Appointments', icon: <Calendar className="h-4 w-4" /> },
    { to: '/patient/book-appointment', label: 'Book Appointment', icon: <Clock className="h-4 w-4" /> },
    { to: '/patient/records', label: 'Medical Records', icon: <FileText className="h-4 w-4" /> },
    { to: '/patient/vitals', label: 'Vital Signs & Trends', icon: <Activity className="h-4 w-4" /> },
    { to: '/patient/prescriptions', label: 'Prescriptions', icon: <Pill className="h-4 w-4" /> },
    { to: '/patient/medications', label: 'Medications & Routine', icon: <Heart className="h-4 w-4" /> },
    { to: '/patient/lab-reports', label: 'Laboratory Reports', icon: <FlaskConical className="h-4 w-4" /> },
    { to: '/patient/documents', label: 'Medical Documents', icon: <FolderOpen className="h-4 w-4" /> },
    { to: '/patient/billing', label: 'Billing & Payments', icon: <CreditCard className="h-4 w-4" /> },
    { to: '/patient/insurance', label: 'Health Insurance', icon: <ShieldCheck className="h-4 w-4" /> },
    { to: '/patient/profile', label: 'Personal Profile', icon: <User className="h-4 w-4" /> },
    { to: '/patient/health-profile', label: 'Health Background', icon: <Heart className="h-4 w-4" /> },
    { to: '/patient/notifications', label: 'Notifications', icon: <Bell className="h-4 w-4" /> },
  ];

  const doctorNav: NavItem[] = [
    { to: '/doctor/dashboard', label: 'Dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
    { to: '/doctor/schedule', label: 'My Schedule & Hours', icon: <Clock className="h-4 w-4" /> },
    { to: '/doctor/appointments', label: 'Appointments Queue', icon: <Calendar className="h-4 w-4" /> },
    { to: '/doctor/patients', label: 'Assigned Patients', icon: <Users className="h-4 w-4" /> },
    { to: '/doctor/clinical-notes', label: 'Clinical Records', icon: <FileText className="h-4 w-4" /> },
    { to: '/doctor/prescriptions', label: 'Prescription Writer', icon: <Pill className="h-4 w-4" /> },
    { to: '/doctor/lab-orders', label: 'Laboratory Orders', icon: <FlaskConical className="h-4 w-4" /> },
    { to: '/doctor/profile', label: 'Doctor Profile', icon: <Stethoscope className="h-4 w-4" /> },
  ];

  const adminNav: NavItem[] = [
    { to: '/admin/dashboard', label: 'Overview Dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
    { to: '/admin/users', label: 'User Directory', icon: <Users className="h-4 w-4" /> },
    { to: '/admin/doctors', label: 'Doctors & Specialties', icon: <Stethoscope className="h-4 w-4" /> },
    { to: '/admin/patients', label: 'Patient Management', icon: <Heart className="h-4 w-4" /> },
    { to: '/admin/appointments', label: 'Appointments Oversight', icon: <Calendar className="h-4 w-4" /> },
    { to: '/admin/billing', label: 'Invoices & Payments', icon: <CreditCard className="h-4 w-4" /> },
    { to: '/admin/reports', label: 'Analytics & Reports', icon: <BarChart3 className="h-4 w-4" /> },
    { to: '/admin/audit-logs', label: 'HIPAA Audit Trail', icon: <ShieldAlert className="h-4 w-4" /> },
  ];

  const currentNav = role === 'PATIENT' ? patientNav : role === 'DOCTOR' ? doctorNav : adminNav;

  return (
    <aside className="w-64 shrink-0 border-r border-slate-200/80 bg-white min-h-[calc(100vh-4rem)] p-4">
      <div className="space-y-1">
        {currentNav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              clsx(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150',
                isActive
                  ? 'bg-primary-50 text-primary-700 font-semibold border-r-2 border-primary-600'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              )
            }
          >
            <span className="shrink-0">{item.icon}</span>
            <span className="truncate">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
};
