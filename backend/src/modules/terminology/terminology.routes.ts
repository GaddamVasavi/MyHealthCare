import { Router } from 'express';
import { TerminologyController } from './terminology.controller';
import { authenticate } from '../../middleware/auth.middleware';

const router = Router();

router.use(authenticate);

router.get('/icd10', TerminologyController.searchICD10);
router.get('/cpt', TerminologyController.searchCPT);
router.get('/loinc', TerminologyController.searchLOINC);
router.get('/rxnorm', TerminologyController.searchRxNorm);

export default router;
