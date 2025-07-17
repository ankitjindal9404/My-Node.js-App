const request = require('supertest');
const { app, server } = require('../app'); // Import app and server

describe('GET /', () => {
  it('should return Hello, World!', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});

// Close the server after tests, but only if the server is defined
afterAll((done) => {
  if (server) {
    server.close(done);  // Close the server if it's running
  } else {
    done();  // If there's no server (e.g., in serverless), just call done
  }
});
