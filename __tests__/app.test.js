// __tests__/app.test.js
const request = require('supertest');
const { app, server } = require('../app'); // Import both app and server

beforeAll(() => {
  // No need to manually start the server, it's already running in app.js
});

afterAll((done) => {
  // Close the server after the tests finish
  server.close(done);
});

describe('GET /', () => {
  it('should return Hello, World!', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});
