

exports.createMovie = (req, res, next) => {
    res.status(200).json({ message: 'Create Movie !'});
};

exports.getMovies = (req, res, next) => {
    res.status(200).json({ message: 'Get All Movies !'});
};

exports.getOneMovie = (req, res, next) => {
    res.status(200).json({ message: 'Get One Movie !'});
};

exports.updateMovie = (req, res, next) => {
    res.status(200).json({ message: 'Update One Movie !'});
};

exports.deleteMovie = (req, res, next) => {
    res.status(200).json({ message: 'Delete Movie !'});
};