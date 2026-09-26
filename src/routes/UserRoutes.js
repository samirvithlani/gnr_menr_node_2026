const router = require("express").Router()
const userController = require("../controllers/UserController")

// router.get("/users",(req,res)=>{

// })

router.get("/users",userController.getAllUsers)
router.get("/user/:id",userController.getUserById)
router.post("/user",userController.createUser)
module.exports = router