const supertest = require('supertest');
const server = require('./index');
const request = supertest(server);

/**
 * Supertest is used for testing HTTP endpoints in Node.js
 * It allows you to send HTTP requests to your server side code and make assertions about the response
 * We will be using it in tandem with Jest, so instead of relying on supertest assertions, we will use Jest assertions instead
 */

describe('Server Endpoint tests', () => {
    test('GET /message', async () => {
        const response = await request.get('/message');
        expect(response.status).toBe(200);
        expect(response.body.hasOwnProperty('message')).toBe(true);
        expect(response.body.hasOwnProperty('status')).toBe(true);
        expect(response.body.message).toBe('success!');
        expect(response.body.status).toBe(200);
    });
    test('GET Invalid Endpoint', async () => {
        const response = await request.get('/invalidendpoint');
        expect(response.status).toBe(404);
        expect(response.body.hasOwnProperty('message')).toBe(true);
        expect(response.body.hasOwnProperty('status')).toBe(true);
        expect(response.body.message).toBe('Resource not found');
        expect(response.body.status).toBe(404);
    })
})