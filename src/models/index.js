"use strict";

const { Sequelize, DataTypes } = require('sequelize');
const User=require("./user.model");

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;


let sequelizeOptions =
    process.env.NODE_ENV === "production"
        ? {
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false,
                },
            },
        }
        : {};


const sequelize = new Sequelize(DATABASE_URL,sequelizeOptions);

module.exports={
    Users:User(sequelize,DataTypes),
    db:sequelize
}