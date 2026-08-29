import React, { useEffect, useState } from 'react';
import { CreditCard, DollarSign, Calendar, CheckCircle2, ShieldCheck, Download } from 'lucide-react';
import { billingService } from '../../services/billing.service';
import { Invoice, Payment } from '../../types';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { Modal } from '../../components/common/Modal';
import { Select } from '../../components/common/Select';
import { Alert } from '../../components/common/Alert';
import { INVOICE_STATUS_COLORS } from '../../constants';

export const BillingPage: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);
  const [payMethod, setPayMethod] = useState<'CREDIT_CARD' | 'DEBIT_CARD' | 'UPI' | 'NET_BANKING'>('CREDIT_CARD');
  const [processing, setProcessing] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const fetchInvoices = async () => {
    setLoading(true);
    try {
      const res = await billingService.listInvoices();
      setInvoices(res.data || []);
    } catch (err) {
      console.error('Failed to fetch invoices:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  const handlePayInvoice = async () => {
    if (!selectedInvoice) return;
    setProcessing(true);
    try {
      await billingService.processPayment({
        invoiceId: selectedInvoice.id,
        amount: Number(selectedInvoice.dueAmount),
        method: payMethod,
      });
      setMessage(`Payment of $${Number(selectedInvoice.dueAmount).toFixed(2)} completed successfully!`);
      setIsPayModalOpen(false);
      fetchInvoices();
    } catch (err: any) {
      console.error(err);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Billing & Invoices</h1>
        <p className="text-xs text-slate-500 mt-1">
          Review consultation and diagnostic bills, payment history, and complete online checkout.
        </p>
      </div>

      {message && <Alert variant="success" onDismiss={() => setMessage(null)}>{message}</Alert>}

      {loading ? (
        <div className="text-center py-12 text-slate-400 text-xs">Loading billing invoices...</div>
      ) : invoices.length === 0 ? (
        <Card className="p-12 text-center space-y-2">
          <CreditCard className="mx-auto h-10 w-10 text-slate-300" />
          <h3 className="font-semibold text-slate-700">No invoices recorded</h3>
          <p className="text-xs text-slate-400">Bills for appointments or laboratory diagnostics will appear here.</p>
        </Card>
      ) : (
        <div className="space-y-4">
          {invoices.map((inv) => {
            const statusConfig = INVOICE_STATUS_COLORS[inv.status] || {
              bg: 'bg-slate-50',
              text: 'text-slate-700',
              border: 'border-slate-200',
            };

            return (
              <Card key={inv.id} className="p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 gap-2">
                  <div>
                    <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">{inv.invoiceNumber}</span>
                    <h3 className="font-bold text-base text-slate-900">
                      Total: ${Number(inv.totalAmount).toFixed(2)}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 self-start sm:self-auto">
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-slate-400" /> Due: {new Date(inv.dueDate).toLocaleDateString()}
                    </span>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${statusConfig.bg} ${statusConfig.text} ${statusConfig.border}`}>
                      {inv.status}
                    </span>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-600">
                    <thead className="bg-slate-50 text-slate-700 font-semibold border-y border-slate-200">
                      <tr>
                        <th className="py-2.5 px-3">Service Description</th>
                        <th className="py-2.5 px-3">Qty</th>
                        <th className="py-2.5 px-3">Unit Price</th>
                        <th className="py-2.5 px-3 text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {inv.items?.map((item) => (
                        <tr key={item.id}>
                          <td className="py-2 px-3 font-medium text-slate-900">{item.description}</td>
                          <td className="py-2 px-3">{item.quantity}</td>
                          <td className="py-2 px-3">${Number(item.unitPrice).toFixed(2)}</td>
                          <td className="py-2 px-3 text-right font-semibold">${Number(item.totalPrice).toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between border-t border-slate-100 pt-3 gap-2">
                  <div className="text-xs text-slate-500">
                    Paid: <span className="font-semibold text-emerald-600">${Number(inv.paidAmount).toFixed(2)}</span> | Due: <span className="font-semibold text-rose-600">${Number(inv.dueAmount).toFixed(2)}</span>
                  </div>
                  {Number(inv.dueAmount) > 0 && (
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => {
                        setSelectedInvoice(inv);
                        setIsPayModalOpen(true);
                      }}
                    >
                      Pay Due Amount (${Number(inv.dueAmount).toFixed(2)})
                    </Button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {/* Payment Checkout Modal */}
      <Modal
        isOpen={isPayModalOpen}
        onClose={() => setIsPayModalOpen(false)}
        title="Secure Payment Checkout"
        subtitle={`Invoice ${selectedInvoice?.invoiceNumber}`}
      >
        <div className="space-y-4">
          <div className="bg-slate-50 p-4 rounded-xl space-y-1 text-xs border border-slate-100">
            <div className="flex justify-between text-slate-600">
              <span>Amount Due:</span>
              <span className="font-bold text-base text-slate-900">${Number(selectedInvoice?.dueAmount).toFixed(2)}</span>
            </div>
            <p className="text-[11px] text-slate-400">Transactions processed securely without saving raw credentials.</p>
          </div>

          <Select
            label="Payment Method"
            options={[
              { value: 'CREDIT_CARD', label: 'Credit Card (Visa / Mastercard / Amex)' },
              { value: 'DEBIT_CARD', label: 'Debit Card' },
              { value: 'UPI', label: 'UPI / Instant Bank Transfer' },
              { value: 'NET_BANKING', label: 'Online Net Banking' },
            ]}
            value={payMethod}
            onChange={(e) => setPayMethod(e.target.value as any)}
          />

          <Button
            variant="primary"
            className="w-full mt-2"
            size="lg"
            isLoading={processing}
            onClick={handlePayInvoice}
          >
            Authorize Payment of ${Number(selectedInvoice?.dueAmount).toFixed(2)}
          </Button>
        </div>
      </Modal>
    </div>
  );
};
