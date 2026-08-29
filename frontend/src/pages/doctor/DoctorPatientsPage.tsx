import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, FileText, Pill, Activity, Phone, Search } from 'lucide-react';
import { doctorService } from '../../services/doctor.service';
import { Patient } from '../../types';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Badge } from '../../components/common/Badge';

export const DoctorPatientsPage: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    doctorService.getAssignedPatients().then((res) => {
      setPatients(res.data || []);
      setLoading(false);
    });
  }, []);

  const filtered = patients.filter((p) =>
    `${p.firstName} ${p.lastName} ${p.phone}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Assigned Patients</h1>
          <p className="text-xs text-slate-500 mt-1">Review medical backgrounds and clinical histories of patients you consult.</p>
        </div>
        <div className="w-64">
          <Input
            placeholder="Search patients..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            leftIcon={<Search className="h-4 w-4" />}
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12 text-slate-400 text-xs">Loading patients...</div>
      ) : filtered.length === 0 ? (
        <Card className="p-12 text-center text-xs text-slate-400">
          No patients found.
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((pat) => (
            <Card key={pat.id} className="p-5 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">
                      {pat.firstName[0]}{pat.lastName[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{pat.firstName} {pat.lastName}</h4>
                      <p className="text-xs text-slate-500">{pat.gender}, Age {new Date().getFullYear() - new Date(pat.dateOfBirth).getFullYear()}</p>
                    </div>
                  </div>
                  <Badge variant="primary" size="sm">{pat.bloodGroup}</Badge>
                </div>

                <div className="text-xs text-slate-600 space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <p className="flex items-center gap-1.5"><Phone className="h-3 w-3 text-slate-400" /> {pat.phone}</p>
                  {pat.healthProfile?.chronicDiseases && (
                    <p className="text-amber-800 font-medium">History: {pat.healthProfile.chronicDiseases}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                <Link to={`/doctor/clinical-notes?patientId=${pat.id}`} className="block">
                  <Button size="sm" variant="primary" className="w-full text-xs">
                    New Note
                  </Button>
                </Link>
                <Link to={`/doctor/prescriptions?patientId=${pat.id}`} className="block">
                  <Button size="sm" variant="outline" className="w-full text-xs">
                    Prescribe
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
