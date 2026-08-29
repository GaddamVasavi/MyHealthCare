import prisma from '../../database/prisma';
import { DocumentCategory } from '@prisma/client';

export class DocumentsService {
  static async uploadDocumentMetadata(data: {
    patientId: string;
    title: string;
    category: DocumentCategory;
    fileUrl: string;
    fileName: string;
    fileSize: number;
    mimeType: string;
    description?: string;
    uploadedBy: string;
  }) {
    return prisma.medicalDocument.create({
      data: {
        patientId: data.patientId,
        title: data.title,
        category: data.category || 'OTHER',
        fileUrl: data.fileUrl,
        fileName: data.fileName,
        fileSize: data.fileSize,
        mimeType: data.mimeType,
        description: data.description,
        uploadedBy: data.uploadedBy,
      },
    });
  }

  static async getPatientDocuments(patientId: string, category?: DocumentCategory) {
    const where: any = { patientId };
    if (category) {
      where.category = category;
    }
    return prisma.medicalDocument.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
  }

  static async deleteDocument(patientId: string, documentId: string) {
    const doc = await prisma.medicalDocument.findFirst({
      where: { id: documentId, patientId },
    });
    if (!doc) {
      throw { statusCode: 404, message: 'Document not found', code: 'NOT_FOUND' };
    }
    await prisma.medicalDocument.delete({ where: { id: documentId } });
    return true;
  }
}
