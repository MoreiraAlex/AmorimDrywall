const sequelize = require('sequelize')

const db = require('../connection')

const User = db.define('users', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: sequelize.STRING,
        allowNull: false
    },
    password: {
        type:sequelize.STRING,
        allowNull: false
    }
})

// User.sync()
// User.sync({ alter: true })

module.exports = User;