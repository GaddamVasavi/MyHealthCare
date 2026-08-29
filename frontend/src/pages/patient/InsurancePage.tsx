import React, { useEffect, useState } from 'react';
import { ShieldCheck, Plus, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { billingService } from '../../services/billing.service';
import { InsurancePolicy, InsuranceClaim, InsuranceProvider } from '../../types';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { Modal } from '../../components/common/Modal';
import { Input } from '../../components/common/Input';
import { Select } from '../../components/common/Select';
import { Alert } from '../../components/common/Alert';

export const InsurancePage: React.FC = () => {
  const [policies, setPolicies] = useState<InsurancePolicy[]>([]);
  const [claims, setClaims] = useState<InsuranceClaim[]>([]);
  const [providers, setProviders] = useState<InsuranceProvider[]>([]);
  const [loading, setLoading] = useState(true);
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const [claimData, setClaimData] = useState({ policyId: '', claimAmount: '', claimReason: '' });
  const [policyData, setPolicyData] = useState({
    providerId: '',
    policyNumber: '',
    policyType: 'COMPREHENSIVE',
    coverageAmount: '',
    startDate: '',
    expirationDate: '',
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const [policiesRes, claimsRes, provRes] = await Promise.all([
        billingService.getMyPolicies(),
        billingService.listClaims(),
        billingService.getInsuranceProviders(),
      ]);
      setPolicies(policiesRes.data || []);
      setClaims(claimsRes.data || []);
      setProviders(provRes.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreatePolicy = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await billingService.addPolicy({
        ...policyData,
        coverageAmount: parseFloat(policyData.coverageAmount),
      });
      setMessage('Insurance policy registered successfully.');
      setIsPolicyModalOpen(false);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmitClaim = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await billingService.submitClaim({
        policyId: claimData.policyId || policies[0]?.id,
        claimAmount: parseFloat(claimData.claimAmount),
        claimReason: claimData.claimReason,
      });
      setMessage('Insurance reimbursement claim submitted.');
      setIsClaimModalOpen(false);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Health Insurance & Claims</h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage your registered medical insurance policies and file reimbursement claims.
          </p>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={() => setIsPolicyModalOpen(true)}>
            + Add Policy
          </Button>
          <Button size="sm" variant="primary" onClick={() => setIsClaimModalOpen(true)}>
            File Insurance Claim
          </Button>
        </div>
      </div>

      {message && <Alert variant="success" onDismiss={() => setMessage(null)}>{message}</Alert>}

      {/* Active Policies */}
      <div className="space-y-3">
        <h3 className="text-base font-bold text-slate-900">Active Insurance Policies</h3>
        {policies.length === 0 ? (
          <Card className="p-8 text-center text-xs text-slate-400">
            No active insurance policy on file. Add your policy to enable seamless claim processing.
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {policies.map((p) => (
              <Card key={p.id} className="p-5 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-primary-600 uppercase">{p.policyNumber}</span>
                    <h4 className="font-bold text-sm text-slate-900">{p.provider?.name || 'Insurance Provider'}</h4>
                    <p className="text-xs text-slate-500">{p.policyType}</p>
                  </div>
                  <Badge variant="success" size="sm">Active</Badge>
                </div>
                <div className="text-xs text-slate-600 space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="flex justify-between">
                    <span>Coverage Amount:</span>
                    <span className="font-bold text-slate-900">${Number(p.coverageAmount).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Valid Period:</span>
                    <span>{new Date(p.startDate).toLocaleDateString()} - {new Date(p.expirationDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Claims History */}
      <div className="space-y-3">
        <h3 className="text-base font-bold text-slate-900">Claims History</h3>
        {claims.length === 0 ? (
          <Card className="p-8 text-center text-xs text-slate-400">
            No insurance claims submitted yet.
          </Card>
        ) : (
          <div className="space-y-3">
            {claims.map((c) => (
              <Card key={c.id} className="p-4 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs text-slate-900">{c.claimNumber}</span>
                    <Badge variant={c.status === 'APPROVED' ? 'success' : c.status === 'REJECTED' ? 'danger' : 'warning'} size="sm">
                      {c.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-500">{c.claimReason} | Amount: ${Number(c.claimAmount).toFixed(2)}</p>
                </div>
                <span className="text-xs text-slate-400">{new Date(c.submittedDate).toLocaleDateString()}</span>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Add Policy Modal */}
      <Modal isOpen={isPolicyModalOpen} onClose={() => setIsPolicyModalOpen(false)} title="Register Health Insurance Policy">
        <form onSubmit={handleCreatePolicy} className="space-y-4">
          <Select
            label="Insurance Provider"
            options={providers.map((p) => ({ value: p.id, label: p.name }))}
            value={policyData.providerId}
            onChange={(e) => setPolicyData({ ...policyData, providerId: e.target.value })}
          />
          <Input
            label="Policy Number"
            required
            placeholder="BC-99824-H"
            value={policyData.policyNumber}
            onChange={(e) => setPolicyData({ ...policyData, policyNumber: e.target.value })}
          />
          <Input
            label="Coverage Amount ($)"
            type="number"
            required
            placeholder="50000"
            value={policyData.coverageAmount}
            onChange={(e) => setPolicyData({ ...policyData, coverageAmount: e.target.value })}
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Start Date"
              type="date"
              required
              value={policyData.startDate}
              onChange={(e) => setPolicyData({ ...policyData, startDate: e.target.value })}
            />
            <Input
              label="Expiration Date"
              type="date"
              required
              value={policyData.expirationDate}
              onChange={(e) => setPolicyData({ ...policyData, expirationDate: e.target.value })}
            />
          </div>
          <Button type="submit" variant="primary" className="w-full" size="lg">
            Save Insurance Policy
          </Button>
        </form>
      </Modal>

      {/* Claim Modal */}
      <Modal isOpen={isClaimModalOpen} onClose={() => setIsClaimModalOpen(false)} title="File Insurance Claim">
        <form onSubmit={handleSubmitClaim} className="space-y-4">
          <Select
            label="Select Policy"
            options={policies.map((p) => ({
              value: p.id,
              label: `${p.provider?.name || 'Policy'} (${p.policyNumber})`,
            }))}
            value={claimData.policyId}
            onChange={(e) => setClaimData({ ...claimData, policyId: e.target.value })}
          />
          <Input
            label="Claim Amount ($)"
            type="number"
            required
            placeholder="120.00"
            value={claimData.claimAmount}
            onChange={(e) => setClaimData({ ...claimData, claimAmount: e.target.value })}
          />
          <Input
            label="Claim Reason / Medical Indication"
            required
            placeholder="e.g. In-network cardiology specialist consultation"
            value={claimData.claimReason}
            onChange={(e) => setClaimData({ ...claimData, claimReason: e.target.value })}
          />
          <Button type="submit" variant="primary" className="w-full" size="lg">
            Submit Claim for Review
          </Button>
        </form>
      </Modal>
    </div>
  );
};
