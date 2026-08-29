import React, { useEffect, useState } from 'react';
import { Download, FileSpreadsheet, BarChart3, Users, Calendar, DollarSign, Stethoscope } from 'lucide-react';
import { analyticsService } from '../../services/analytics.service';
import { appointmentService } from '../../services/appointment.service';
import { billingService } from '../../services/billing.service';
import { doctorService } from '../../services/doctor.service';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';

export const ReportsAnalyticsPage: React.FC = () => {
  const [downloading, setDownloading] = useState<string | null>(null);

  const handleExport = (reportName: string) => {
    setDownloading(reportName);
    setTimeout(() => {
      // Create mock CSV download
      const csvContent = `data:text/csv;charset=utf-8,Report,${reportName}\nGeneratedAt,${new Date().toISOString()}\nStatus,Exported\n`;
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', `${reportName.toLowerCase().replace(/\s+/g, '_')}_${Date.now()}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloading(null);
    }, 800);
  };

  const reportsList = [
    { title: 'Patient Demographics & Registrations Report', desc: 'Summary of patient registrations, age distributions, and gender statistics.' },
    { title: 'Doctor Clinical Encounters & Schedule Report', desc: 'Consultation volume per specialist, average ratings, and slot utilization.' },
    { title: 'Comprehensive Revenue & Invoicing Report', desc: 'Detailed breakdown of consultation fee collections, laboratory billings, and payment methods.' },
    { title: 'Diagnostic Laboratory Utilization Report', desc: 'Volume of hematology, biochemistry, and radiology orders with abnormal flag rates.' },
    { title: 'System Security & EMR Access Audit Report', desc: 'Chronological export of record read/write operations and user sessions.' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Clinical & Financial Reports</h1>
        <p className="text-xs text-slate-500 mt-1">Export structured healthcare reports for regulatory compliance and administrative insights.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reportsList.map((r, idx) => (
          <Card key={idx} className="p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary-600">
                <FileSpreadsheet className="h-5 w-5" />
                <h3 className="font-bold text-sm text-slate-900">{r.title}</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{r.desc}</p>
            </div>
            <Button
              size="sm"
              variant="outline"
              className="w-full"
              isLoading={downloading === r.title}
              onClick={() => handleExport(r.title)}
              leftIcon={<Download className="h-4 w-4" />}
            >
              Export CSV Dataset
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export const AppointmentManagementPage: React.FC = () => {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    appointmentService.listAppointments({ limit: 50 }).then((res) => {
      setAppointments(res.data || []);
      setLoading(false);
    });
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Appointments Oversight</h1>
        <p className="text-xs text-slate-500 mt-1">System-wide view of all scheduled and historical consultations.</p>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Ref #</th>
                <th className="py-3 px-4">Patient</th>
                <th className="py-3 px-4">Doctor</th>
                <th className="py-3 px-4">Date & Time</th>
                <th className="py-3 px-4">Fee</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {appointments.map((a) => (
                <tr key={a.id} className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-mono font-bold text-slate-900">{a.appointmentNumber}</td>
                  <td className="py-3 px-4">{a.patient?.firstName} {a.patient?.lastName}</td>
                  <td className="py-3 px-4">Dr. {a.doctor?.firstName} {a.doctor?.lastName} ({a.doctor?.specialization?.name})</td>
                  <td className="py-3 px-4">{new Date(a.appointmentDate).toLocaleDateString()} {a.startTime}</td>
                  <td className="py-3 px-4 font-semibold text-slate-800">${Number(a.consultationFee).toFixed(2)}</td>
                  <td className="py-3 px-4">
                    <Badge variant={a.status === 'COMPLETED' ? 'success' : a.status === 'CANCELLED' ? 'danger' : 'primary'} size="sm">
                      {a.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export const BillingManagementPage: React.FC = () => {
  const [invoices, setInvoices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    billingService.listInvoices({ limit: 50 }).then((res) => {
      setInvoices(res.data || []);
      setLoading(false);
    });
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Invoices & Financial Management</h1>
        <p className="text-xs text-slate-500 mt-1">Audit customer billing invoices, payment statuses, and refunds.</p>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Invoice #</th>
                <th className="py-3 px-4">Patient</th>
                <th className="py-3 px-4">Total Amount</th>
                <th className="py-3 px-4">Paid</th>
                <th className="py-3 px-4">Due</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Due Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-mono font-bold text-slate-900">{inv.invoiceNumber}</td>
                  <td className="py-3 px-4">{inv.patient?.firstName} {inv.patient?.lastName}</td>
                  <td className="py-3 px-4 font-semibold text-slate-900">${Number(inv.totalAmount).toFixed(2)}</td>
                  <td className="py-3 px-4 text-emerald-600 font-semibold">${Number(inv.paidAmount).toFixed(2)}</td>
                  <td className="py-3 px-4 text-rose-600 font-semibold">${Number(inv.dueAmount).toFixed(2)}</td>
                  <td className="py-3 px-4">
                    <Badge variant={inv.status === 'PAID' ? 'success' : inv.status === 'CANCELLED' ? 'danger' : 'warning'} size="sm">
                      {inv.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-slate-400">{new Date(inv.dueDate).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
