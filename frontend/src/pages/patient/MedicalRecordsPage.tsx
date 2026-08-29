import React, { useEffect, useState } from 'react';
import { FileText, Calendar, Stethoscope, AlertCircle, Clock, ShieldCheck } from 'lucide-react';
import { patientService } from '../../services/patient.service';
import { MedicalRecord } from '../../types';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';

export const MedicalRecordsPage: React.FC = () => {
  const [historyData, setHistoryData] = useState<{ records: MedicalRecord[] } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    patientService.getMyMedicalRecords().then((res) => {
      setHistoryData(res.data);
      setLoading(false);
    });
  }, []);

  const records = historyData?.records || [];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Electronic Medical Records (EMR)</h1>
        <p className="text-xs text-slate-500 mt-1">
          Historical record of clinical assessments, primary diagnoses, doctor notes, and treatment plans.
        </p>
      </div>

      <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 text-xs px-4 py-2.5 rounded-xl border border-emerald-200">
        <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
        <span>All medical record accesses and clinical edits are logged with HIPAA-aligned immutable audit tracking.</span>
      </div>

      {loading ? (
        <div className="text-center py-12 text-slate-400 text-xs">Loading medical records...</div>
      ) : records.length === 0 ? (
        <Card className="p-12 text-center space-y-2">
          <FileText className="mx-auto h-10 w-10 text-slate-300" />
          <h3 className="font-semibold text-slate-700">No medical records on file</h3>
          <p className="text-xs text-slate-400">Clinical notes recorded by consulting doctors will appear here.</p>
        </Card>
      ) : (
        <div className="space-y-6">
          {records.map((record) => (
            <Card key={record.id} className="p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 gap-2">
                <div>
                  <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
                    {record.recordNumber}
                  </span>
                  <h3 className="font-bold text-base text-slate-900">
                    Consultation with Dr. {record.doctor?.firstName} {record.doctor?.lastName}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Specialty: {record.doctor?.specialization?.name || 'General Medicine'}
                  </p>
                </div>
                <div className="text-xs text-slate-500 flex items-center gap-1.5 self-start sm:self-auto">
                  <Calendar className="h-3.5 w-3.5 text-slate-400" />
                  {new Date(record.visitDate).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-semibold text-slate-700 block mb-1">Chief Complaint:</span>
                  <p className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-slate-700 leading-relaxed">
                    {record.chiefComplaint}
                  </p>
                </div>

                {record.assessment && (
                  <div>
                    <span className="font-semibold text-slate-700 block mb-1">Clinical Assessment:</span>
                    <p className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-slate-700 leading-relaxed">
                      {record.assessment}
                    </p>
                  </div>
                )}

                {record.treatmentPlan && (
                  <div>
                    <span className="font-semibold text-slate-700 block mb-1">Treatment Plan:</span>
                    <p className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-slate-700 leading-relaxed">
                      {record.treatmentPlan}
                    </p>
                  </div>
                )}

                {record.diagnoses && record.diagnoses.length > 0 && (
                  <div>
                    <span className="font-semibold text-slate-700 block mb-1.5">Recorded Diagnoses:</span>
                    <div className="flex flex-wrap gap-2">
                      {record.diagnoses.map((d, idx) => (
                        <Badge key={idx} variant="info" size="sm">
                          {d.code ? `[${d.code}] ` : ''}{d.description}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
