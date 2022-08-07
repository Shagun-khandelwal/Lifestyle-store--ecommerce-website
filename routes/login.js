const express = require('express');
const Joi = require('joi');
const { User } = require('../models/user');
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { getdetails } = require('../refrencingtoken')

function validate(login){
    const schema = {
        email : Joi.string().min(5).max(55).email().required(),
        password: Joi.string().min(8).max(20).required()
    }
    return Joi.validate(login,schema);
}

router.get("/",(req,res)=>{
    res.render('login.pug')
})
router.post("/",async (req,res)=>{
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const user = await User.findOne({email : req.body.email})
    if(!user) return res.status(400).send('Email or password invalid')

    const validpassword = await bcrypt.compare(req.body.password,user.password)
    if(!validpassword) return res.status(400).send('Email or password invalid')

    const token = user.getauthtoken()
    const data = getdetails(token)
    console.log(data)

    res.status(200).render('products.pug',{firstname:JSON.stringify(data.firstname),lastname: data.lastname,email: data.email,phone: data.email,address: data.address,city: data.city, state: data.state,pincode: data.pincode})


})

module.exports = router