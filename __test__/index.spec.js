const request = require('supertest');
const app = require('../app');

// Test '/' route
describe('GET /', () => {

    // Test '/' status response
    test('should return 200', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });

    // Test '/' text response
    test('should return \'This is the home page\'', async () => {
        const response = await request(app).get('/');
        expect(response.text).toEqual('This is the home page.');
    });
});

// Test '/login' route
describe('GET /login', () => {

    // Test '/login' status response
    test('should return 200', async () => {
        const response = await request(app).get('/login');
        expect(response.statusCode).toBe(200);
    });
});

// Test '/logout' route
describe('GET /logout', () => {

    // Test '/logout' status response
    test('should return 302', async () => {
        const response = await request(app).get('/logout');
        expect(response.statusCode).toBe(302);
    });
});