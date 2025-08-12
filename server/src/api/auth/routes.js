// Stub files for the API routes
// These will be placeholder files to satisfy the express loader

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Auth API endpoint' });
});

module.exports = router;
