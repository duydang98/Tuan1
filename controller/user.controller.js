var db = require('../db.js');
var shortid = require('shortid');
var User = require('../models/user.model');
var cloudinary = require('../cloudinary');
var fs = require('fs');
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

    const uploader = async (path) => await cloudinary.uploads(path, 'Images');
  
    const urls = [];
    const files = req.files;
      for (const file of files) {
        const { path } = file;
        const newPath = await uploader(path)
        urls.push(newPath)
        fs.unlinkSync(path)
      }

      req.body.avatar = "image";
        await User.create(req.body);

      res.status(200).json({
        message: 'images uploaded successfully',
        data: urls,
        user: req.body
      })
  
 
    
    //res.redirect('/user');
    
};

module.exports.get = async function(req,res){
    var id1 = req.params.id;
    // tim user theo id
    var user  = await User.find({_id: id1});
    res.render('user/view',{
        user: user
    });
 };
