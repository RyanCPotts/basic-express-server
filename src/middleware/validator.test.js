// // ChatGPT did a lot of this.

// const request = require('supertest');
// const { app } = require('../server');

// describe('GET /person', () => {
//   test('It should return 400 if name property is missing in query string', async () => {
//     const response = await request(app).get('/person');
//     expect(response.status).toBe(400);
//     expect(response.body.error).toBe('Name property missing in query string');
//   });

//   test('It should return 200 and all data if name property is present in query string', async () => {
//     const response = await request(app).get('/person?name=test');
//     expect(response.status).toBe(200);
//     expect(response.body).toEqual({
//       abc111: { name: "John" },
//       def222: { name: "Cathy" },
//       ghi333: { name: "Zachary" },
//       jkl444: { name: "Allie" },
//     });
//   });
// });

// describe('GET /person/:id', () => {
//   test('It should return 200 and the specified record if the ID exists', async () => {
//     const response = await request(app).get('/person/abc111');
//     expect(response.status).toBe(200);
//     expect(response.body).toEqual({ name: "John" });
//   });

//   test('It should return 404 if the ID does not exist', async () => {
//     const response = await request(app).get('/person/xyz999');
//     expect(response.status).toBe(404);
//     expect(response.body.error).toBe('Record Not Found');
//   });
// });

// // describe('GET /', () => {
// //   test('It should return 200 with "Hello World"', async () => {
// //     const response = await request(app).get('/');
// //     expect(response.status).toBe(200);
// //     expect(response.text).toBe('Hello World');
// //   });
// // });

// // describe('GET /broken', () => {
// //   test('It should return 500 with "We have a problem"', async () => {
// //     const response = await request(app).get('/broken');
// //     expect(response.status).toBe(500);
// //     expect(response.text).toBe('We have a problem');
// //   });
// // });
