// Require SuperTest and set constants
const request = require('supertest');
const app = require('../app');

// Test 'GET /topic' route
describe ('GET /topic', () => {

    // Test '/topic' status response
    test('should return 302', async () => {
        const response = await request(app)
            .get('/topic')
        expect(response.statusCode).toBe(302);
    });
});

// Test 'POST /topic' route
describe('POST /topic', () => {

    // Test '/topic' status response
    test('should return 302', async () => {
        const topic = {
            topic: "Test: Aaronic Priesthood"
        }
        const response = await request(app)
            .post('/topic')
            .send(topic);
        expect(response.statusCode).toBe(302);
    });
    
    
});

// Test 'PUT /topic/641776a748356ae11ab6f958' route
describe('PUT /topic', () => {

    // Test '/topic/641776a748356ae11ab6f958' status response
    test('should return 302', async () => {
        const topic = {
            topic: "Test: Aaronic Priesthood"
        }
        const response = await request(app)
            .put('/topic/641776a748356ae11ab6f958')
            .send(topic);
        expect(response.statusCode).toBe(302);
    });
});

// Test 'DELETE /topic' route
describe('DELETE /topic/641776a748356ae11ab6f958', () => {

    // Test '/topic' status response
    test('should return 302', async () => {
        const response = await request(app).delete('/topic/641776a748356ae11ab6f958')
        expect(response.statusCode).toBe(302);
    });
});