const request = require('supertest');
const baseURL = 'http://localhost:3000';

// Test '/' route
describe('GET /', () => {

    // Test '/' status response 200
    test('should return 200', async () => {
        const response = await request(baseURL).get('/');
        expect(response.status).toBe(200);
    });

    // Test '/' text response
    test('should return \'This is the home page\'', async () => {
        const response = await request(baseURL).get('/');
        expect(response.text).toEqual('This is the home page.');
    });
});