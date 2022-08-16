'use strict';
const request = require('supertest');
const index = require('../../router/index');

describe('Test for root.js over index.js', () => {
    describe('Unit Test', () => {
        test('GET method for /', () => {
            return request(index)
                .get('/')
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                });
        });
        test('POST method for /', () => {
            return request(index)
                .post('/')
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                });
        });
        test('PUT method for /', () => {
            return request(index)
                .put('/')
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                });
        });
        test('DELETE method for /', () => {
            return request(index)
                .delete('/')
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                });
        });
    });
    describe('Unit Test for Error', () => {
        test('GET method for /not_exist_path', () => {
            return request(index)
                .get('/notfound')
                .then((response) => {
                    expect(response.statusCode).toBe(404);
                });
        });
        test('POST method for /not_exist_path', () => {
            return request(index)
                .post('/notfound')
                .then((response) => {
                    expect(response.statusCode).toBe(404);
                });
        });
        test('PUT method for /not_exist_path', () => {
            return request(index)
                .put('/notfound')
                .then((response) => {
                    expect(response.statusCode).toBe(404);
                });
        });
        test('DELETE method for /not_exist_path', () => {
            return request(index)
                .delete('/notfound')
                .then((response) => {
                    expect(response.statusCode).toBe(404);
                });
        });
    });
});
