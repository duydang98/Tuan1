var db = require('../db.js');
var shortid = require('shortid');
var User = require('../models/user.model');
module.exports.index = async function(req,res){

    var users = await User.find();
    res.render("user/index",{
        users: users
    });
 };

 module.exports.search = async function(req,res){
    // lay doi tuong can truy van
    var q = req.query.q;
    var users =  await User.find();
   // var url = req.file.path;
   // console.log(url);
    var matchedUser = users.filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    
    res.render("user/index",{
        users : matchedUser,
        que : q
    });
};

module.exports.create = function(req,res){
    //console.log(req.cookies);
    res.render('user/create');
};

module.exports.postCreate = async function(req,res){


    req.body.avatar = req.file.path.split("\\").slice(1).join('/');
    await User.create(req.body);
    
    res.redirect('/user');
    
};

module.exports.get =function(req,res){
    //var id1 = req.params.id;
    // tim user theo id
    res.render('user/view');
 };
