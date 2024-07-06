
const Movie = require('./../models/movie');

exports.createMovie = (req, res, next) => {
    const movie = new Movie({
        ...req.body
    });
    movie.save()
    .then( () => { res.status(200).json({ message: 'Objet enregistré' }) } )
    .catch( (error) => {res.status(400).json({ error})} );
};

exports.getMovies = (req, res, next) => {
    Movie.find()
    .then( (movies) => { res.status(200).json({ movies })} )
    .catch( (error) => {res.status(400).json({ error })} );
};

exports.getOneMovie = (req, res, next) => {
    Movie.findOne({ _id: req.params.id })
    .then( (product) => { res.status(200).json({ product }) })
    .catch( (error) => { res.status(404).json(error) });
};

exports.updateMovie = (req, res, next) => {
    Movie.updateOne({ _id: req.params.id }, { ...req.body, _id:req.params.id })
    .then( () => { res.status(200).json({ message: 'Objet mis à jour'})})
    .catch( (error) => { res.status(400).json(error) });
};

exports.deleteMovie = (req, res, next) => {
    Movie.deleteOne({ _id: req.params.id })
    .then( () => { res.status(200).json({ message: 'Objet supprimé' }) })
    .catch( (error) => { res.status(400).json(error) });
};