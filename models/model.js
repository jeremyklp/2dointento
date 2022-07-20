const { db } =require('../utils/database')
const {DataTypes } = require('sequelize');

const Employement =db.define('registrations', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    entrance: {
        type: DataTypes.DATE,
        allowNull: false
    },
    exit: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'out'
    }
})
module.exports={Employement}