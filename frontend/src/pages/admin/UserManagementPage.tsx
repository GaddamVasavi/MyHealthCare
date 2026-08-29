import React, { useEffect, useState } from 'react';
import { Users, Search, ShieldCheck, Trash2, CheckCircle, XCircle } from 'lucide-react';
import { analyticsService } from '../../services/analytics.service';
import { Card } from '../../components/common/Card';
import { Input } from '../../components/common/Input';
import { Select } from '../../components/common/Select';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { Pagination } from '../../components/common/Pagination';

export const UserManagementPage: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await analyticsService.listUsers({
        search: search || undefined,
        role: roleFilter || undefined,
        page,
        limit: 10,
      });
      setUsers(res.data || []);
      if (res.pagination) {
        setTotalPages(res.pagination.totalPages);
        setTotalUsers(res.pagination.total);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [roleFilter, page]);

  const handleToggleStatus = async (id: string, current: boolean) => {
    try {
      await analyticsService.toggleUserStatus(id, !current);
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to deactivate and remove this user?')) return;
    try {
      await analyticsService.deleteUser(id);
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">User Administration</h1>
          <p className="text-xs text-slate-500 mt-1">Manage accounts, toggle role permissions, and view login histories.</p>
        </div>
        <div className="flex items-center gap-3">
          <Input
            placeholder="Search email or name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            leftIcon={<Search className="h-4 w-4" />}
          />
          <Select
            options={[
              { value: '', label: 'All Roles' },
              { value: 'PATIENT', label: 'Patients' },
              { value: 'DOCTOR', label: 'Doctors' },
              { value: 'ADMIN', label: 'Admins' },
            ]}
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
          />
        </div>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">User / Email</th>
                <th className="py-3 px-4">Role</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Associated Profile</th>
                <th className="py-3 px-4">Created Date</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {users.map((u) => (
                <tr key={u.id} className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-semibold text-slate-900">{u.email}</td>
                  <td className="py-3 px-4">
                    <Badge variant={u.role === 'ADMIN' ? 'danger' : u.role === 'DOCTOR' ? 'info' : 'primary'} size="sm">
                      {u.role}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant={u.isActive ? 'success' : 'neutral'} size="sm">
                      {u.isActive ? 'Active' : 'Deactivated'}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-slate-600">
                    {u.patient
                      ? `${u.patient.firstName} ${u.patient.lastName}`
                      : u.doctor
                      ? `Dr. ${u.doctor.firstName} ${u.doctor.lastName}`
                      : 'System Admin'}
                  </td>
                  <td className="py-3 px-4 text-slate-400">{new Date(u.createdAt).toLocaleDateString()}</td>
                  <td className="py-3 px-4 text-right space-x-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-xs"
                      onClick={() => handleToggleStatus(u.id, u.isActive)}
                    >
                      {u.isActive ? 'Deactivate' : 'Activate'}
                    </Button>
                    <button
                      onClick={() => handleDelete(u.id)}
                      className="text-rose-400 hover:text-rose-600 p-1 align-middle"
                    >
                      <Trash2 className="h-4 w-4 inline" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          totalItems={totalUsers}
          onPageChange={setPage}
        />
      </Card>
    </div>
  );
};
