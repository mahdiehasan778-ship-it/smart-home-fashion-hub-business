import 'dotenv/config';
import app from './app.js'; // app.js ইমপোর্ট করা হলো যাতে সব API Routes কাজ করে
import express from 'express';
import path from 'path';

const PORT = process.env.PORT || 5000;

// client/dist ফোল্ডারকে static হিসেবে সেট করা
app.use(express.static(path.join(process.cwd(), 'client/dist')));

// অন্য সব রুট/পেজের জন্য index.html ফাইল রিটার্ন করা
app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'client/dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Smart Home & Fashion Hub API running on http://localhost:${PORT}`);
  console.log(`🏥 Health check: http://localhost:${PORT}/api/health`);
});