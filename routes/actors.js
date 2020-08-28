const express = require('express');
const router = express.Router();

const controller = require('../controllers/actorsController')

router.get('/', controller.getAll); //---> devuelve todos los actores
router.post('/create', controller.create); //---> permite crear un actor
router.put('/update', controller.update); //---> permite acutalizar los datos de un actor

router.get('/:id', controller.getById); //---> devuelve el actor segun parametro

module.exports = router