module.exports = function(sequelize, dataTypes) {

    let alias = "Movie";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: "El campo title no puede ser nulo"
                },
                notEmpty: {
                    args: true,
                    msg: "Tenés que escribir el titulo de la película"
                }
            }
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: "El campo rating no puede ser nulo"
                },
                notEmpty: {
                    args: true,
                    msg: "Tenés que escribir el rating de la película"
                }
            }
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: false

        },
        awards: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: "El campo awards no puede ser nulo"
                },
                notEmpty: {
                    args: true,
                    msg: "Tenés que escribir el awards de la película"
                }
            }

        },
        length: dataTypes.INTEGER(10).UNSIGNED
    }

    let config = {
        tableName: "Movies",
        timestamps: true,
        underscored: true
    }

    let Movie = sequelize.define(alias, cols, config)
    return Movie
}