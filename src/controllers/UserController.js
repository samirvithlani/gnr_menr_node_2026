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
  } else {
    res.json({
      message: "user not found",
    });
  }
};

const createUser = async (req, res) => {
  //db.users.insertOne({name:"raj",age:23})
  //userModel.insertOne(req.body)
  const savedUser = await userModel.insertOne(req.body);
  console.log("req.body...", req.body);
  res.json({
    message: "user saved.",
    data: savedUser,
  });
};

const deleteUser = async (req, res) => {
  //db.users.deleteOne({_id:"suihasou9009asjsan"})
  //userModel.deleteOne({_id:"suihasou9009asjsan"})
  const id = req.params.id;

  try {
    const userAfterDelete = await userModel.findByIdAndDelete(id);
    if (userAfterDelete) {
      res.json({
        message: "user deleted",
      });
    } else {
      res.json({
        message: "user not found to delete",
      });
    }
  } catch (err) {
    res.json({
      message: "error while deleting user !!",
      err: err,
    });
  }
};

const updateUser = async (req, res) => {
  //db.users.updateOne({_id:"shsshhshs"},{$set:{name:"",age:""}})
  const id = req.params.id;
  const data = req.body;

  try {
    //const userAfterUpdate = await userModel.findByIdAndUpdate(id, data);
    const userAfterUpdate = await userModel.findByIdAndUpdate(id, data,{new:true});
    if (userAfterUpdate) {
      res.json({
        message: "user updated",
        data:userAfterUpdate
      });
    } else {
      res.json({
        messsage: "user not found to update",
      });
    }
  } catch (err) {
    res.json({
      message: "error while updating user",
      err: err,
    });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser
};
