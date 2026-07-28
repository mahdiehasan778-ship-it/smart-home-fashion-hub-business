import { Router } from 'express';

const router = Router();

export const getProducts = (req, res) => { res.json([]); };
export const getProductBySlug = (req, res) => { res.json({}); };
export const getProductById = (req, res) => { res.json({}); };

router.get('/', getProducts);
router.get('/:slug', getProductBySlug);

export default router;
