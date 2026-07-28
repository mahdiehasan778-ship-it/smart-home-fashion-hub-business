import express from 'express';
import cors from 'cors';

// Routes Import
import blogRoutes from './routes/blog.routes.js';
import categoriesRoutes from './routes/categories.routes.js';
import dealsRoutes from './routes/deals.routes.js';
import newsletterRoutes from './routes/newsletter.routes.js';
import productsRoutes from './routes/products.routes.js';
import siteContentRoutes from './routes/siteContent.routes.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/blogs', blogRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/deals', dealsRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/site-content', siteContentRoutes);

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is healthy' });
});

export default app;