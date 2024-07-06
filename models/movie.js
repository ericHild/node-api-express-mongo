const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title: { type: String },
    description: { type: String },
    /*genres: { type: [String] },
    cast: { type: [String] },    
    languages: { type: Number },
    released: { type: Date },
    directors: { type: String },
    writers: { type: [String] },
    year: { type: Number },
    countries: { type: [String] },
    type: { type: [String] },*/
});

module.exports = mongoose.model('Movie', movieSchema);

