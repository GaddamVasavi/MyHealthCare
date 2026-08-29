import React, { useEffect, useState } from 'react';
import { FolderOpen, Upload, Trash2, FileText, Download } from 'lucide-react';
import { patientService } from '../../services/patient.service';
import { MedicalDocument } from '../../types';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Select } from '../../components/common/Select';
import { Modal } from '../../components/common/Modal';
import { Badge } from '../../components/common/Badge';

export const DocumentsPage: React.FC = () => {
  const [documents, setDocuments] = useState<MedicalDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [docData, setDocData] = useState({
    title: '',
    category: 'LAB_REPORT',
    fileName: '',
    description: '',
  });

  const fetchDocs = async () => {
    setLoading(true);
    try {
      const res = await patientService.getMyDocuments();
      setDocuments(res.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocs();
  }, []);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await patientService.uploadDocument({
        ...docData,
        fileUrl: `https://storage.myhealthcare.internal/docs/${Date.now()}_${docData.fileName || 'document.pdf'}`,
        fileName: docData.fileName || `${docData.title.toLowerCase().replace(/\s+/g, '_')}.pdf`,
        fileSize: 1024 * 350, // simulated 350 KB
        mimeType: 'application/pdf',
      });
      setIsUploadModalOpen(false);
      fetchDocs();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await patientService.deleteDocument(id);
      setDocuments(documents.filter((d) => d.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Medical Documents</h1>
          <p className="text-xs text-slate-500 mt-1">
            Store and categorize external diagnostic scans, imaging files, discharge summaries, and lab files.
          </p>
        </div>
        <Button size="sm" variant="primary" leftIcon={<Upload className="h-4 w-4" />} onClick={() => setIsUploadModalOpen(true)}>
          Upload Document
        </Button>
      </div>

      {loading ? (
        <div className="text-center py-12 text-slate-400 text-xs">Loading documents...</div>
      ) : documents.length === 0 ? (
        <Card className="p-12 text-center space-y-2">
          <FolderOpen className="mx-auto h-10 w-10 text-slate-300" />
          <h3 className="font-semibold text-slate-700">No documents uploaded</h3>
          <p className="text-xs text-slate-400">Keep all your clinical files, scans, and discharge summaries in one secure place.</p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <Card key={doc.id} className="p-5 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <div className="h-9 w-9 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center">
                    <FileText className="h-5 w-5" />
                  </div>
                  <Badge variant="neutral" size="sm">{doc.category}</Badge>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{doc.title}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{doc.fileName} ({Math.round(doc.fileSize / 1024)} KB)</p>
                </div>
                {doc.description && <p className="text-xs text-slate-600">{doc.description}</p>}
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-400">
                <span>{new Date(doc.createdAt).toLocaleDateString()}</span>
                <div className="flex items-center gap-2">
                  <button onClick={() => handleDelete(doc.id)} className="text-slate-400 hover:text-rose-600 p-1">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Upload Modal */}
      <Modal isOpen={isUploadModalOpen} onClose={() => setIsUploadModalOpen(false)} title="Upload Medical Document">
        <form onSubmit={handleUpload} className="space-y-4">
          <Input
            label="Document Title"
            required
            placeholder="e.g. Chest X-Ray Scan, Discharge Summary"
            value={docData.title}
            onChange={(e) => setDocData({ ...docData, title: e.target.value })}
          />
          <Select
            label="Document Category"
            options={[
              { value: 'LAB_REPORT', label: 'Laboratory Report' },
              { value: 'SCAN_IMAGING', label: 'Scan & Radiology Imaging' },
              { value: 'PRESCRIPTION', label: 'Prescription Document' },
              { value: 'DISCHARGE_SUMMARY', label: 'Discharge Summary' },
              { value: 'INSURANCE_DOC', label: 'Insurance Document' },
              { value: 'OTHER', label: 'Other Document' },
            ]}
            value={docData.category}
            onChange={(e) => setDocData({ ...docData, category: e.target.value })}
          />
          <Input
            label="File Name"
            placeholder="e.g. chest_xray_march2026.pdf"
            value={docData.fileName}
            onChange={(e) => setDocData({ ...docData, fileName: e.target.value })}
          />
          <Input
            label="Description / Notes"
            placeholder="Brief context on this medical record..."
            value={docData.description}
            onChange={(e) => setDocData({ ...docData, description: e.target.value })}
          />
          <Button type="submit" variant="primary" className="w-full" size="lg">
            Save & Index Document
          </Button>
        </form>
      </Modal>
    </div>
  );
};
