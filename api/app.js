require('dotenv').config()
const http = require('http');
const express = require('express');
const typeorm = require("typeorm");

const imagesRoutes = require('./routes/images');

const PORT = process.env.port || 3000;
const app = express();

// Gets connections from .env file and creates connection
typeorm.createConnection({
    type: "mysql",
    host: process.env.HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.PASS,
    database: process.env.DB,
    synchronize: true,
    logging: false,
    entities: [
        require("./entities/Image"),
    ]
}).then((connection) => {
    app.use('/images', imagesRoutes);
    app.use('/gallery', express.static("uploadedImages"))
    const server = http.createServer(app);
    server.listen(PORT, () =>
        console.log(`Server is running on http://localhost:${PORT}`)
    );

}).catch(error => console.log(error));

module.exports = app;