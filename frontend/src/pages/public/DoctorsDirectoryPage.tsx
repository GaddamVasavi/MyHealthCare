import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Star, MapPin, Award, DollarSign, Stethoscope } from 'lucide-react';
import { doctorService } from '../../services/doctor.service';
import { Doctor, Specialization } from '../../types';
import { Input } from '../../components/common/Input';
import { Select } from '../../components/common/Select';
import { Button } from '../../components/common/Button';
import { Pagination } from '../../components/common/Pagination';
import { CardSkeleton } from '../../components/common/LoadingSkeleton';

export const DoctorsDirectoryPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [specializations, setSpecializations] = useState<Specialization[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedSpec, setSelectedSpec] = useState(searchParams.get('specializationId') || '');
  const [sortBy, setSortBy] = useState(searchParams.get('sortBy') || 'rating');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalDoctors, setTotalDoctors] = useState(0);

  useEffect(() => {
    doctorService.getSpecializations().then((res) => {
      setSpecializations(res.data || []);
    });
  }, []);

  const fetchDoctors = async () => {
    setLoading(true);
    try {
      const res = await doctorService.searchDoctors({
        search: searchTerm || undefined,
        specializationId: selectedSpec || undefined,
        sortBy,
        page: currentPage,
        limit: 8,
      });
      setDoctors(res.data || []);
      if (res.pagination) {
        setTotalPages(res.pagination.totalPages);
        setTotalDoctors(res.pagination.total);
      }
    } catch (err) {
      console.error('Failed to search doctors:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, [selectedSpec, sortBy, currentPage]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchDoctors();
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Find Healthcare Specialists</h1>
        <p className="text-sm text-slate-500 mt-1">
          Browse verified doctors across {specializations.length} medical specialties, check consultation fees, and schedule an appointment.
        </p>
      </div>

      {/* Filter Toolbar */}
      <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-12 gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="sm:col-span-5">
          <Input
            placeholder="Search doctor by name, clinic, or qualification..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            leftIcon={<Search className="h-4 w-4" />}
          />
        </div>
        <div className="sm:col-span-3">
          <Select
            options={[
              { value: '', label: 'All Specializations' },
              ...specializations.map((s) => ({ value: s.id, label: s.name })),
            ]}
            value={selectedSpec}
            onChange={(e) => {
              setSelectedSpec(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
        <div className="sm:col-span-2">
          <Select
            options={[
              { value: 'rating', label: 'Highest Rated' },
              { value: 'experience', label: 'Most Experienced' },
              { value: 'fee', label: 'Consultation Fee' },
            ]}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          />
        </div>
        <div className="sm:col-span-2">
          <Button type="submit" variant="primary" className="w-full h-full">
            Search
          </Button>
        </div>
      </form>

      {/* Doctor Cards Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((n) => (
            <CardSkeleton key={n} />
          ))}
        </div>
      ) : doctors.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
          <Stethoscope className="mx-auto h-12 w-12 text-slate-300 mb-3" />
          <h3 className="text-lg font-semibold text-slate-700">No doctors matched your search criteria</h3>
          <p className="text-xs text-slate-400 mt-1">Try modifying your specialization filter or search terms.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-primary-300 transition-all overflow-hidden p-6"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="h-12 w-12 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-lg">
                    {doctor.firstName[0]}{doctor.lastName[0]}
                  </div>
                  <span className="flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                    <Star className="h-3 w-3 fill-amber-400" /> {doctor.rating.toFixed(1)}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-base text-slate-900">
                    Dr. {doctor.firstName} {doctor.lastName}
                  </h3>
                  <p className="text-xs text-primary-600 font-semibold mt-0.5">
                    {doctor.specialization?.name || 'General Practitioner'}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{doctor.qualifications}</p>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                  <p className="flex items-center gap-1.5">
                    <Award className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                    <span>{doctor.experienceYears} Years Experience</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <DollarSign className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-slate-800">${Number(doctor.consultationFee).toFixed(2)} Consultation Fee</span>
                  </p>
                  {doctor.clinicName && (
                    <p className="flex items-center gap-1.5 line-clamp-1">
                      <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                      <span>{doctor.clinicName}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100">
                <Link to={`/patient/book-appointment?doctorId=${doctor.id}`} className="block">
                  <Button variant="primary" size="sm" className="w-full">
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalDoctors}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};
