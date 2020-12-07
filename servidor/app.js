const express = require('express');

const itemsRouter = require('./routes/items');

const app = express();

app.use((req, res, next) => {
    const allDomin = ['http://localhost:3000', 'http://0.0.0.0:3000'];
    const {origin} = req.headers;

    if (allDomin.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, OPTIONS, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use('/static', express.static(__dirname + '/public'));
app.use('/api/items', itemsRouter);

module.exports = app;
