// Require SuperTest and set constants
const request = require('supertest');
const app = require('../app');

// Test 'GET /note' route
describe ('GET /note', () => {

    // Test '/note' status response
    test('should return 302', async () => {
        const response = await request(app)
            .get('/note')
        expect(response.statusCode).toBe(302);
    });

    // Test '/note/64176860583d487a8ef540be' status response
    test('GET should return 302', async () => {
        const response = await request(app).get('/note/64176860583d487a8ef540be');
        expect(response.statusCode).toBe(302);
    });
});

// Test 'POST /note' route
describe('POST /note', () => {

    // Test '/note' status response
    test('should return 302', async () => {
        const note = {
            entryDate: Date("04/05/2023"),
            canon: "Test: Old Testament",
            book: "Test: Genesis",
            chapter: 2,
            verse: 4,
            note: "Test: These are the generations of the heavens..."
        }
        const response = await request(app)
            .post('/note')
            .send(note);
        expect(response.statusCode).toBe(302);
    });
    
    
});

// Test 'PUT /note/64176860583d487a8ef540be' route
describe('PUT /note', () => {

    // Test '/note/64176860583d487a8ef540be' status response
    test('should return 302', async () => {
        const note = {
            entryDate: Date("04/05/2023"),
            canon: "Test: Old Testament",
            book: "Test: Genesis",
            chapter: 2,
            verse: 4,
            note: "Test: These are the generations of the heavens..."
        }
        const response = await request(app)
            .put('/note/64176860583d487a8ef540be')
            .send(note);
        expect(response.statusCode).toBe(302);
    });
});

// Test 'DELETE /note' route
describe('DELETE /note/64176860583d487a8ef540be', () => {

    // Test '/note' status response
    test('should return 404', async () => {
        const response = await request(app).delete('/note/64176860583d487a8ef540be')
        expect(response.statusCode).toBe(302);
    });
});