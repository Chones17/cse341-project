// Require SuperTest and set constants
const request = require('supertest');
const app = require('../app');

// Test 'GET /auth/github' route
describe ('GET /auth/github', () => {

    // Test '/auth/github' status response
    test('should return 302', async () => {
        const response = await request(app)
            .get('/auth/github')
        expect(response.statusCode).toBe(302);
    });

    // Test '/auth/github/callback' status response
    test('GET should return 302', async () => {
        const response = await request(app).get('/auth/github/callback');
        expect(response.statusCode).toBe(302);
    });
});
