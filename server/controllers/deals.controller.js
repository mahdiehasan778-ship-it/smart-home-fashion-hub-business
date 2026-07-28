import { Router } from 'express';
import { getDealOfTheDay, getAllDeals } from '../controllers/deals.controller.js';

const router = Router();

router.get('/today', getDealOfTheDay);
router.get('/', getAllDeals);

export default router;