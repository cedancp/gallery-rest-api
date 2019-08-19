import 'reflect-metadata';
import "@babel/polyfill";
import http from 'http';
import express from 'express';
import { createConnection, getConnectionOptions } from 'typeorm';

import imagesRoutes from './routes/images'

const PORT = process.eventNames.port || 3000;
const app = express();

// Gets connections from .env file and creates connection
const getApp = async () => {
    await getConnectionOptions().then((connectionOptions) => {
        return createConnection(Object.assign(connectionOptions)).then((connection) => {
            app.use('/images', imagesRoutes);
            const server = http.createServer(app);
            server.listen(PORT, () =>
                console.log(`Server is running on http://localhost:${PORT}`)
            );

        }).catch(error => console.log(error));
    });
    return app;
}

// Initialize Server
getApp();

module.exports = getApp;