var express = require('express');
var router = express.Router();
var controller = require('../controller/product.controller');
router.get('/',controller.index);
router.get('/:id',controller.get);
router.post('/',controller.create);
router.delete('/:id',controller.delete);
router.put('/:id',controller.update);
module.exports = router;