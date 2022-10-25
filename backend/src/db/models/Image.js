const sequelize = require('sequelize')

const db = require('../connection')

const Image = db.define('images', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    size: {
        type:sequelize.INTEGER,
        allowNull: false
    },
    key: {
        type:sequelize.STRING,
        allowNull: false
    },
    url: {
        type:sequelize.STRING,
        allowNull: false
    }
})

Image.sync()
// Image.sync({ alter: true })

module.exports = Image;