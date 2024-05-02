'use strict';

const e = require('express');
const { app } = require('../src/server.js');
const supertest = require('supertest');

const mockRequest = supertest(app);

describe('Test API Server', () => {

  it('should append a timestamp to the request object', async () => {
    let response = await mockRequest.get('/');
    expect(response.headers.rt).toBeDefined();
  });

  it('homepage success', async () => {
    let response = await mockRequest.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World')
  })

  it('response for a single id', async () => {
    let response = await mockRequest.get('/person/abc111');
    expect(response.body.name).toBe('John');
  })

  it('response for a single id', async () => {
    let response = await mockRequest.get('/person/def222');
    expect(response.body.name).toBe('Cathy');
  })

  it('data route success', async () => {
    let response = await mockRequest.get('/person');
    expect(response.status).toBe(200);
  })

  it('broken route success', async () => {
    let response = await mockRequest.get('/broken');
    expect(response.status).toBe(500);
  })

  it('It should return 404 on a bad method', async () => {
    let response = await mockRequest.get('/person-badroute');
    expect(response.status).toBe(404);
});

})
