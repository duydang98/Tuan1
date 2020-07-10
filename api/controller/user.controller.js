var User = require('../../models/user.model');

module.exports.index = async function(req,res){

    var users = await User.find();
    
    res.json(users);
 };

 module.exports.findUser = async function(req,res){
    var id = req.params.id;

    var users = await User.find({_id: id});
    res.json(users);
 };
 module.exports.create = async function(req,res){
     await User.create(req.body);
     var users = await User.find();
     res.json(users);
 }

 module.exports.delete = async function(req,res){
     var id = req.params.id;

    await User.deleteOne({_id: id});

    var users = await User.find();
    res.json(users);
}
module.exports.update = async function(req,res){
    var id = req.params.id;
   await User.updateOne({_id: id},req.body);
   var users = await User.find({_id: id});
   res.json(users);
}