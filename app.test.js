const request = require('supertest');
const app = require('./app');

describe('API Endpoints', () => {
  describe('GET /health', () => {
    it('should return healthy status', async () => {
      const res = await request(app).get('/health');
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('status', 'healthy');
      expect(res.body).toHaveProperty('timestamp');
    });
  });

  describe('GET /api/hello', () => {
    it('should return hello message', async () => {
      const res = await request(app).get('/api/hello');
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('message');
      expect(res.body.message).toBe('Hello from CI/CD project! Automation is awesome!');
    });
  });

  describe('GET /api/users', () => {
    it('should return list of users', async () => {
      const res = await request(app).get('/api/users');
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('users');
      expect(Array.isArray(res.body.users)).toBe(true);
      expect(res.body.users.length).toBe(3);
    });

    it('should return users with correct structure', async () => {
      const res = await request(app).get('/api/users');
      const user = res.body.users[0];
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('name');
      expect(user).toHaveProperty('email');
    });
  });

  describe('POST /api/calculate', () => {
    it('should add two numbers', async () => {
      const res = await request(app)
        .post('/api/calculate')
        .send({ a: 5, b: 3, operation: 'add' });
      expect(res.statusCode).toBe(200);
      expect(res.body.result).toBe(8);
    });

    it('should subtract two numbers', async () => {
      const res = await request(app)
        .post('/api/calculate')
        .send({ a: 10, b: 4, operation: 'subtract' });
      expect(res.statusCode).toBe(200);
      expect(res.body.result).toBe(6);
    });

    it('should multiply two numbers', async () => {
      const res = await request(app)
        .post('/api/calculate')
        .send({ a: 6, b: 7, operation: 'multiply' });
      expect(res.statusCode).toBe(200);
      expect(res.body.result).toBe(42);
    });

    it('should divide two numbers', async () => {
      const res = await request(app)
        .post('/api/calculate')
        .send({ a: 20, b: 4, operation: 'divide' });
      expect(res.statusCode).toBe(200);
      expect(res.body.result).toBe(5);
    });

    it('should handle division by zero', async () => {
      const res = await request(app)
        .post('/api/calculate')
        .send({ a: 10, b: 0, operation: 'divide' });
      expect(res.statusCode).toBe(200);
      expect(res.body.result).toBe('Cannot divide by zero');
    });

    it('should return error for missing fields', async () => {
      const res = await request(app)
        .post('/api/calculate')
        .send({ a: 5 });
      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty('error');
    });

    it('should return error for invalid operation', async () => {
      const res = await request(app)
        .post('/api/calculate')
        .send({ a: 5, b: 3, operation: 'invalid' });
      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty('error');
    });
  });

  describe('GET /api/time', () => {
  it('should return current time', async () => {
    const res = await request(app).get('/api/time');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Current time');
    expect(res.body).toHaveProperty('time');
  });
});

  describe('404 Handler', () => {
    it('should return 404 for unknown routes', async () => {
      const res = await request(app).get('/unknown/route');
      expect(res.statusCode).toBe(404);
      expect(res.body).toHaveProperty('error', 'Route not found');
    });
  });
});