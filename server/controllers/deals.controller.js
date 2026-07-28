import { Router } from 'express';

const router = Router();

export const getDealOfTheDay = (req, res) => { res.json(null); };
export const getAllDeals = (req, res) => { res.json([]); };

router.get('/today', getDealOfTheDay);
router.get('/', getAllDeals);

export default router;
