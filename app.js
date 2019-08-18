const express = require('express');
const app = express();

const imagesRoutes = require('./api/routes/images');

app.use('/images', imagesRoutes);

module.exports = app;