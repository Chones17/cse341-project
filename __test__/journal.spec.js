// Require SuperTest and set constants
const request = require('supertest');
const app = require('../app');

// Test 'GET /journal' route
describe ('GET /journal', () => {

    // Test '/journal' status response
    test('should return 302', async () => {
        const response = await request(app)
            .get('/journal')
        expect(response.statusCode).toBe(302);
    });

    // Test '/journal/64169a5f8990bf8510ffd7ba' status response
    test('GET should return 302', async () => {
        const response = await request(app).get('/journal/64169a5f8990bf8510ffd7ba');
        expect(response.statusCode).toBe(302);
    });
});

// Test 'POST /journal' route
describe('POST /journal', () => {

    // Test '/journal' status response
    test('should return 302', async () => {
        const journal = {
            title: "Test: Old Testament",
            description: "This is a unit test",
            createDate: Date("04/04/2023")
        }
        const response = await request(app)
            .post('/journal')
            .send(journal);
        expect(response.statusCode).toBe(302);
    });
    
    
});

// Test 'PUT /journal/64169a5f8990bf8510ffd7ba' route
describe('PUT /journal', () => {

    // Test '/journal/64169a5f8990bf8510ffd7ba' status response
    test('should return 302', async () => {
        const journal = {
            title: "Test: Book of Mormon",
            description: "Test: Book of Mormon Study Journal",
            createDate: Date("04/04/2023")
        }
        const response = await request(app)
            .put('/journal/64169a5f8990bf8510ffd7ba')
            .send(journal);
        expect(response.statusCode).toBe(302);
    });
});

// Test 'DELETE /journal' route
describe('DELETE /journal/64169a5f8990bf8510ffd7ba', () => {

    // Test '/journal' status response
    test('should return 302', async () => {
        const response = await request(app).delete('/journal/64169a5f8990bf8510ffd7ba')
        expect(response.statusCode).toBe(302);
    });
});