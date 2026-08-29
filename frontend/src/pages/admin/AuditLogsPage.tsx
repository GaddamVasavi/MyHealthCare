import React, { useEffect, useState } from 'react';
import { ShieldAlert, Search, Filter } from 'lucide-react';
import { analyticsService } from '../../services/analytics.service';
import { Card } from '../../components/common/Card';
import { Input } from '../../components/common/Input';
import { Select } from '../../components/common/Select';
import { Badge } from '../../components/common/Badge';
import { Pagination } from '../../components/common/Pagination';

export const AuditLogsPage: React.FC = () => {
  const [logs, setLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionFilter, setActionFilter] = useState('');
  const [entityFilter, setEntityFilter] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalLogs, setTotalLogs] = useState(0);

  const fetchLogs = async () => {
    setLoading(true);
    try {
      const res = await analyticsService.getAuditLogs({
        action: actionFilter || undefined,
        entity: entityFilter || undefined,
        page,
        limit: 15,
      });
      setLogs(res.data || []);
      if (res.pagination) {
        setTotalPages(res.pagination.totalPages);
        setTotalLogs(res.pagination.total);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, [actionFilter, entityFilter, page]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Security & Medical Record Audit Logs</h1>
          <p className="text-xs text-slate-500 mt-1">Immutable HIPAA-aligned chronological log of medical records access, creation, and user logins.</p>
        </div>
        <div className="flex items-center gap-3">
          <Select
            options={[
              { value: '', label: 'All Actions' },
              { value: 'CREATE', label: 'CREATE' },
              { value: 'READ', label: 'READ' },
              { value: 'UPDATE', label: 'UPDATE' },
              { value: 'DELETE', label: 'DELETE' },
              { value: 'LOGIN', label: 'LOGIN' },
            ]}
            value={actionFilter}
            onChange={(e) => setActionFilter(e.target.value)}
          />
          <Select
            options={[
              { value: '', label: 'All Entities' },
              { value: 'MedicalRecord', label: 'MedicalRecord' },
              { value: 'PatientMedicalHistory', label: 'PatientMedicalHistory' },
              { value: 'Patient', label: 'Patient' },
              { value: 'Appointment', label: 'Appointment' },
              { value: 'User', label: 'User' },
            ]}
            value={entityFilter}
            onChange={(e) => setEntityFilter(e.target.value)}
          />
        </div>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Timestamp</th>
                <th className="py-3 px-4">Action</th>
                <th className="py-3 px-4">Entity</th>
                <th className="py-3 px-4">User</th>
                <th className="py-3 px-4">Audit Details</th>
                <th className="py-3 px-4">IP Address</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 text-slate-500 whitespace-nowrap">
                    {new Date(log.createdAt).toLocaleString()}
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant={log.action === 'CREATE' ? 'success' : log.action === 'READ' ? 'info' : 'warning'} size="sm">
                      {log.action}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 font-semibold text-slate-800">{log.entity}</td>
                  <td className="py-3 px-4 text-slate-600 font-sans">{log.user?.email || 'Anonymous / API'}</td>
                  <td className="py-3 px-4 text-slate-700 font-sans max-w-xs truncate" title={log.details}>
                    {log.details}
                  </td>
                  <td className="py-3 px-4 text-slate-400">{log.ipAddress || '127.0.0.1'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          totalItems={totalLogs}
          onPageChange={setPage}
        />
      </Card>
    </div>
  );
};
