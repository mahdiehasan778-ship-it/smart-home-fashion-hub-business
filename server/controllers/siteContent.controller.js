import { Router } from 'express';

const router = Router();

export const getSiteContent = (req, res) => { res.json({}); };

router.get('/', getSiteContent);

export default router;
