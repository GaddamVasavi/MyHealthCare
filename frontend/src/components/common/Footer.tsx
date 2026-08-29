import React from 'react';
import { HeartPulse, Shield, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white">
                <HeartPulse className="h-5 w-5" />
              </div>
              <span className="text-base font-bold text-slate-900">MyHealthCare</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              An integrated, secure personalized digital healthcare platform connecting patients, licensed physicians, electronic health records, and diagnostics.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3">Quick Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><Link to="/" className="hover:text-primary-600">Home</Link></li>
              <li><Link to="/doctors" className="hover:text-primary-600">Specialist Directory</Link></li>
              <li><Link to="/services" className="hover:text-primary-600">Clinical Specialties</Link></li>
              <li><Link to="/about" className="hover:text-primary-600">About Our Network</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3">Patient Portals</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><Link to="/login" className="hover:text-primary-600">Patient Sign In</Link></li>
              <li><Link to="/register" className="hover:text-primary-600">Create Patient Account</Link></li>
              <li><Link to="/patient/book-appointment" className="hover:text-primary-600">Online Appointment</Link></li>
              <li><Link to="/patient/records" className="hover:text-primary-600">Electronic Health Records</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3">Support & Emergency</h4>
            <div className="space-y-2 text-xs text-slate-600">
              <p className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-primary-600" /> +1 (800) 555-CARE</p>
              <p className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-primary-600" /> support@myhealthcare.internal</p>
              <p className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-primary-600" /> 100 Healthcare Way, Suite 400</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} MyHealthCare. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-600 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-600 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-600 cursor-pointer">HIPAA Compliance Notice</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
