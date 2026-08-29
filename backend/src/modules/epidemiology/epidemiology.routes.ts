import { Router } from 'express';
import { EpidemiologyController } from './epidemiology.controller';
import { authenticate } from '../../middleware/auth.middleware';

const router = Router();

router.use(authenticate);

router.get('/hedis-dashboard', EpidemiologyController.getHEDISDashboard);

export default router;
