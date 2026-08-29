import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Stethoscope, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { appointmentService } from '../../services/appointment.service';
import { Appointment } from '../../types';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { Modal } from '../../components/common/Modal';
import { Input } from '../../components/common/Input';
import { Alert } from '../../components/common/Alert';
import { APPOINTMENT_STATUS_COLORS } from '../../constants';

export const MyAppointmentsPage: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAppt, setSelectedAppt] = useState<Appointment | null>(null);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [cancelReason, setCancelReason] = useState('');
  const [actionLoading, setActionLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'danger'; text: string } | null>(null);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const res = await appointmentService.listAppointments({ limit: 50 });
      setAppointments(res.data || []);
    } catch (err) {
      console.error('Failed to fetch appointments:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleCancelAppointment = async () => {
    if (!selectedAppt) return;
    setActionLoading(true);
    try {
      await appointmentService.cancelAppointment(selectedAppt.id, cancelReason || 'Cancelled by patient');
      setMessage({ type: 'success', text: 'Appointment cancelled successfully.' });
      setIsCancelModalOpen(false);
      fetchAppointments();
    } catch (err: any) {
      setMessage({ type: 'danger', text: err.response?.data?.message || 'Failed to cancel appointment.' });
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">My Appointments</h1>
          <p className="text-xs text-slate-500 mt-1">
            Track and manage your upcoming consultations and past medical visits.
          </p>
        </div>
        <Link to="/patient/book-appointment">
          <Button size="sm" variant="primary">
            + Book New Appointment
          </Button>
        </Link>
      </div>

      {message && (
        <Alert variant={message.type} onDismiss={() => setMessage(null)}>
          {message.text}
        </Alert>
      )}

      {loading ? (
        <div className="text-center py-12 text-slate-400 text-xs">Loading appointments...</div>
      ) : appointments.length === 0 ? (
        <Card className="p-12 text-center space-y-3">
          <Calendar className="mx-auto h-10 w-10 text-slate-300" />
          <h3 className="font-semibold text-slate-700">No appointments scheduled</h3>
          <p className="text-xs text-slate-400">Book a consultation with one of our licensed healthcare specialists.</p>
          <Link to="/patient/book-appointment" className="inline-block pt-2">
            <Button size="sm">Book an Appointment</Button>
          </Link>
        </Card>
      ) : (
        <div className="space-y-4">
          {appointments.map((appt) => {
            const statusConfig = APPOINTMENT_STATUS_COLORS[appt.status] || {
              bg: 'bg-slate-50',
              text: 'text-slate-700',
              border: 'border-slate-200',
            };
            const isUpcoming = ['REQUESTED', 'CONFIRMED', 'RESCHEDULED'].includes(appt.status);

            return (
              <Card key={appt.id} className="p-5 hover:border-slate-300 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-sm text-slate-900">
                        Dr. {appt.doctor?.firstName} {appt.doctor?.lastName}
                      </span>
                      <Badge variant="primary" size="sm">
                        {appt.doctor?.specialization?.name || 'General'}
                      </Badge>
                      <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${statusConfig.bg} ${statusConfig.text} ${statusConfig.border}`}>
                        {appt.status}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-slate-400" />
                        {new Date(appt.appointmentDate).toLocaleDateString(undefined, {
                          weekday: 'short',
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-slate-400" />
                        {appt.startTime} - {appt.endTime}
                      </span>
                      <span className="font-medium text-slate-700">Ref: {appt.appointmentNumber}</span>
                    </div>

                    {appt.reason && (
                      <p className="text-xs text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100 max-w-xl">
                        <span className="font-semibold text-slate-700">Reason:</span> {appt.reason}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                    {isUpcoming && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-rose-600 border-rose-200 hover:bg-rose-50"
                        onClick={() => {
                          setSelectedAppt(appt);
                          setIsCancelModalOpen(true);
                        }}
                      >
                        Cancel
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {/* Cancellation Modal */}
      <Modal
        isOpen={isCancelModalOpen}
        onClose={() => setIsCancelModalOpen(false)}
        title="Cancel Appointment"
        subtitle={`Dr. ${selectedAppt?.doctor?.firstName} ${selectedAppt?.doctor?.lastName}`}
      >
        <div className="space-y-4">
          <p className="text-xs text-slate-600">
            Are you sure you want to cancel this scheduled consultation? The doctor will be notified immediately.
          </p>
          <Input
            label="Cancellation Reason"
            placeholder="e.g. Schedule conflict, feeling better, other commitments"
            value={cancelReason}
            onChange={(e) => setCancelReason(e.target.value)}
          />
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="ghost" size="sm" onClick={() => setIsCancelModalOpen(false)}>
              Keep Appointment
            </Button>
            <Button
              variant="danger"
              size="sm"
              isLoading={actionLoading}
              onClick={handleCancelAppointment}
            >
              Confirm Cancellation
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
