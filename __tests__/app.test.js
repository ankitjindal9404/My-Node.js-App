const request = require('supertest');
const { app, server } = require('../app'); // Import app and server

describe('GET /', () => {
  it('should return Hello, World!', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});

// Close the server after tests
afterAll((done) => {
  server.close(done);  // Use the 'server' instance exported from app.js
});
