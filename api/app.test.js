const request = require('supertest');
const express = require('express');
const typeorm = require("typeorm");
const http = require('http');
const app = express();

const imagesRoutes = require('./routes/images');
const PORT = process.env.port || 3000;

describe('GET /images', () => {
  beforeAll(() => {


  });
  test('It should fetch an array of images', async (done) => {
    // Gets connections from .env file and creates connection
    typeorm.createConnection({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "gallery",
      synchronize: true,
      logging: false,
      entities: [
          require("./entities/Image"),
      ]
    }).then(async (connection) => {
      app.use('/images', imagesRoutes);
      const res = await request(app).get('/images');
      expect(res.body).toEqual(
          expect.arrayContaining(
              [
                expect.objectContaining({
                  createdAt: expect.anything(),
                  updatedAt: expect.anything(),
                  id: expect.anything(),
                  description: expect.anything(),
                  name: expect.anything(),
                  imageUrl: expect.stringMatching('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$')
                })
              ]
          )
      );
      const server = http.createServer(app);
      server.listen(PORT, () => {} );
      done();
    }).catch(error => console.log(error));
    
  });
});
