module.exports.postCreate = function(req,res,next){
    //middleware
    //kiem tra du lieu nhap vao 
    var errors = [];
    if(!req.body.name){
        errors.push("Name is required.");
    }

    if(!req.body.phone){
        errors.push("Phone is required.");
    }

    if(errors.length){
        res.render('user/create',{
            errors: errors,
            value : req.body
        })
        return;
    }
    next();
};