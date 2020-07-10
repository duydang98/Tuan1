var db = require('../db.js');
module.exports.addCart = function(req,res){
    var productId = req.params.productId;
    var sessionId = req.signedCookies.sessionId;
    if(!sessionId){
        res.redirect('/product');
        return;
    }
    var count = db.get('sessionId').find({id: sessionId}).get('cart.' + productId,0);
    db.get('sessionId').find({id: sessionId}).set('cart.' + productId,count+1).write();
    res.redirect('/product')
}