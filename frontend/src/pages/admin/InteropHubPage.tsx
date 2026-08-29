import React, { useEffect, useState } from 'react';
import { Network, FileCode, CheckCircle, Copy, Download, RefreshCw } from 'lucide-react';
import { interopService } from '../../services/interop.service';
import { doctorService } from '../../services/doctor.service';
import { Patient } from '../../types';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Select } from '../../components/common/Select';
import { Badge } from '../../components/common/Badge';

export const InteropHubPage: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatientId, setSelectedPatientId] = useState('');
  const [activeTab, setActiveTab] = useState<'FHIR_R4' | 'HL7_V2' | 'PARSER'>('FHIR_R4');
  const [fhirData, setFhirData] = useState<any>(null);
  const [hl7Data, setHl7Data] = useState<string>('');
  const [customHL7, setCustomHL7] = useState<string>('MSH|^~\\&|EXTERNAL_EMR|HOSPITAL_A|MYHEALTHCARE|CLINIC_B|20260829120000||ADT^A01^ADT_A01|MSG9901|P|2.5.1\r\nPID|1||PAT10098^^^EMR^MR||Doe^Jane||19920514|F|||123 Maple St^^Denver^CO^80201^USA');
  const [parsedHL7, setParsedHL7] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    doctorService.getAssignedPatients().then((res) => {
      setPatients(res.data || []);
      if (res.data && res.data.length > 0) {
        setSelectedPatientId(res.data[0].id);
      }
    });
  }, []);

  const handleGenerateFHIR = async () => {
    if (!selectedPatientId) return;
    setLoading(true);
    try {
      const res = await interopService.getPatientFHIR(selectedPatientId);
      setFhirData(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateHL7 = async () => {
    if (!selectedPatientId) return;
    setLoading(true);
    try {
      const res = await interopService.getPatientHL7(selectedPatientId);
      setHl7Data(res.data.rawMessage);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleParseCustomHL7 = async () => {
    try {
      const res = await interopService.parseHL7(customHL7);
      setParsedHL7(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">FHIR R4 & HL7 v2.5 Interoperability Hub</h1>
          <p className="text-xs text-slate-500 mt-1">
            Exchange standardized clinical datasets with Health Information Exchanges (HIE), EHRs, and PACS networks.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant={activeTab === 'FHIR_R4' ? 'primary' : 'outline'}
            onClick={() => { setActiveTab('FHIR_R4'); if (!fhirData) handleGenerateFHIR(); }}
          >
            FHIR R4 JSON
          </Button>
          <Button
            size="sm"
            variant={activeTab === 'HL7_V2' ? 'primary' : 'outline'}
            onClick={() => { setActiveTab('HL7_V2'); if (!hl7Data) handleGenerateHL7(); }}
          >
            HL7 v2.5 ER7
          </Button>
          <Button
            size="sm"
            variant={activeTab === 'PARSER' ? 'primary' : 'outline'}
            onClick={() => setActiveTab('PARSER')}
          >
            HL7 Parser Tool
          </Button>
        </div>
      </div>

      {activeTab !== 'PARSER' && (
        <Card>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1 w-full">
              <Select
                label="Target Patient"
                options={patients.map((p) => ({ value: p.id, label: `${p.firstName} ${p.lastName} (${p.phone})` }))}
                value={selectedPatientId}
                onChange={(e) => setSelectedPatientId(e.target.value)}
              />
            </div>
            <div className="sm:self-end">
              <Button
                variant="primary"
                size="md"
                isLoading={loading}
                onClick={activeTab === 'FHIR_R4' ? handleGenerateFHIR : handleGenerateHL7}
                leftIcon={<RefreshCw className="h-4 w-4" />}
              >
                Generate {activeTab === 'FHIR_R4' ? 'FHIR Bundle' : 'HL7 ADT'}
              </Button>
            </div>
          </div>
        </Card>
      )}

      {activeTab === 'FHIR_R4' && (
        <Card
          title="Standardized FHIR R4 Bundle"
          action={
            fhirData && (
              <Button size="sm" variant="outline" onClick={() => copyToClipboard(JSON.stringify(fhirData, null, 2))} leftIcon={<Copy className="h-3.5 w-3.5" />}>
                {copied ? 'Copied!' : 'Copy JSON'}
              </Button>
            )
          }
        >
          {fhirData ? (
            <pre className="p-4 bg-slate-900 text-teal-300 rounded-xl text-xs font-mono overflow-x-auto max-h-96">
              {JSON.stringify(fhirData, null, 2)}
            </pre>
          ) : (
            <p className="text-center py-12 text-xs text-slate-400">Click Generate to compile FHIR R4 Patient Bundle.</p>
          )}
        </Card>
      )}

      {activeTab === 'HL7_V2' && (
        <Card
          title="HL7 v2.5.1 Pipe-and-Hat (ER7) Stream"
          action={
            hl7Data && (
              <Button size="sm" variant="outline" onClick={() => copyToClipboard(hl7Data)} leftIcon={<Copy className="h-3.5 w-3.5" />}>
                {copied ? 'Copied!' : 'Copy HL7'}
              </Button>
            )
          }
        >
          {hl7Data ? (
            <pre className="p-4 bg-slate-900 text-amber-300 rounded-xl text-xs font-mono overflow-x-auto whitespace-pre-wrap">
              {hl7Data}
            </pre>
          ) : (
            <p className="text-center py-12 text-xs text-slate-400">Click Generate to compile HL7 v2.5 ADT message.</p>
          )}
        </Card>
      )}

      {activeTab === 'PARSER' && (
        <Card title="Raw HL7 v2.x Delimiter Parser">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Paste Raw HL7 Message (MSH, PID, PV1, OBX segments):</label>
              <textarea
                rows={4}
                className="w-full rounded-xl border border-slate-300 p-3 font-mono text-xs focus:ring-primary-500 focus:outline-none"
                value={customHL7}
                onChange={(e) => setCustomHL7(e.target.value)}
              />
            </div>
            <Button size="sm" variant="primary" onClick={handleParseCustomHL7}>
              Parse & Validate Segments
            </Button>

            {parsedHL7 && (
              <div className="space-y-3 pt-3 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-700">Message Type:</span>
                  <Badge variant="primary" size="sm">{parsedHL7.messageType}</Badge>
                  <span className="text-xs text-slate-400">Control ID: {parsedHL7.controlId}</span>
                </div>
                <div className="space-y-2">
                  {parsedHL7.segments?.map((seg: any, idx: number) => (
                    <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono">
                      <span className="font-bold text-primary-700">{seg.name}</span>: {seg.fields.join(' | ')}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  );
};
