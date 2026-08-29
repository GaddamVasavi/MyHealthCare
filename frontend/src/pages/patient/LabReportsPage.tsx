import React, { useEffect, useState } from 'react';
import { FlaskConical, Calendar, Stethoscope, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import { patientService } from '../../services/patient.service';
import { LabOrder } from '../../types';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { LAB_STATUS_COLORS } from '../../constants';

export const LabReportsPage: React.FC = () => {
  const [labOrders, setLabOrders] = useState<LabOrder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    patientService.getMyLabReports().then((res) => {
      setLabOrders(res.data || []);
      setLoading(false);
    });
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Laboratory & Diagnostic Reports</h1>
        <p className="text-xs text-slate-500 mt-1">
          Review lab orders, sample processing status, verified diagnostic test results, and reference benchmarks.
        </p>
      </div>

      {loading ? (
        <div className="text-center py-12 text-slate-400 text-xs">Loading laboratory orders...</div>
      ) : labOrders.length === 0 ? (
        <Card className="p-12 text-center space-y-2">
          <FlaskConical className="mx-auto h-10 w-10 text-slate-300" />
          <h3 className="font-semibold text-slate-700">No laboratory orders recorded</h3>
          <p className="text-xs text-slate-400">Diagnostic tests ordered by your physicians will appear here.</p>
        </Card>
      ) : (
        <div className="space-y-6">
          {labOrders.map((order) => {
            const statusConfig = LAB_STATUS_COLORS[order.status] || {
              bg: 'bg-slate-50',
              text: 'text-slate-700',
              border: 'border-slate-200',
            };

            return (
              <Card key={order.id} className="p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 gap-2">
                  <div>
                    <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">{order.orderNumber}</span>
                    <h3 className="font-bold text-base text-slate-900">
                      Ordered by Dr. {order.doctor?.firstName} {order.doctor?.lastName}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 self-start sm:self-auto">
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-slate-400" />
                      {new Date(order.orderedDate).toLocaleDateString()}
                    </span>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${statusConfig.bg} ${statusConfig.text} ${statusConfig.border}`}>
                      {order.status}
                    </span>
                  </div>
                </div>

                {order.clinicalNotes && (
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-600">
                    <span className="font-semibold text-slate-700">Clinical Indication:</span> {order.clinicalNotes}
                  </div>
                )}

                {/* Results Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-600">
                    <thead className="bg-slate-50 text-slate-700 font-semibold border-y border-slate-200">
                      <tr>
                        <th className="py-2.5 px-3">Diagnostic Test</th>
                        <th className="py-2.5 px-3">Result Value</th>
                        <th className="py-2.5 px-3">Reference Range</th>
                        <th className="py-2.5 px-3">Unit</th>
                        <th className="py-2.5 px-3">Flag</th>
                        <th className="py-2.5 px-3">Verified By</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {order.results?.map((res) => (
                        <tr key={res.id} className="hover:bg-slate-50/50">
                          <td className="py-2.5 px-3 font-semibold text-slate-900">{res.testName}</td>
                          <td className="py-2.5 px-3 font-bold text-slate-800">{res.resultValue}</td>
                          <td className="py-2.5 px-3 text-slate-500">{res.normalRange || '-'}</td>
                          <td className="py-2.5 px-3 text-slate-500">{res.unit || '-'}</td>
                          <td className="py-2.5 px-3">
                            {res.isAbnormal ? (
                              <Badge variant="danger" size="sm">Abnormal</Badge>
                            ) : (
                              <Badge variant="success" size="sm">Normal</Badge>
                            )}
                          </td>
                          <td className="py-2.5 px-3 text-slate-500">{res.verifiedBy || 'Pending'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};
