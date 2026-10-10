const validationMiddleware =(schema)=> (req,res,next)=>{
    
    try{
        schema.parse(req.body) //no match...
        next()
    }catch(err){
        res.json({
            message:"error",
            err:err
        })
    }
}
module.exports = validationMiddleware