const mongoose = require("mongoose")

const DbConnection = ()=>{


    mongoose.connect("mongodb://127.0.0.1:27017/gnr_node_2026").then(()=>{
        console.log(`db connected !!`)
    }).catch((err)=>{
        console.log(`error while connect db`,err)
    })


}
module.exports = DbConnection