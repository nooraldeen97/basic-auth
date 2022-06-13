"use strict";

function notFoundErrorHandler(req,res,next){
    res.status(404).json({
        code:404,
        massage:`Page Not Found !!!`
    })
}


module.exports=notFoundErrorHandler;