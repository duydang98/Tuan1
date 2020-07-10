var shortid = require('shortid');
var db = require('../db.js');
module.exports = function(req,res,next){
    if(!req.signedCookies.sessionId){
        var sessionId = shortid.generate();
        res.cookie('sessionId',sessionId,{ signed : true });

        db.get('sessionId').push({
            id: sessionId
            //cart : {}
        }).write();
    }
    
    next();
}