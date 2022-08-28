'use strict';
const request = require('supertest');
const index = require('../../router/index');

describe('Test for user.js over index.js', () => {
    describe('Unit Test', () => {
        test('GET method for /user/{userId}', () => {
            return request(index)
                .get('/user/user123')
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                });
        });
        test('DELETE method for /user/{userId}', () => {
            return request(index)
                .delete('/user/user123')
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                });
        });
        test('GET method for /user/{userId}/posts', () => {
            return request(index)
                .get('/user/user123')
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                });
        });
    });

    describe('Unit Test for Error', () => {
        test('GET method for /user', () => {
            return request(index)
                .get('/user')
                .then((response) => {
                    expect(response.statusCode).toBe(404);
                });
        });
        test('POST method for /user', () => {
            return request(index)
                .post('/user')
                .then((response) => {
                    expect(response.statusCode).toBe(404);
                });
        });
        test('PUT method for /user', () => {
            return request(index)
                .put('/user')
                .then((response) => {
                    expect(response.statusCode).toBe(404);
                });
        });
        test('DELETE method for /user', () => {
            return request(index)
                .delete('/user')
                .then((response) => {
                    expect(response.statusCode).toBe(404);
                });
        });

        test('POST method for /user/{userId}', () => {
            return request(index)
                .post('/user/user123')
                .then((response) => {
                    expect(response.statusCode).toBe(404);
                });
        });
        test('PUT method for /user/{userId}', () => {
            return request(index)
                .put('/user/user123')
                .then((response) => {
                    expect(response.statusCode).toBe(404);
                });
        });

        test('POST method for /user/{userId}/posts', () => {
            return request(index)
                .post('/user/user123/posts')
                .then((response) => {
                    expect(response.statusCode).toBe(404);
                });
        });
        test('PUT method for /user/{userId}/posts', () => {
            return request(index)
                .put('/user/user123/posts')
                .then((response) => {
                    expect(response.statusCode).toBe(404);
                });
        });
        test('DELETE method for /user/{userId}/posts', () => {
            return request(index)
                .delete('/user/user123/posts')
                .then((response) => {
                    expect(response.statusCode).toBe(404);
                });
        });
    });
});
