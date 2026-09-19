const getAllUsers = (req,res)=>{

    
    res.json({
        message:"user fetched"
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