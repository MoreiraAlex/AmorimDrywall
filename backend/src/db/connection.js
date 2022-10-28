const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

sequelize.authenticate()
.then(() => {
    console.log('Banco de dados conectado com sucesso!');
})
.catch(error => console.error('Erro:', error))

module.exports = sequelize