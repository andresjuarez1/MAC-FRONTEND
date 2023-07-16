const sequelize = require('../helpers/db');
const { DataTypes } = require('sequelize');

const users = sequelize.define("users", {

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pwd: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    timestamps: false
});

module.exports=users