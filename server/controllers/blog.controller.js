import { Router } from 'express';
import { getBlogPosts } from '../controllers/blog.controller.js';

const router = Router();

router.get('/', getBlogPosts);

export default router;