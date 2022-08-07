const mongoose = require('mongoose')
const express = require('express')
const router = express.Router();
const { User, validate }  = require('../models/user')
const _ = require('lodash')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



router.get("/",(req,res)=>{
    res.render('register.pug')
})
router.post("/",async (req,res)=>{
   const { error } = validate(req.body);
   if( error ) return res.status(400).send(error.details[0].message);

   if(req.body.password != req.body.password2) return res.status(400).send('password does not match');

   const result = await User.findOne({email: req.body.email});
   if(result) return res.status(400).send('Email already registered');

   let user =  new User({
       firstname: req.body.firstname,
       lastname: req.body.lastname,
       email: req.body.email,
       password: req.body.password,
       phone: req.body.phone,
       address: req.body.address,
       city: req.body.city,
       state : req.body.state,
       pincode: req.body.pincode
   })
   const salt = await bcrypt.genSalt(10);
   user.password = await bcrypt.hash(user.password,salt);
   await user.save();
   res.status(200).render('login.pug')
})

module.exports =router