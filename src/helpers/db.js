require('dotenv').config()

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_EMAIL, process.env.DB_PWD, {
    host: process.env.DB_HOST,
    dialect:  'mysql'
});


module.exports=sequelize;