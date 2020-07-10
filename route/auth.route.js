var express = require('express');
var router = express.Router();
//require lowdb
var controller = require('../controller/auth.controller');
//var validation = require('../validation/user.validation');
router.get('/login',controller.login);
router.post('/login',controller.postLogin);
module.exports = router;