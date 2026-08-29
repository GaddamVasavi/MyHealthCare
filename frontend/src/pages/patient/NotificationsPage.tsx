import React, { useEffect, useState } from 'react';
import { Bell, CheckCheck, Calendar, Pill, FlaskConical, CreditCard, Info } from 'lucide-react';
import { api } from '../../services/api';
import { Notification } from '../../types';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';

export const NotificationsPage: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchNotifications = async () => {
    setLoading(true);
    try {
      const res = await api.get('/notifications');
      setNotifications(res.data.data?.notifications || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const handleMarkAllRead = async () => {
    try {
      await api.patch('/notifications/read-all');
      setNotifications(notifications.map((n) => ({ ...n, isRead: true })));
    } catch (err) {
      console.error(err);
    }
  };

  const handleMarkOne = async (id: string) => {
    try {
      await api.patch(`/notifications/${id}/read`);
      setNotifications(notifications.map((n) => (n.id === id ? { ...n, isRead: true } : n)));
    } catch (err) {
      console.error(err);
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'APPOINTMENT':
        return <Calendar className="h-4 w-4 text-primary-600" />;
      case 'PRESCRIPTION':
        return <Pill className="h-4 w-4 text-emerald-600" />;
      case 'LAB_RESULT':
        return <FlaskConical className="h-4 w-4 text-amber-600" />;
      case 'BILLING':
        return <CreditCard className="h-4 w-4 text-teal-600" />;
      default:
        return <Info className="h-4 w-4 text-blue-600" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Notifications & Alerts</h1>
          <p className="text-xs text-slate-500 mt-1">Review system updates, appointment reminders, and lab result alerts.</p>
        </div>
        <Button size="sm" variant="outline" leftIcon={<CheckCheck className="h-4 w-4" />} onClick={handleMarkAllRead}>
          Mark All as Read
        </Button>
      </div>

      {loading ? (
        <div className="text-center py-12 text-slate-400 text-xs">Loading notifications...</div>
      ) : notifications.length === 0 ? (
        <Card className="p-12 text-center space-y-2">
          <Bell className="mx-auto h-10 w-10 text-slate-300" />
          <h3 className="font-semibold text-slate-700">No notifications</h3>
          <p className="text-xs text-slate-400">You are completely up to date.</p>
        </Card>
      ) : (
        <div className="space-y-3">
          {notifications.map((n) => (
            <div
              key={n.id}
              onClick={() => !n.isRead && handleMarkOne(n.id)}
              className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-4 ${
                n.isRead ? 'bg-white border-slate-200/80 text-slate-700' : 'bg-primary-50/50 border-primary-200 text-slate-900 shadow-sm'
              }`}
            >
              <div className="p-2 rounded-xl bg-white border border-slate-100 shadow-sm shrink-0">
                {getIcon(n.type)}
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-xs">{n.title}</h4>
                  <span className="text-[11px] text-slate-400">{new Date(n.createdAt).toLocaleDateString()}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{n.message}</p>
              </div>
              {!n.isRead && <span className="h-2 w-2 rounded-full bg-primary-600 mt-1 shrink-0" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
