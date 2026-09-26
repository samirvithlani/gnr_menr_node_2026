const mongoose = require("mongoose")
const Schema = mongoose.Schema // class --> object..

const userModel = new Schema({
    //fileds
    name:{
        type:String
    },
    age:{
        type:Number
    },
    bloodGroup:{
        type:String,
        enum:["A+","A-","B+","B-"]
    },
    email:{
        type:String,
        unique:true
    },
    hobbies:[{
        type:String
    }],
    status:{
        type:Boolean,
        default:true
    }
})


//db.users.find()
//userModel.find()
module.exports = mongoose.model("users",userModel)

