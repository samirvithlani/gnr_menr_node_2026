const router = require("express").Router()
const userController = require("../controllers/UserController")
const testMiddleware = require("../middlewares/TestMiddleware")
const validationMiddleware = require("../middlewares/validatoinMiddleware")
const userValidationSchema = require("../validationSchemas/UserValidationSchema")
// router.get("/users",(req,res)=>{

// })

router.get("/users",userController.getAllUsers)
router.get("/user/:id",userController.getUserById)

//router.post("/user",testMiddleware,userController.createUser)
//router.post("/user",testMiddleware("nodejs"),userController.createUser)

router.post("/user",validationMiddleware(userValidationSchema),userController.createUser)
router.delete("/user/:id",userController.deleteUser)
router.put("/user/:id",userController.updateUser)
//router.put("/addhobby/:id",userController.updateUser)
module.exports = router