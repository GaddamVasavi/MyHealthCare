import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, FileText, Pill, FlaskConical, CheckCircle2 } from 'lucide-react';
import { appointmentService } from '../../services/appointment.service';
import { Appointment } from '../../types';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { Select } from '../../components/common/Select';
import { APPOINTMENT_STATUS_COLORS } from '../../constants';

export const DoctorAppointmentsPage: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('');

  const fetchAppts = async () => {
    setLoading(true);
    try {
      const res = await appointmentService.listAppointments({
        status: statusFilter || undefined,
        limit: 50,
      });
      setAppointments(res.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppts();
  }, [statusFilter]);

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    try {
      await appointmentService.updateStatus(id, newStatus);
      fetchAppts();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Patient Appointment Queue</h1>
          <p className="text-xs text-slate-500 mt-1">Review scheduled patient visits, update consultation statuses, and open clinical records.</p>
        </div>
        <div className="w-48">
          <Select
            options={[
              { value: '', label: 'All Statuses' },
              { value: 'CONFIRMED', label: 'Confirmed' },
              { value: 'IN_PROGRESS', label: 'In Progress' },
              { value: 'COMPLETED', label: 'Completed' },
              { value: 'CANCELLED', label: 'Cancelled' },
            ]}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12 text-slate-400 text-xs">Loading appointments...</div>
      ) : appointments.length === 0 ? (
        <Card className="p-12 text-center space-y-2">
          <Calendar className="mx-auto h-10 w-10 text-slate-300" />
          <h3 className="font-semibold text-slate-700">No appointments found</h3>
        </Card>
      ) : (
        <div className="space-y-3">
          {appointments.map((appt) => {
            const statusConfig = APPOINTMENT_STATUS_COLORS[appt.status] || {
              bg: 'bg-slate-50',
              text: 'text-slate-700',
              border: 'border-slate-200',
            };

            return (
              <Card key={appt.id} className="p-5 hover:border-slate-300 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-sm text-slate-900">
                        {appt.patient?.firstName} {appt.patient?.lastName}
                      </span>
                      <span className="text-xs text-slate-500">Phone: {appt.patient?.phone}</span>
                      <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${statusConfig.bg} ${statusConfig.text} ${statusConfig.border}`}>
                        {appt.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-slate-400" />
                        {new Date(appt.appointmentDate).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-slate-400" />
                        {appt.startTime} - {appt.endTime}
                      </span>
                    </div>

                    {appt.reason && (
                      <p className="text-xs text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100 max-w-xl">
                        <span className="font-semibold">Reason:</span> {appt.reason}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 self-end md:self-center shrink-0">
                    <Link to={`/doctor/clinical-notes?patientId=${appt.patientId}&appointmentId=${appt.id}`}>
                      <Button size="sm" variant="primary" leftIcon={<FileText className="h-3.5 w-3.5" />}>
                        Clinical Assessment
                      </Button>
                    </Link>

                    {appt.status !== 'COMPLETED' && (
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleUpdateStatus(appt.id, 'COMPLETED')}
                      >
                        Mark Done
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};
