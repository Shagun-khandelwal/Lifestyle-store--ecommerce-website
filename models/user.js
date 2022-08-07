const mongoose = require('mongoose')
const Joi = require('joi')
const jwt = require('jsonwebtoken')
const config = require('config')

const userschema = new mongoose.Schema({
    firstname:{
        type:String,
        minlength:3,
        maxlength:25,
        required:true,
        trim:true
    },
    lastname:{
        type:String,
        minlength:3,
        maxlength:25,
        required:true,
        trim:true
    },
    email:{
        type: String,
        minlength:5,
        maxlength:255,
        unique:true,
        required:true
    },
    password:{
        type: String,
        minlength:8,
        maxlength:1024,
        required:true
    },
    phone:{
        type:Number,
        min:1000000000,
        max:9999999999,
        required:true
    },
    address:{
        type:String,
        min:10,
        max:1000,
        required:true
    },
    city:{
        type:String,
        min:3,
        max:50,
        required:true
    },
    state:{
        type:String,
        min:3,
        max:50,
        required:true
    },
    pincode:{
        type:Number,
        min:100000,
        max:999999,
        required:true
    },
    isAdmin:{
        type: Boolean,
        default:false
    }    
})
userschema.methods.getauthtoken = function(){
    const token = jwt.sign({ _id:this._id, isAdmin: this.isAdmin,firstname: this.firstname,lastname: this.lastname, email: this.email,phone: this.phone,address: this.address, city: this.city,state: this.state,pincode: this.pincode },config.get('jwtprivatekey')) ;
    return token;     
}
const User = mongoose.model("user",userschema);

function validateschema(user){
    const schema = {
        firstname: Joi.string().min(3).max(25).required(),
        lastname: Joi.string().min(3).max(25).required(),
        email: Joi.string().min(5).max(255).email().required(),
        password: Joi.string().min(8).max(25).required(),
        password2: Joi.string().min(8).max(25).required(),
        phone: Joi.number().min(1000000000).max(9999999999).required(),
        address: Joi.string().min(5).max(1000).required(),
        city: Joi.string().min(3).max(25).required(),
        state: Joi.string().min(3).max(40).required(),
        pincode: Joi.number().min(100000).max(999999).required()
    }
    return Joi.validate(user,schema);
}

exports.userschema = userschema;
exports.User = User;
exports.validate = validateschema;