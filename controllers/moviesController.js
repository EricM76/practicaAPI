const db = require('../database/models'); //requiero la base de datos

module.exports = {
    getAll: function(req, res) {
        db.Movie.findAll()
            .then(movies => {
                return res.status(200).json(movies)
            })
    },
    getById: function(req, res) {
        db.Movie.findByPk(req.params.id)
            .then(function(result) {
                return res.status(200).json(result)
            })
    },
    create: function(req, res) {
        db.Movie.create({
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length
            })
            .then(function(result) {
                return res.status(201).json(result)
            })
    }

}