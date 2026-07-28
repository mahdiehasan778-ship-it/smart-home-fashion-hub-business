import { Router } from 'express';

const router = Router();

export const subscribeNewsletter = (req, res) => { res.json({ message: 'Subscribed' }); };

router.post('/subscribe', subscribeNewsletter);

export default router;
