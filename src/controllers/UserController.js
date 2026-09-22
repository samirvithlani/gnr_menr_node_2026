const userModel = require("../models/UserModel")

const getAllUsers = async(req,res)=>{

    const users = await userModel.find() //[]
    
    res.json({
        message:"user fetched",
        data:users
    })

}

const getUserById = (req,res)=>{
    const id = req.params.id
    res.json({
        message:"user by id",
        data:id
    })
}

module.exports ={
 getAllUsers,
 getUserById   
}