const express = require("express")
//refereance variable crearte..
const app = express()




const PORT = 3000

//server creation.
app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})