require('dotenv').config();

var express = require('express');
var app = new express();
var db = require('./db.js');
var port = 3000;

var _ = require('underscore');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser("jkhkhkh78972hem"));
app.use(cookieParser());


app.set('view engine', 'pug');
app.set('views', './views');

var userRoute = require('./route/user.route');
var loginRouter = require('./route/auth.route');
var productRouter = require('./route/product.route');
var addToCart = require('./route/cart.route');



 var apiProductRoute = require('./api/route/product.route');
 app.use('/api/product',apiProductRoute);
 var apiUserRoute = require('./api/route/user.route');
 app.use('/api/user',apiUserRoute);

//middleware check cookie
var authMiddleware = require('./middleware/auth.middleware');
var sessionMiddleware = require('./middleware/session.middleware');

app.use(sessionMiddleware);

app.use(express.static('./public')); 

app.get('/',function(req,res){
    res.render('index',{
        name : "Dang Phuc Duy"
    });
 });

app.use('/user',userRoute);
app.use('/auth',loginRouter);
app.use('/product',productRouter);
app.use('/cart',addToCart);



app.listen(port,()=>{console.log("Server Listening on Port " + port)});