var Product = require('../models/product.model');
module.exports.index = async function(req,res){

    var products = await Product.find();
    //console.log(products);
    res.render("product/index",{
        products: products
    });
 };

 module.exports.search = async function(req,res){
    var q = req.query.q;
    var products = await Product.find();
    var matChedProducts = products.filter(function(product){
        return product.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });

    res.render('product/index',{
        products: matChedProducts
    });
 };
