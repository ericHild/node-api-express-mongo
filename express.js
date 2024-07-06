const express = require('express');
const movieRoutes = require('./routes/movie');
const mongoose = require('mongoose');

const app = express();
const DB_URL = require('./db_conf');

mongoose.connect(DB_URL, {
    usenewUrlParser: true,
    useUnifiedTopology: true
})
.then( () => { console.log('Connexion à MongoDB réussie !') })
.catch( () => { console.log('Connexion à MongoDB échouée !') });

app.use( (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());

app.use('/api/movies', movieRoutes);

module.exports = app;