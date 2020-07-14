const Joi = require('@hapi/joi');
var express = require('express');
const validator = require('express-joi-validation').createValidator({});

const querySchema = Joi.object({
  q: Joi.string().required()
});

const createSchema = Joi.object({
    name: Joi.string().required()
  });

var router = express.Router();
// multer
var upload = require('../multer');
//require lowdb
var controller = require('../controller/user.controller');
var validate = require('../api/validate/user.validate');



router.get('/',controller.index);
 
 //Query parameters
router.get('/search', validator.query(querySchema), controller.search);
//cookie
router.get('/cookie',function(req,res,next){
    res.cookie('user-id',12345);
    res.send('set cookie');
});

/// method post
router.get('/create',controller.create);

router.post('/create',
    upload.array('avatar'),
    validator.body(validate.userschema),
    controller.postCreate
    );
//route params
router.get('/:id',controller.get);
 

module.exports = router;