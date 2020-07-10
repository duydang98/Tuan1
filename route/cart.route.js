var express = require('express');
var router = express.Router();
//require lowdb
var controller = require('../controller/cart.controller');
//var validation = require('../validation/user.validation');
router.get('/add/:productId',controller.addCart);
module.exports = router;