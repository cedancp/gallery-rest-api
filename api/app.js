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
}).then((connection) => {
    app.use('/images', imagesRoutes);
    app.use('/gallery', express.static("uploadedImages"))
    const server = http.createServer(app);
    server.listen(PORT, () =>
        console.log(`Server is running on http://localhost:${PORT}`)
    );

}).catch(error => console.log(error));

module.exports = app;