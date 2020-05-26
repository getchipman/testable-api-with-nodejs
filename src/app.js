const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const database = require('./database');

const app = express();

const configureExpress = () => {
    app.use(bodyParser.json());
    app.use('/', routes);
    app.database = database;

    return app;
};

module.exports = async () => {
    const app = configureExpress();
    await app.database.connect();

    return app;
};