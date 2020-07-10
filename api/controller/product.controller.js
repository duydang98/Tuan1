var Product = require('../../models/product.model');
module.exports.index = async function(req,res){

    var products = await Product.find();
    //console.log(products);
    res.json(products);
 };

 module.exports.create = async function(req,res){
    const Joi = require('@hapi/joi');
     var product = await Product.create(req.body);
     res.json(product);
 }

 module.exports.get = async function(req,res){
     var id = req.params.id;
     var product = await Product.find({_id : id});
     res.json(product);
 };

 module.exports.delete = async function(req,res){
    var id = req.params.id;
    await Product.deleteOne({_id: id});
    var products = await Product.find();
    res.json(products);
 };

 module.exports.update = async function(req,res){
    var id = req.params.id;
    await Product.updateOne({_id: id},req.body);
    var product = await Product.find({_id : id});
    res.json(product);
 }