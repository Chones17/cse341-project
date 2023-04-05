// Require SuperTest and set constants
const request = require('supertest');
const app = require('../app');

// Test 'GET /api-docs' route
describe ('GET /api-docs', () => {

    // Test '/api-docs' status response
    test('should return 200', async () => {
        const response = await request(app)
            .get('/api-docs')
        expect(response.statusCode).toBe(301);
    });
});