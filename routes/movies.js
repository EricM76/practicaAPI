const express = require('express');
const router = express.Router();

const controller = require('../controllers/moviesController')

router.get('/', controller.getAll); //---> devuelve todas las peliculas
router.post('/create', controller.create); //---> permite crear una pelicula

router.get('/:id', controller.getById); //---> devuelve una pelicula segun parametro

module.exports = router