// File: backend/routes/analytics.js
import express from 'express';
import axios from 'axios';

const router = express.Router();

// Analytics API Route
router.get('/analytics', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users'); // Example API
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch analytics data' });
  }
});

export default router;