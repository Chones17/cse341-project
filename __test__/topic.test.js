const request = require('supertest');
const baseURL = 'http://localhost:3000';

describe('GET /', () => {

    // Test '/getTopics/' status response
    test('should return 302', async () => {
        const response = await request(baseURL).get('/topic');
        expect(response.status).toBe(302);
    });
});