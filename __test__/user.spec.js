// Require SuperTest and set constants
const request = require('supertest');
const app = require('../app');

// Test 'GET /user' route
describe ('GET /user', () => {

    // Test '/user' status response
    test('should return 302', async () => {
        const response = await request(app)
            .get('/user')
        expect(response.statusCode).toBe(302);
    });

    // Test '/user/6417c3563cbd11867dced66e' status response
    test('GET should return 302', async () => {
        const response = await request(app).get('/user/6417c3563cbd11867dced66e');
        expect(response.statusCode).toBe(302);
    });
});

// Test 'POST /user' route
describe('POST /user', () => {

    // Test '/user' status response
    test('should return 302', async () => {
        const user = {
            githubId: "12345678"
        }
        const response = await request(app)
            .post('/user')
            .send(user);
        expect(response.statusCode).toBe(302);
    });
    
    
});

// Test 'PUT /user/6417c3563cbd11867dced66e' route
describe('PUT /user', () => {

    // Test '/user/6417c3563cbd11867dced66e' status response
    test('should return 302', async () => {
        const user = {
            githubId: "12345678"
        }
        const response = await request(app)
            .put('/user/6417c3563cbd11867dced66e')
            .send(user);
        expect(response.statusCode).toBe(302);
    });
});

// Test 'DELETE /user' route
describe('DELETE /user/6417c3563cbd11867dced66e', () => {

    // Test '/user' status response
    test('should return 302', async () => {
        const response = await request(app).delete('/user/6417c3563cbd11867dced66e')
        expect(response.statusCode).toBe(302);
    });
});