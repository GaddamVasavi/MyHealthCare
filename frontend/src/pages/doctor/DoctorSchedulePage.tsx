import React, { useEffect, useState } from 'react';
import { Clock, Calendar, Plus, Trash2, CheckCircle2 } from 'lucide-react';
import { doctorService } from '../../services/doctor.service';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Select } from '../../components/common/Select';
import { Alert } from '../../components/common/Alert';

export const DoctorSchedulePage: React.FC = () => {
  const [availabilities, setAvailabilities] = useState<any[]>([]);
  const [leaves, setLeaves] = useState<any[]>([]);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const [leaveForm, setLeaveForm] = useState({ startDate: '', endDate: '', reason: '' });

  const daysList = [
    { key: 'MONDAY', label: 'Monday' },
    { key: 'TUESDAY', label: 'Tuesday' },
    { key: 'WEDNESDAY', label: 'Wednesday' },
    { key: 'THURSDAY', label: 'Thursday' },
    { key: 'FRIDAY', label: 'Friday' },
    { key: 'SATURDAY', label: 'Saturday' },
    { key: 'SUNDAY', label: 'Sunday' },
  ];

  const [scheduleState, setScheduleState] = useState<Record<string, { active: boolean; startTime: string; endTime: string; duration: number }>>({
    MONDAY: { active: true, startTime: '09:00', endTime: '17:00', duration: 30 },
    TUESDAY: { active: true, startTime: '09:00', endTime: '17:00', duration: 30 },
    WEDNESDAY: { active: true, startTime: '09:00', endTime: '17:00', duration: 30 },
    THURSDAY: { active: true, startTime: '09:00', endTime: '17:00', duration: 30 },
    FRIDAY: { active: true, startTime: '09:00', endTime: '17:00', duration: 30 },
    SATURDAY: { active: false, startTime: '09:00', endTime: '13:00', duration: 30 },
    SUNDAY: { active: false, startTime: '09:00', endTime: '13:00', duration: 30 },
  });

  const loadSchedule = async () => {
    try {
      const leavesRes = await doctorService.getDoctorLeaves();
      setLeaves(leavesRes.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadSchedule();
  }, []);

  const handleSaveWorkingHours = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = Object.entries(scheduleState)
        .filter(([_, conf]) => conf.active)
        .map(([day, conf]) => ({
          dayOfWeek: day,
          startTime: conf.startTime,
          endTime: conf.endTime,
          slotDurationMinutes: conf.duration,
          isActive: true,
        }));

      await doctorService.setAvailability({ availabilities: payload });
      setMessage('Working hours & appointment slot durations updated successfully!');
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const handleAddLeave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leaveForm.startDate || !leaveForm.endDate) return;
    try {
      await doctorService.addDoctorLeave(leaveForm);
      setMessage('Scheduled leave recorded.');
      setLeaveForm({ startDate: '', endDate: '', reason: '' });
      loadSchedule();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteLeave = async (id: string) => {
    try {
      await doctorService.deleteDoctorLeave(id);
      loadSchedule();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Doctor Working Hours & Leave Schedule</h1>
        <p className="text-xs text-slate-500 mt-1">Configure consultation time windows, slot intervals, and planned out-of-office dates.</p>
      </div>

      {message && <Alert variant="success" onDismiss={() => setMessage(null)}>{message}</Alert>}

      {/* Working Hours Configuration */}
      <form onSubmit={handleSaveWorkingHours}>
        <Card title="Weekly Consultation Schedule">
          <div className="space-y-4">
            {daysList.map((d) => {
              const conf = scheduleState[d.key];
              return (
                <div key={d.key} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/50">
                  <div className="flex items-center gap-3 w-36">
                    <input
                      type="checkbox"
                      id={`check-${d.key}`}
                      checked={conf.active}
                      onChange={(e) => setScheduleState({ ...scheduleState, [d.key]: { ...conf, active: e.target.checked } })}
                      className="rounded border-slate-300 text-primary-600 focus:ring-primary-500"
                    />
                    <label htmlFor={`check-${d.key}`} className="font-semibold text-xs text-slate-900 cursor-pointer">
                      {d.label}
                    </label>
                  </div>

                  {conf.active ? (
                    <div className="flex items-center gap-3 flex-1">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <span>Start:</span>
                        <input
                          type="time"
                          value={conf.startTime}
                          onChange={(e) => setScheduleState({ ...scheduleState, [d.key]: { ...conf, startTime: e.target.value } })}
                          className="border border-slate-300 rounded px-2 py-1 text-xs"
                        />
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <span>End:</span>
                        <input
                          type="time"
                          value={conf.endTime}
                          onChange={(e) => setScheduleState({ ...scheduleState, [d.key]: { ...conf, endTime: e.target.value } })}
                          className="border border-slate-300 rounded px-2 py-1 text-xs"
                        />
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <span>Slot:</span>
                        <select
                          value={conf.duration}
                          onChange={(e) => setScheduleState({ ...scheduleState, [d.key]: { ...conf, duration: parseInt(e.target.value, 10) } })}
                          className="border border-slate-300 rounded px-2 py-1 text-xs"
                        >
                          <option value={15}>15 min</option>
                          <option value={20}>20 min</option>
                          <option value={30}>30 min</option>
                          <option value={45}>45 min</option>
                          <option value={60}>60 min</option>
                        </select>
                      </div>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-400 italic">Day Off / Unavailable</span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex justify-end pt-4 border-t border-slate-100 mt-4">
            <Button type="submit" variant="primary" size="md" isLoading={saving}>
              Save Availability Rules
            </Button>
          </div>
        </Card>
      </form>

      {/* Leave Management */}
      <Card title="Scheduled Doctor Leaves">
        <div className="space-y-6">
          <form onSubmit={handleAddLeave} className="grid grid-cols-1 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <Input
              label="Start Date"
              type="date"
              required
              value={leaveForm.startDate}
              onChange={(e) => setLeaveForm({ ...leaveForm, startDate: e.target.value })}
            />
            <Input
              label="End Date"
              type="date"
              required
              value={leaveForm.endDate}
              onChange={(e) => setLeaveForm({ ...leaveForm, endDate: e.target.value })}
            />
            <Input
              label="Reason (optional)"
              placeholder="e.g. Medical Conference"
              value={leaveForm.reason}
              onChange={(e) => setLeaveForm({ ...leaveForm, reason: e.target.value })}
            />
            <div className="flex items-end">
              <Button type="submit" variant="outline" className="w-full">
                + Schedule Leave
              </Button>
            </div>
          </form>

          <div className="space-y-2">
            {leaves.length === 0 ? (
              <p className="text-xs text-slate-400">No scheduled leaves on record.</p>
            ) : (
              leaves.map((l) => (
                <div key={l.id} className="flex items-center justify-between p-3 rounded-xl border border-slate-100 text-xs">
                  <div>
                    <span className="font-semibold text-slate-900">
                      {new Date(l.startDate).toLocaleDateString()} - {new Date(l.endDate).toLocaleDateString()}
                    </span>
                    {l.reason && <p className="text-slate-500">{l.reason}</p>}
                  </div>
                  <button onClick={() => handleDeleteLeave(l.id)} className="text-rose-500 hover:text-rose-700">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};
