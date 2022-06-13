"use strict";

const { Sequelize, DataTypes } = require('sequelize');
const User=require("./user.model");


const sequelize = new Sequelize(process.env.DATABASE_URL,{});




module.exports={
    Users:User(sequelize,DataTypes),
    db:sequelize
}