var mongoose = require('mongoose');
//schema dung khai bao nhung gi co trong obj
var userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    avatar: String,
    phone: String
});

var user = mongoose.model('user',userSchema,'users');

module.exports = user;