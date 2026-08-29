import React, { useEffect, useState, useRef } from 'react';
import { Layers, ZoomIn, ZoomOut, Contrast, RotateCw, FileText, CheckCircle2, Save } from 'lucide-react';
import { imagingService } from '../../services/imaging.service';
import { doctorService } from '../../services/doctor.service';
import { Patient } from '../../types';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Select } from '../../components/common/Select';
import { Badge } from '../../components/common/Badge';
import { Alert } from '../../components/common/Alert';

export const DicomImagingViewerPage: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatientId, setSelectedPatientId] = useState('');
  const [studies, setStudies] = useState<any[]>([]);
  const [selectedStudy, setSelectedStudy] = useState<any>(null);
  const [windowLevel, setWindowLevel] = useState({ wc: 40, ww: 400 });
  const [zoom, setZoom] = useState(1.0);
  const [rotation, setRotation] = useState(0);
  const [loading, setLoading] = useState(false);
  const [savingReport, setSavingReport] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const [reportForm, setReportForm] = useState({
    indication: 'Persistent dry cough and dyspnea on exertion for 3 weeks.',
    technique: 'Standard PA and Lateral digital radiography of the chest.',
    findingsLungs: 'Lungs are clear bilaterally without focal consolidation, pneumothorax, or large pleural effusion.',
    findingsHeart: 'Cardiothoracic ratio is normal (<0.5). Normal mediastinal and hilar contours.',
    impression: 'No acute cardiopulmonary disease identified on 2-view chest radiography.',
    biradsRads: 'BI-RADS 1 (Negative)',
  });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    doctorService.getAssignedPatients().then((res) => {
      setPatients(res.data || []);
      if (res.data && res.data.length > 0) {
        setSelectedPatientId(res.data[0].id);
      }
    });
  }, []);

  useEffect(() => {
    if (selectedPatientId) {
      setLoading(true);
      imagingService.getPatientStudies(selectedPatientId).then((res) => {
        setStudies(res.data.studies || []);
        if (res.data.studies && res.data.studies.length > 0) {
          setSelectedStudy(res.data.studies[0]);
        }
        setLoading(false);
      });
    }
  }, [selectedPatientId]);

  // Render simulated anatomical radiologic scan on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.save();
    ctx.clearRect(0, 0, width, height);

    // Dark background
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, width, height);

    // Apply transformation
    ctx.translate(width / 2, height / 2);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.scale(zoom, zoom);
    ctx.translate(-width / 2, -height / 2);

    // Contrast calculation
    const contrastFactor = Math.min(2.5, Math.max(0.5, 400 / (windowLevel.ww || 400)));
    const baseBrightness = Math.round(((windowLevel.wc - 40) / 100) * 30);

    // Draw anatomical chest / lung silhouette
    const lungColor = `rgb(${Math.min(255, Math.max(10, Math.round((25 + baseBrightness) * contrastFactor)))}, ${Math.min(255, Math.max(10, Math.round((25 + baseBrightness) * contrastFactor)))}, ${Math.min(255, Math.max(10, Math.round((30 + baseBrightness) * contrastFactor)))})`;
    const boneColor = `rgb(${Math.min(255, Math.round((210 + baseBrightness) * contrastFactor))}, ${Math.min(255, Math.round((210 + baseBrightness) * contrastFactor))}, ${Math.min(255, Math.round((215 + baseBrightness) * contrastFactor))})`;
    const mediastinumColor = `rgb(${Math.min(255, Math.round((140 + baseBrightness) * contrastFactor))}, ${Math.min(255, Math.round((140 + baseBrightness) * contrastFactor))}, ${Math.min(255, Math.round((145 + baseBrightness) * contrastFactor))})`;

    // Right Lung Field
    ctx.fillStyle = lungColor;
    ctx.beginPath();
    ctx.ellipse(width * 0.35, height * 0.45, width * 0.14, height * 0.28, -0.05, 0, 2 * Math.PI);
    ctx.fill();

    // Left Lung Field
    ctx.beginPath();
    ctx.ellipse(width * 0.65, height * 0.45, width * 0.14, height * 0.28, 0.05, 0, 2 * Math.PI);
    ctx.fill();

    // Mediastinum & Cardiac Silhouette
    ctx.fillStyle = mediastinumColor;
    ctx.beginPath();
    ctx.ellipse(width * 0.52, height * 0.52, width * 0.11, height * 0.16, 0.25, 0, 2 * Math.PI);
    ctx.fill();

    // Rib cage / Clavicles (Bone overlay)
    ctx.strokeStyle = boneColor;
    ctx.lineWidth = 4 * contrastFactor;
    for (let r = 0; r < 6; r++) {
      ctx.beginPath();
      ctx.arc(width * 0.35, height * (0.28 + r * 0.06), width * 0.13, 0.1, Math.PI - 0.1, false);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(width * 0.65, height * (0.28 + r * 0.06), width * 0.13, 0.1, Math.PI - 0.1, false);
      ctx.stroke();
    }

    // Spine Column
    ctx.fillStyle = boneColor;
    for (let s = 0; s < 12; s++) {
      ctx.fillRect(width * 0.485, height * (0.18 + s * 0.04), width * 0.03, height * 0.025);
    }

    ctx.restore();

    // Overlay DICOM Metadata on Canvas Corners
    ctx.fillStyle = '#10b981'; // Medical green text
    ctx.font = '11px monospace';
    ctx.fillText(`PATIENT: ${selectedStudy?.patientName || 'ANONYMOUS'}`, 12, 22);
    ctx.fillText(`ACC: ${selectedStudy?.accessionNumber || 'ACC-9901'}`, 12, 38);
    ctx.fillText(`STUDY: ${selectedStudy?.studyDescription || 'CHEST PA'}`, 12, 54);

    ctx.fillText(`WC: ${windowLevel.wc}  WW: ${windowLevel.ww}`, width - 130, 22);
    ctx.fillText(`ZOOM: ${(zoom * 100).toFixed(0)}%`, width - 130, 38);
    ctx.fillText(`MOD: ${selectedStudy?.modalitiesInStudy?.[0] || 'DX'}`, width - 130, 54);
  }, [selectedStudy, windowLevel, zoom, rotation]);

  const handleSaveReport = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingReport(true);
    try {
      await imagingService.createRadiologyReport({
        studyInstanceUid: selectedStudy?.studyInstanceUid,
        patientId: selectedPatientId,
        modality: selectedStudy?.modalitiesInStudy?.[0] || 'DX',
        clinicalIndication: reportForm.indication,
        technique: reportForm.technique,
        findings: {
          systemFindings: {
            Lungs: reportForm.findingsLungs,
            Heart: reportForm.findingsHeart,
          },
        },
        impression: [reportForm.impression],
        radsClassification: {
          system: 'BI-RADS',
          category: reportForm.biradsRads,
          managementRecommendation: 'Routine screening at 12-month interval.',
        },
      });
      setMessage('Structured Radiology Diagnostic Report signed and archived to EMR.');
    } catch (err) {
      console.error(err);
    } finally {
      setSavingReport(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">DICOM PACS Viewer & Structured Radiology Reporting</h1>
          <p className="text-xs text-slate-500 mt-1">Diagnostic radiological image examination, window/level contrast adjustment, and structured reporting.</p>
        </div>
        <div className="w-64">
          <Select
            options={patients.map((p) => ({ value: p.id, label: `${p.firstName} ${p.lastName}` }))}
            value={selectedPatientId}
            onChange={(e) => setSelectedPatientId(e.target.value)}
          />
        </div>
      </div>

      {message && <Alert variant="success" onDismiss={() => setMessage(null)}>{message}</Alert>}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* DICOM Canvas Workspace */}
        <div className="lg:col-span-7 space-y-4">
          <Card>
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-3 text-xs">
              <div className="flex items-center gap-1.5">
                <Button size="sm" variant="outline" onClick={() => setZoom((z) => Math.min(2.5, z + 0.1))} leftIcon={<ZoomIn className="h-3.5 w-3.5" />}>
                  Zoom In
                </Button>
                <Button size="sm" variant="outline" onClick={() => setZoom((z) => Math.max(0.6, z - 0.1))} leftIcon={<ZoomOut className="h-3.5 w-3.5" />}>
                  Zoom Out
                </Button>
                <Button size="sm" variant="outline" onClick={() => setRotation((r) => (r + 90) % 360)} leftIcon={<RotateCw className="h-3.5 w-3.5" />}>
                  Rotate
                </Button>
              </div>

              {/* Preset Window/Level */}
              <div className="flex items-center gap-1">
                <Button size="sm" variant="ghost" onClick={() => setWindowLevel({ wc: 40, ww: 400 })}>
                  Mediastinal
                </Button>
                <Button size="sm" variant="ghost" onClick={() => setWindowLevel({ wc: -600, ww: 1500 })}>
                  Lung
                </Button>
                <Button size="sm" variant="ghost" onClick={() => setWindowLevel({ wc: 300, ww: 1500 })}>
                  Bone
                </Button>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-black shadow-inner border border-slate-900 flex justify-center">
              <canvas ref={canvasRef} width={560} height={460} className="max-w-full block" />
            </div>
          </Card>
        </div>

        {/* Structured Radiology Report Panel */}
        <div className="lg:col-span-5 space-y-4">
          <Card title="Structured Diagnostic Report">
            <form onSubmit={handleSaveReport} className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Clinical Indication</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-300 p-2 text-xs"
                  value={reportForm.indication}
                  onChange={(e) => setReportForm({ ...reportForm, indication: e.target.value })}
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Technique</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-300 p-2 text-xs"
                  value={reportForm.technique}
                  onChange={(e) => setReportForm({ ...reportForm, technique: e.target.value })}
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Findings (Lungs & Pleura)</label>
                <textarea
                  rows={2}
                  className="w-full rounded-lg border border-slate-300 p-2 text-xs"
                  value={reportForm.findingsLungs}
                  onChange={(e) => setReportForm({ ...reportForm, findingsLungs: e.target.value })}
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Findings (Heart & Mediastinum)</label>
                <textarea
                  rows={2}
                  className="w-full rounded-lg border border-slate-300 p-2 text-xs"
                  value={reportForm.findingsHeart}
                  onChange={(e) => setReportForm({ ...reportForm, findingsHeart: e.target.value })}
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Radiologic Impression</label>
                <textarea
                  rows={2}
                  className="w-full rounded-lg border border-slate-300 p-2 text-xs"
                  value={reportForm.impression}
                  onChange={(e) => setReportForm({ ...reportForm, impression: e.target.value })}
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">RADS Classification</label>
                <select
                  className="w-full rounded-lg border border-slate-300 p-2 text-xs"
                  value={reportForm.biradsRads}
                  onChange={(e) => setReportForm({ ...reportForm, biradsRads: e.target.value })}
                >
                  <option value="BI-RADS 1 (Negative)">BI-RADS 1 (Negative)</option>
                  <option value="BI-RADS 2 (Benign)">BI-RADS 2 (Benign)</option>
                  <option value="BI-RADS 3 (Probably Benign)">BI-RADS 3 (Probably Benign)</option>
                  <option value="BI-RADS 4 (Suspicious)">BI-RADS 4 (Suspicious)</option>
                  <option value="Lung-RADS 1 (Negative)">Lung-RADS 1 (Negative)</option>
                  <option value="Lung-RADS 2 (Benign Appearance)">Lung-RADS 2 (Benign Appearance)</option>
                </select>
              </div>

              <Button type="submit" variant="primary" className="w-full mt-2" size="md" isLoading={savingReport} leftIcon={<Save className="h-4 w-4" />}>
                Sign & Finalize Radiology Report
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};
