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


//params:

//localhost:3000/student/101 : valid
//http://localhost:3000/student : not valid
//http://localhost:3000/student/101/102 : not valid
// app.get("/student/:id",(req,res)=>{
//     console.log("params",req.params)
//     console.log("id = ",req.params.id)

//     res.json({
//         message:"student fetched..",
//         id:req.params.id
//     })

// })

const students = [
    {id:1,name:"raj",marks:23},
    {id:2,name:"kunal",marks:24},
    {id:3,name:"parth",marks:25},
    {id:4,name:"jay",marks:20},
]

//localhost:3000/student/101
app.get("/student/:id",(req,res)=>{

    const foundStudent = students.find((stu)=>stu.id == req.params.id)
    if(foundStudent){
        res.json({
            message:"student found",
            data:foundStudent
        })
    }else{
        res.json({
            message:"student not found",
            
        })
    }

})





const PORT = 3000;

//server creation.
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
