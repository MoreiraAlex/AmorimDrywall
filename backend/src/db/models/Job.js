const sequelize = require('sequelize')

const db = require('../connection')

const Job = db.define('jobs', {
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
    desc: {
        type: sequelize.STRING,
        allowNull: false
    },
    img: {
        type:sequelize.STRING,
        allowNull: false
    }
})

Job.sync()
// Job.sync({ alter: true })

module.exports = Job;