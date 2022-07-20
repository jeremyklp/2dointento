const { Sequelize} = require('sequelize');



const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '3203231958',
    port: 5432,
    database: 'entregable1'
})

module.exports = { db };