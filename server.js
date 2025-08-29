const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Import the BFHL logic
const bfhlHandler = require('./api/bfhl.js');

// Routes
app.post('/bfhl', (req, res) => {
  bfhlHandler(req, res);
});

app.get('/bfhl', (req, res) => {
  bfhlHandler(req, res);
});

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'BFHL API is running!',
    endpoints: {
      'POST /bfhl': 'Process array data',
      'GET /bfhl': 'Get operation code'
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 BFHL API server running on port ${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/`);
  console.log(`🔗 API endpoint: http://localhost:${PORT}/bfhl`);
});

module.exports = app;
