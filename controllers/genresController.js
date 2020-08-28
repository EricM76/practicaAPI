const db = require('../database/models'); //requiero la base de datos

module.exports = {
    getAll: function(req, res) {
        db.Genre.findAll()
            .then(genres => {
                return res.status(200).json(genres)
            })
    },
    getById: function(req, res) {
        db.Genre.findByPk(req.params.id)
            .then(function(genre) {
                return res.status(200).json(genre)
            })
    },
    create: function(req, res) {
        db.Genre.create({
                name: req.body.name,
                ranking: req.body.ranking,
                active: req.body.active
            })
            .then(function(result) {
                return res.status(201).json(result)
            })
            .catch(function(err) {
                return res.status(400).send(err)
            })
    }

}