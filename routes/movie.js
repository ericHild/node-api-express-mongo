const express = require('express');

const router = express.Router();

const movieController = require('./../controllers/movie')

// CREATE
router.post('/', movieController.createMovie);

// READ
router.get('/', movieController.getMovies);
router.get('/:id', movieController.getOneMovie);

// UPDATE
router.put('/:id', movieController.updateMovie);

// DELETE
router.delete('/:id', movieController.deleteMovie);

module.exports = router;

