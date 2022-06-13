'use strict';

// 3rd Party Resources
const express = require('express');
const app=express();
require("dotenv").config();
const server=require("./src/server");
const port=process.env.PORT||3002;
const {db}=require("./src/models/index");
// Prepare the express app
// const app = express();

// Process JSON input and put the data on req.body


// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

// Create a Sequelize model



// make sure our tables are created, start up the HTTP server.
db.sync()
  .then(() => {
    server.start(port);
}).catch(e => {
    console.error('Could not start server', e.message);
  });