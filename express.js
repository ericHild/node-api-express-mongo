const express = require('express');

const app = express();

app.get('/api/products', (req, res, next) => {
    res.status(200).json({ message: 'PRODUCTS API'});
    next();
})

module.exports = app;