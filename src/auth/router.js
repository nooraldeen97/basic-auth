"use strict";
const express=require("express");
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const {Users}=require("../models/index");
const userRouter=express.Router();
const checkingAuth=require("./middleware/basic")


// Signup Route -- create a new user
// Two ways to test this route with httpie
// echo '{"username":"john","password":"foo"}' | http post :3000/signup
// http post :3000/signup username=john password=foo
userRouter.post('/signin',checkingAuth, signinHandler);

userRouter.post('/signup',signupHandler);
  
  
  // Signin Route -- login with username and password
  // test with httpie
  // http post :3000/signin -a john:foo

async function signupHandler(req, res)  {
    console.log(req.body.password)
    console.log(req.body.username)
    try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      console.log("await bcrypt.hash(req.body.password,10)");
      const record = await Users.create(req.body);
      res.status(201).json(record);
    } catch (e) { res.status(403).send('Error Creating User'); }
  }
  

  async function signinHandler(req, res)  {
    res.status(200).json(req.user);
  
  }


  module.exports=userRouter;