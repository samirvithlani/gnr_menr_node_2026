const mongoose = require("mongoose")
const Schema = mongoose.Schema // class --> object..

const userModel = new Schema({
    //fileds
})


//db.users.find()
//userModel.find()
module.exports = mongoose.model("users",userModel)

