import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Calendar, ShieldCheck, Activity, Users, Star, ArrowRight, Stethoscope, Clock, Award } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { doctorService } from '../../services/doctor.service';
import { Doctor, Specialization } from '../../types';

export const HomePage: React.FC = () => {
  const [featuredDoctors, setFeaturedDoctors] = useState<Doctor[]>([]);
  const [specializations, setSpecializations] = useState<Specialization[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [docsRes, specsRes] = await Promise.all([
          doctorService.searchDoctors({ limit: 4, sortBy: 'rating' }),
          doctorService.getSpecializations(),
        ]);
        setFeaturedDoctors(docsRes.data || []);
        setSpecializations(specsRes.data || []);
      } catch (err) {
        console.error('Error fetching homepage data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/70 via-white to-slate-50 pt-16 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-100/80 text-primary-800 text-xs font-semibold">
                <HeartPulse className="h-4 w-4 text-primary-600" />
                Modern Clinical Healthcare Network
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Personalized Healthcare, <span className="text-primary-600">Reimagined.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Connect seamlessly with certified medical specialists, manage electronic medical records, schedule consultations in real-time, track diagnostic vitals, and coordinate prescriptions in one unified platform.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link to="/doctors">
                  <Button size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                    Find a Doctor & Book
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="outline" size="lg">
                    Join as Patient
                  </Button>
                </Link>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200/80">
                <div>
                  <div className="text-2xl font-bold text-slate-900">100+</div>
                  <div className="text-xs text-slate-500">Board Specialists</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">99.8%</div>
                  <div className="text-xs text-slate-500">Patient Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">24/7</div>
                  <div className="text-xs text-slate-500">EMR Access</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md rounded-2xl bg-white p-6 shadow-xl border border-slate-100">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                    <div className="h-12 w-12 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600">
                      <Stethoscope className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Dr. Arthur Smith, MD</h4>
                      <p className="text-xs text-primary-600 font-medium">Chief of Cardiology</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs text-slate-600">
                    <div className="flex justify-between py-1.5 border-b border-slate-50">
                      <span className="text-slate-400">Next Slot:</span>
                      <span className="font-semibold text-emerald-600">Today, 10:00 AM</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-50">
                      <span className="text-slate-400">Experience:</span>
                      <span className="font-semibold text-slate-700">16+ Years</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-400">Rating:</span>
                      <span className="flex items-center gap-1 font-semibold text-amber-600">
                        <Star className="h-3.5 w-3.5 fill-amber-400" /> 4.9 (84 reviews)
                      </span>
                    </div>
                  </div>
                  <Link to="/doctors">
                    <Button variant="primary" className="w-full mt-2" size="sm">
                      Check Schedule & Book
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Explore Medical Specialties</h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Find specialized healthcare providers across clinical disciplines with verified certifications and experience.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {specializations.map((spec) => (
            <Link
              key={spec.id}
              to={`/doctors?specializationId=${spec.id}`}
              className="group p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-primary-300 hover:shadow-md transition-all duration-200"
            >
              <div className="h-12 w-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-slate-900 group-hover:text-primary-600 text-sm mb-1">
                {spec.name}
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                {spec.description || 'Specialized diagnostic and consultation care.'}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Core Platform Pillars */}
      <section className="bg-slate-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold">End-to-End Healthcare Infrastructure</h2>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">
              Engineered with modern HIPAA-aligned security protocols, real-time doctor availability checks, and integrated electronic health records.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-primary-500/20 text-primary-400 flex items-center justify-center">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg text-white">Double-Booking Prevention</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Strict database level transactional locks guarantee zero overlapping consultation slots and instantaneous rescheduling.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg text-white">Audited Medical Privacy</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Strict RBAC isolation ensures patients only see authorized records, and every clinical note retrieval creates an immutable audit trail.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <Activity className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg text-white">Personalized Health Analytics</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Continuous vitals tracking (BP, Blood Glucose, BMI trends) paired with informative health reminders and lab report synchronizations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
