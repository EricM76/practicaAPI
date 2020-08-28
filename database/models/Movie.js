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
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: false

        },
        awards: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false

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