var db = require('../db.js');
//var shortid = require('shortid');
var md5 = require('md5');
module.exports.login = function(req,res){
    res.render("auth/login");
 };

 module.exports.postLogin = function(req,res){
    var email = req.body.email;
    var password = md5 (req.body.password);
    var user = db.get('users').find({email: email}).value();
    if (!user) {
        res.render('auth/login',{
            errors : ['User does not exit.'],
            value : req.body
        });
       
        return;
    }
    if(password !== user.password){
        res.render('auth/login',{
            errors : ['Password does not exit.'],
            value : req.body
        });
        return;
    }

    res.cookie('userid',user.id,{ signed : true });
    res.redirect('/user');
 };