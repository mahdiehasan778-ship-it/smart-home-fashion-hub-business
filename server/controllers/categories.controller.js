import { Router } from 'express';

const router = Router();

export const getCategories = (req, res) => { res.json([]); };

router.get('/', getCategories);

export default router;
