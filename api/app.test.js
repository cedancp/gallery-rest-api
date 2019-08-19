const request = require('supertest');
const express = require('express');
const app = express();

const imagesRoutes = require('./routes/images');

describe('GET /images', () => {
  beforeAll(() => {
    
  });
  test('It should fetch an array of images', async (done) => {
    app.use('/images', imagesRoutes);
    const res = await request(app).get('/images');
    expect(res.body).toEqual(
        expect.arrayContaining(
            [
                expect.objectContaining({
                    imageUrl: expect.stringMatching('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$')
                })
            ]
        )
    );
    done();
  });
});
