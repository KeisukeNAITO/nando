'use strict';
const request = require('supertest');
const index = require('../../router/index');

describe('Test for login.js over index.js', () => {
    describe('Unit Test', () => {
        test('POST method for /login', () => {
            return request(index)
                .post('/login')
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                });
        });
        test('DELETE method for /login', () => {
            return request(index)
                .delete('/login')
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                });
        });
    });

    describe('Unit Test for Error', () => {
        test('GET method for /login', () => {
            return request(index)
                .get('/login')
                .then((response) => {
                    expect(response.statusCode).toBe(404);
                });
        });
        test('PUT method for /login', () => {
            return request(index)
                .put('/login')
                .then((response) => {
                    expect(response.statusCode).toBe(404);
                });
        });
    });
});
