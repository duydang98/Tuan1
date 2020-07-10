var express = require('express');
var router = express.Router();
var controller = require('../controller/user.controller');
var validate = require('../validate/user.validate');
const validator = require('express-joi-validation').createValidator({});

router.get('/',controller.index);
router.get('/:id',controller.findUser);
router.post('/',validator.body(validate.userschema),controller.create);
router.delete('/:id',controller.delete);
router.put('/:id',controller.update);
module.exports = router;