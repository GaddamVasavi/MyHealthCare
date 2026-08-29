import React, { useEffect, useState } from 'react';
import { Pill, Calendar, Stethoscope, Download, Clock } from 'lucide-react';
import { patientService } from '../../services/patient.service';
import { Prescription, Medication } from '../../types';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';

export const PrescriptionsPage: React.FC = () => {
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    patientService.getMyPrescriptions().then((res) => {
      setPrescriptions(res.data || []);
      setLoading(false);
    });
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Prescriptions</h1>
        <p className="text-xs text-slate-500 mt-1">
          Review digital prescriptions issued by your consulting healthcare providers.
        </p>
      </div>

      {loading ? (
        <div className="text-center py-12 text-slate-400 text-xs">Loading prescriptions...</div>
      ) : prescriptions.length === 0 ? (
        <Card className="p-12 text-center space-y-2">
          <Pill className="mx-auto h-10 w-10 text-slate-300" />
          <h3 className="font-semibold text-slate-700">No prescriptions on file</h3>
          <p className="text-xs text-slate-400">Prescriptions provided after doctor consultations will appear here.</p>
        </Card>
      ) : (
        <div className="space-y-6">
          {prescriptions.map((rx) => (
            <Card key={rx.id} className="p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 gap-2">
                <div>
                  <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">{rx.prescriptionNumber}</span>
                  <h3 className="font-bold text-base text-slate-900">
                    Prescribed by Dr. {rx.doctor?.firstName} {rx.doctor?.lastName}
                  </h3>
                  <p className="text-xs text-slate-500">{rx.doctor?.specialization?.name || 'Practitioner'}</p>
                </div>
                <div className="text-xs text-slate-500 flex items-center gap-1.5 self-start sm:self-auto">
                  <Calendar className="h-3.5 w-3.5 text-slate-400" />
                  Issued: {new Date(rx.issuedDate).toLocaleDateString()}
                </div>
              </div>

              {rx.generalAdvice && (
                <div className="bg-primary-50/70 p-3 rounded-xl border border-primary-100 text-xs text-primary-900">
                  <span className="font-semibold">General Advice:</span> {rx.generalAdvice}
                </div>
              )}

              {/* Items Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-600">
                  <thead className="bg-slate-50 text-slate-700 font-semibold border-y border-slate-200">
                    <tr>
                      <th className="py-2.5 px-3">Medicine & Form</th>
                      <th className="py-2.5 px-3">Dosage</th>
                      <th className="py-2.5 px-3">Frequency</th>
                      <th className="py-2.5 px-3">Duration</th>
                      <th className="py-2.5 px-3">Instructions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {rx.items?.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50/50">
                        <td className="py-2.5 px-3 font-semibold text-slate-900">
                          {item.medicineName} <span className="text-[10px] text-slate-400 font-normal">({item.form})</span>
                        </td>
                        <td className="py-2.5 px-3">{item.dosage}</td>
                        <td className="py-2.5 px-3">{item.frequency}</td>
                        <td className="py-2.5 px-3">{item.durationDays} Days</td>
                        <td className="py-2.5 px-3 text-slate-500">{item.instructions || 'As directed'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export const MedicationsPage: React.FC = () => {
  const [medications, setMedications] = useState<Medication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    patientService.getMyMedications().then((res) => {
      setMedications(res.data || []);
      setLoading(false);
    });
  }, []);

  const handleToggleStatus = async (id: string, currentStatus: string) => {
    const nextStatus = currentStatus === 'ACTIVE' ? 'COMPLETED' : 'ACTIVE';
    try {
      await patientService.updateMedicationStatus(id, nextStatus);
      setMedications(medications.map((m) => (m.id === id ? { ...m, status: nextStatus as any } : m)));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Active Medications & Adherence</h1>
        <p className="text-xs text-slate-500 mt-1">
          Keep track of your current prescription routines and completed medication courses.
        </p>
      </div>

      {loading ? (
        <div className="text-center py-12 text-slate-400 text-xs">Loading medications...</div>
      ) : medications.length === 0 ? (
        <Card className="p-12 text-center space-y-2">
          <Pill className="mx-auto h-10 w-10 text-slate-300" />
          <h3 className="font-semibold text-slate-700">No active medications</h3>
          <p className="text-xs text-slate-400">Medications added from prescriptions will be tracked here.</p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {medications.map((med) => (
            <Card key={med.id} className="p-5 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-sm text-slate-900">{med.name}</h3>
                  <p className="text-xs text-primary-600 font-medium">Dosage: {med.dosage}</p>
                </div>
                <Badge variant={med.status === 'ACTIVE' ? 'success' : 'neutral'} size="sm">
                  {med.status}
                </Badge>
              </div>

              <div className="space-y-1 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p><span className="font-semibold text-slate-700">Frequency:</span> {med.frequency}</p>
                {med.durationDays && <p><span className="font-semibold text-slate-700">Course Duration:</span> {med.durationDays} days</p>}
                {med.prescribedBy && <p><span className="font-semibold text-slate-700">Prescribed By:</span> {med.prescribedBy}</p>}
                {med.notes && <p><span className="font-semibold text-slate-700">Instructions:</span> {med.notes}</p>}
              </div>

              <div className="flex justify-end pt-1">
                <Button
                  size="sm"
                  variant={med.status === 'ACTIVE' ? 'outline' : 'secondary'}
                  onClick={() => handleToggleStatus(med.id, med.status)}
                >
                  {med.status === 'ACTIVE' ? 'Mark Course Completed' : 'Mark Active'}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
