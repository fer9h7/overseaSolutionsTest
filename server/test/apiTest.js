'use strict';

const request = require('supertest');
const app = require('../app');

describe('GET /dates-list', function () {
    it('respond with json containing a list of dates', function (done) {
        request(app)
            .get('/dates-list')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

