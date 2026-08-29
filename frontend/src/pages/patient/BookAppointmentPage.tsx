import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, CheckCircle2, AlertCircle, Stethoscope, Star, DollarSign } from 'lucide-react';
import { doctorService } from '../../services/doctor.service';
import { appointmentService } from '../../services/appointment.service';
import { Doctor } from '../../types';
import { Select } from '../../components/common/Select';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { Alert } from '../../components/common/Alert';

export const BookAppointmentPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [selectedDoctorId, setSelectedDoctorId] = useState(searchParams.get('doctorId') || '');
  const [selectedDate, setSelectedDate] = useState(
    new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  );
  const [slots, setSlots] = useState<Array<{ startTime: string; endTime: string; isBooked: boolean }>>([]);
  const [selectedSlot, setSelectedSlot] = useState<{ startTime: string; endTime: string } | null>(null);
  const [reason, setReason] = useState('');
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    doctorService.searchDoctors({ limit: 50 }).then((res) => {
      setDoctors(res.data || []);
      if (!selectedDoctorId && res.data && res.data.length > 0) {
        setSelectedDoctorId(res.data[0].id);
      }
    });
  }, []);

  const selectedDoctor = doctors.find((d) => d.id === selectedDoctorId);

  useEffect(() => {
    if (selectedDoctorId && selectedDate) {
      setLoadingSlots(true);
      setSelectedSlot(null);
      setErrorMessage(null);
      appointmentService
        .getAvailableSlots(selectedDoctorId, selectedDate)
        .then((res) => {
          if (res.data?.isAvailable) {
            setSlots(res.data.slots || []);
          } else {
            setSlots([]);
            setErrorMessage(res.data?.reason || 'Doctor is not available on this date.');
          }
        })
        .catch((err) => {
          setSlots([]);
          setErrorMessage('Unable to load time slots.');
        })
        .finally(() => setLoadingSlots(false));
    }
  }, [selectedDoctorId, selectedDate]);

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) {
      setErrorMessage('Please select a time slot.');
      return;
    }
    setSubmitting(true);
    setErrorMessage(null);
    try {
      await appointmentService.bookAppointment({
        doctorId: selectedDoctorId,
        appointmentDate: selectedDate,
        startTime: selectedSlot.startTime,
        endTime: selectedSlot.endTime,
        reason: reason || 'Routine Consultation',
      });
      setSuccessMessage('Appointment booked successfully! Redirecting to appointments list...');
      setTimeout(() => {
        navigate('/patient/appointments');
      }, 1500);
    } catch (err: any) {
      setErrorMessage(err.response?.data?.message || 'Failed to book appointment.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Book an Appointment</h1>
        <p className="text-xs text-slate-500 mt-1">
          Select your specialist, choose an available time slot, and confirm your clinical consultation.
        </p>
      </div>

      {errorMessage && <Alert variant="danger" onDismiss={() => setErrorMessage(null)}>{errorMessage}</Alert>}
      {successMessage && <Alert variant="success">{successMessage}</Alert>}

      <form onSubmit={handleBooking} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Doctor & Date Selector */}
          <Card className="md:col-span-6 space-y-4">
            <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">
              1. Select Healthcare Specialist
            </h3>

            <Select
              label="Specialist Physician"
              options={doctors.map((d) => ({
                value: d.id,
                label: `Dr. ${d.firstName} ${d.lastName} (${d.specialization?.name || 'General'}) - $${Number(d.consultationFee).toFixed(0)}`,
              }))}
              value={selectedDoctorId}
              onChange={(e) => setSelectedDoctorId(e.target.value)}
            />

            {selectedDoctor && (
              <div className="bg-slate-50 rounded-xl p-4 space-y-2 text-xs border border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900">Dr. {selectedDoctor.firstName} {selectedDoctor.lastName}</span>
                  <span className="flex items-center gap-1 text-amber-600 font-semibold">
                    <Star className="h-3 w-3 fill-amber-400" /> {selectedDoctor.rating}
                  </span>
                </div>
                <p className="text-slate-500">{selectedDoctor.qualifications}</p>
                <div className="flex justify-between text-slate-600 pt-1">
                  <span>Consultation Fee:</span>
                  <span className="font-bold text-emerald-600">${Number(selectedDoctor.consultationFee).toFixed(2)}</span>
                </div>
              </div>
            )}

            <Input
              label="Consultation Date"
              type="date"
              min={new Date().toISOString().split('T')[0]}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />

            <Input
              label="Reason for Visit / Symptoms"
              placeholder="e.g. Annual wellness checkup, persistent cough, follow up"
              required
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </Card>

          {/* Time Slot Picker */}
          <Card className="md:col-span-6 space-y-4">
            <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">
              2. Available Time Slots ({selectedDate})
            </h3>

            {loadingSlots ? (
              <div className="text-center py-12 text-slate-400 text-xs">
                Checking real-time doctor availability...
              </div>
            ) : slots.length === 0 ? (
              <div className="text-center py-12 text-slate-400 text-xs">
                No slots available on this date.
              </div>
            ) : (
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-2.5 max-h-64 overflow-y-auto p-1">
                  {slots.map((slot) => (
                    <button
                      key={slot.startTime}
                      type="button"
                      disabled={slot.isBooked}
                      onClick={() => setSelectedSlot(slot)}
                      className={`px-2.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                        slot.isBooked
                          ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed line-through'
                          : selectedSlot?.startTime === slot.startTime
                          ? 'bg-primary-600 text-white border-primary-600 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-primary-400 hover:bg-primary-50'
                      }`}
                    >
                      {slot.startTime}
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100 pt-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-primary-600" /> Selected
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-slate-200" /> Available
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-slate-400" /> Booked
                  </div>
                </div>
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              className="w-full mt-4"
              size="lg"
              disabled={!selectedSlot || submitting}
              isLoading={submitting}
            >
              Confirm Appointment Booking
            </Button>
          </Card>
        </div>
      </form>
    </div>
  );
};
