const app = require('./app');
const request = require('supertest');

describe('GET /', () => {
  test('It should fetch test', async () => {
    const res = await request(app).get('/');
    expect(res.body).toEqual({
        message: "test"
    });
  });
});
