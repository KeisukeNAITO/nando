'use strict';
const request = require('supertest');
const index = require('../../router/index');

describe('Test for post.js over index.js', () => {
    describe('Unit Test', () => {
        test('POST method for /post', () => {
            return request(index)
                .post('/post')
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                });
        });

        test('GET method for /post/{postId}', () => {
            return request(index)
                .get('/post/post123')
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                });
        });
    });

    describe('Unit Test for Error', () => {
        test('GET method for /post', () => {
            return request(index)
                .get('/post')
                .then((response) => {
                    expect(response.statusCode).toBe(404);
                });
        });
        test('PUT method for /post', () => {
            return request(index)
                .put('/post')
                .then((response) => {
                    expect(response.statusCode).toBe(404);
                });
        });
        test('DELETE method for /post', () => {
            return request(index)
                .delete('/post')
                .then((response) => {
                    expect(response.statusCode).toBe(404);
                });
        });

        test('POST method for /post/{postId}', () => {
            return request(index)
                .post('/post/post123')
                .then((response) => {
                    expect(response.statusCode).toBe(404);
                });
        });
        test('PUT method for /post/{postId}', () => {
            return request(index)
                .put('/post/post123')
                .then((response) => {
                    expect(response.statusCode).toBe(404);
                });
        });
        test('DELETE method for /post/{postId}', () => {
            return request(index)
                .delete('/post/post123')
                .then((response) => {
                    expect(response.statusCode).toBe(404);
                });
        });
    });
});
