"use strict";
const express = require('express');
const app = express();
const userRouter=require("./auth/router");
const serverError=require("./middleware/500");
const notFound=require("./middleware/404");
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use(serverError);
app.use("*",notFound);

function start(port){
app.listen(port,()=>{
    console.log(`listening to the port ${port}`)
})
}


module.exports={
app:app,
start:start
}