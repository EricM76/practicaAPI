const express = require('express');
const router = express.Router();

const controller = require('../controllers/genresController')

router.get('/', controller.getAll); //---> devuelve todos los generos
router.post('/create', controller.create); //---> permite crear un genero
router.get('/:id', controller.getById); //---> devuelve el genero segun parametro

module.exports = router