const mongoose = require('mongoose')
const express = require('express')
const app = express();
const path = require('path')
require('express-async-errors')

//routes loaded
const user = require('./routes/user')
const login = require('./routes/login')


mongoose.connect('mongodb://localhost/lifestyle-store')
    .then(()=> console.log('CONNECTION TO MONGODB DATABASE SUCCESSFUL.'))
    .catch(()=> console.error('AN ERROR OCCURED WHILE CONNECTING TO THE DATABASE'))

app.use('/static',express.static('static'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes
app.use("/register.pug",user)
app.use("/login.pug",login)



app.get("/",(req,res)=>{
    res.render('index.pug')
})
app.get("/index.pug",(req,res)=>{
    res.render('index.pug')
})

app.get("/cart.pug",(req,res)=>{
    res.render('cart.pug')
})
app.get("/products.pug",(req,res)=>{
    res.render('products.pug')
})

app.get("/setting.pug",(req,res)=>{
    res.render('setting.pug')
})
app.get("/productdetail1.pug",(req,res)=>{
    res.render('productdetail1.pug')
})
app.get("/productdetail2.pug",(req,res)=>{
    res.render('productdetail2.pug')
})
app.get("/productdetail3.pug",(req,res)=>{
    res.render('productdetail3.pug')
})
app.get("/productdetail4.pug",(req,res)=>{
    res.render('productdetail4.pug')
})
app.get("/productdetail5.pug",(req,res)=>{
    res.render('productdetail5.pug')
})
app.get("/productdetail6.pug",(req,res)=>{
    res.render('productdetail6.pug')
})
app.get("/productdetail7.pug",(req,res)=>{
    res.render('productdetail7.pug')
})
app.get("/productdetail8.pug",(req,res)=>{
    res.render('productdetail8.pug')
})
app.get("/productdetail9.pug",(req,res)=>{
    res.render('productdetail9.pug')
})
app.get("/productdetail10.pug",(req,res)=>{
    res.render('productdetail10.pug')
})
app.get("/productdetail11.pug",(req,res)=>{
    res.render('productdetail11.pug')
})
app.get("/productdetail12.pug",(req,res)=>{
    res.render('productdetail12.pug')
})


let port = process.env.PORT || 5000; 
app.listen(port,()=>{
        console.log(`SERVER LISTEN AT PORT ${port}`)
})

