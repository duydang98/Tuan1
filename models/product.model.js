var mongoose = require('mongoose');
//schema dung khai bao nhung gi co trong obj
var productSchema = new mongoose.Schema({

    name: String,
    image: String,
    description: String
});

var Product = mongoose.model('product',productSchema,'products');

module.exports = Product;