import { Router } from 'express';
import { MedicalKnowledgeBaseController } from './medicalKb.controller';
import { authenticate } from '../../middleware/auth.middleware';

const router = Router();
router.use(authenticate);

router.get('/icd10', MedicalKnowledgeBaseController.searchICD10);
router.get('/snomed', MedicalKnowledgeBaseController.searchSNOMED);
router.get('/drugs', MedicalKnowledgeBaseController.searchDrugs);
router.get('/protocols', MedicalKnowledgeBaseController.getProtocols);
router.get('/labs', MedicalKnowledgeBaseController.getLabCatalog);
router.get('/oncology', MedicalKnowledgeBaseController.getOncologyStaging);

export default router;
