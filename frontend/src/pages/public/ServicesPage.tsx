import React from 'react';
import { Activity, Heart, Shield, FlaskConical, Pill, Calendar, CreditCard, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/common/Button';

export const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Calendar className="h-6 w-6 text-primary-600" />,
      title: 'Online Doctor Appointments',
      desc: 'Real-time schedule browsing, instant slot confirmation, and seamless rescheduling with double-booking prevention.',
    },
    {
      icon: <Activity className="h-6 w-6 text-teal-600" />,
      title: 'Electronic Medical Records (EMR)',
      desc: 'Centralized medical history, clinical diagnoses, treatment plans, and visit summaries securely accessible 24/7.',
    },
    {
      icon: <Heart className="h-6 w-6 text-rose-600" />,
      title: 'Vital Signs & Health Trends',
      desc: 'Interactive health metric charting covering Blood Pressure, Heart Rate, Glucose levels, BMI, and Weight trends.',
    },
    {
      icon: <Pill className="h-6 w-6 text-indigo-600" />,
      title: 'Digital Prescriptions & Routine Tracking',
      desc: 'Physician-issued digital prescriptions with dosage schedules, meal instructions, and medication adherence trackers.',
    },
    {
      icon: <FlaskConical className="h-6 w-6 text-amber-600" />,
      title: 'Diagnostic Laboratory Management',
      desc: 'Diagnostic order placement, sample tracking, pathologist-verified test results, and downloadable reports.',
    },
    {
      icon: <CreditCard className="h-6 w-6 text-emerald-600" />,
      title: 'Transparent Billing & Insurance Claims',
      desc: 'Itemized digital invoices, secure multi-channel payment options, insurance policy integration, and claim filing.',
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Our Healthcare Services</h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Comprehensive digital healthcare features engineered for patients, healthcare providers, and clinical staff.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
              {s.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-primary-600 to-teal-600 rounded-3xl p-10 text-white text-center space-y-4 shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold">Ready to Experience Personalized Digital Healthcare?</h2>
        <p className="text-sm opacity-90 max-w-xl mx-auto">
          Create your patient profile today to consult certified doctors, track vitals, and access electronic medical records.
        </p>
        <div className="pt-2">
          <Link to="/register">
            <Button variant="secondary" size="lg">
              Get Started Free
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
