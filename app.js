const express = require("express");
//refereance variable crearte..
const app = express();

//localhost:3000/test
app.get("/test", (req, res) => {
  console.log("test api called...");
  res.send("test api called....");
});

const user = {
  id: 1,
  name: "amit",
  age: 23,
  status: true,
};

//localhost:3000/user
app.get("/user", (req, res) => {
  //res.json(user)
  //res.send(user)

  res.json({
    data: user,
    message: "user fetched..",
  });
});

const users =[
    {id:1,name:"amit",age:23},
    {id:2,name:"raj",age:25},
    {id:3,name:"parth",age:21},
    {id:4,name:"ajay",age:23},
]

app.get("/users",(req,res)=>{
    res.json({
        data:users,
        message:"users fetched !!"
    })
})


const PORT = 3000;

//server creation.
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
