const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Simple API endpoints
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from CI/CD project! Automation is awesome!' });
});

app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' }
  ];
  res.json({ users });
});

app.post('/api/calculate', (req, res) => {
  const { a, b, operation } = req.body;
  
  if (a === undefined || b === undefined || !operation) {
    return res.status(400).json({ error: 'Missing required fields: a, b, operation' });
  }
  
  let result;
  switch (operation) {
    case 'add':
      result = a + b;
      break;
    case 'subtract':
      result = a - b;
      break;
    case 'multiply':
      result = a * b;
      break;
    case 'divide':
      result = b !== 0 ? a / b : 'Cannot divide by zero';
      break;
    default:
      return res.status(400).json({ error: 'Invalid operation' });
  }
  
  res.json({ result });
});

app.get('/api/time', (req, res) => {
  res.json({ 
    message: 'Current time',
    time: new Date().toLocaleString()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Only start server if not in test mode
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;