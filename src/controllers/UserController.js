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

module.exports = {
  getAllUsers,
  getUserById,
};
