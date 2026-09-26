const userModel = require("../models/UserModel");

const getAllUsers = async (req, res) => {
  const users = await userModel.find(); //[]

  res.json({
    message: "user fetched",
    data: users,
  });
};

const getUserById = async (req, res) => {
  const id = req.params.id;

  //db.users.find({_id:id})
  //db.users.findOne({_id:id})
  //const foundUser = await userModel.findOne({_id:id})
  const foundUser = await userModel.findById(id);
  if (foundUser) {
    res.json({
      message: "user found",
      data: foundUser,
    });
  }
  else{
    res.json({
        message:"user not found"
    })
  }
};

const createUser = async(req,res)=>{

  //db.users.insertOne({name:"raj",age:23})
  //userModel.insertOne(req.body)
  const savedUser = await userModel.insertOne(req.body)
  console.log("req.body...",req.body)
  res.json({
    message:"user saved.",
    data:savedUser
  })
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser
};
