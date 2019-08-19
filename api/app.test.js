import getApp from './app'
const request = require('supertest');

describe('GET /images', () => {
  test('It should fetch an array of images', async (done) => {
    const app = await getApp();
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
