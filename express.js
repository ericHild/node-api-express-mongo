const express = require('express');

const app = express();

const movieRoutes = require('./routes/movie');

app.use('/api/movies', movieRoutes);

module.exports = app;