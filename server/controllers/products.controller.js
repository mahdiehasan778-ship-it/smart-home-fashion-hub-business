import { Router } from 'express';

const router = Router();

export const getProducts = (req, res) => { res.json([]); };
export const getProductById = (req, res) => { res.json({}); };

router.get('/', getProducts);
router.get('/:id', getProductById);

export default router;
