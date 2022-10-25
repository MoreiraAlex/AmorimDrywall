const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.AMORIM_DRYWALL_DB_DATABASE, process.env.AMORIM_DRYWALL_DB_USER, process.env.AMORIM_DRYWALL_DB_PASS, {
    host: process.env.AMORIM_DRYWALL_DB_HOST,
    dialect: 'mysql'
});

sequelize.authenticate()
.then(() => {
    console.log('Banco de dados conectado com sucesso!');
})
.catch(error => console.error('Erro:', error))

module.exports = sequelize