const { Sequelize, DataTypes } = require("sequelize");

const db = require("../dbsq");

const Product = db.define('todos',
    {
        title: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.BOOLEAN,
        }
    },
    {
        freezeTableName: true,
    }
);

module.exports = Product;
