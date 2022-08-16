'use strict';
const request = require('supertest');
const index = require('../../router/index');

describe('Test for index.js', () => {
    describe('Integration Test', () => {
        test('GET method for /', () => {
            return request(index)
                .get('/')
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                });
        });
    });
});
