import React from 'react';
import { HeartPulse, ShieldCheck, Users, Award, CheckCircle } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold">
          About MyHealthCare
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
          Pioneering Patient-Centric Digital Clinical Care
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          MyHealthCare connects patients, licensed practitioners, clinical labs, and billing workflows into a single HIPAA-aligned digital experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="h-10 w-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center">
            <HeartPulse className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Personalized Insights</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Patient health profiles and vitals tracking trends provide informational awareness and actionable reminders.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="h-10 w-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Data Security & Privacy</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Strict role-based access control, cryptographic password hashing, rotating JWT session management, and audited medical record access.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="h-10 w-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
            <Award className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Verified Specialists</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            All doctors in our network are board-verified with transparent licensing records, consultation rates, and patient ratings.
          </p>
        </div>
      </div>
    </div>
  );
};
