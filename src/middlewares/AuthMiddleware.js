const jwt = require("jsonwebtoken")
const secret = "royal"


const authMiddleware = (req,res,next)=>{

    //fetch token from params?? no query ? no body ?? Headers !!
    var token = req.headers.authorization
    if(!token){
        return res.status(401).json({
            message:"token is missing.."
        })
    }

    //token must be a bearer token.. last end
    //..first checj token is Bearer or not and if it is then remove Bearer from string..
    if(!token.startsWith("Bearer ")){
        return res.status(401).json({
            message:"token is not bearer token"
        })
    }

    //remove bearer
    //Bearer lkjjmasmojasisaisnoihjmaioasjiopsjasasiojsoi --> ["Bearer","ljshksaijsaojiojas"]
    token = token.split(" ")[1]
    //now verify blind token with jwt..
    try{

        const decoded = jwt.verify(token,secret)
        //db layer..
        console.log("decoded token = ",decoded)
        next()
    

    }catch(err){

        res.status(401).json({
            message:"invalid token",
            err:err
        })
    }

}
module.exports = authMiddleware

