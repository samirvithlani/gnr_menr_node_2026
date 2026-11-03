const router = require("express").Router()
const userController = require("../controllers/UserController")
const testMiddleware = require("../middlewares/TestMiddleware")
const validationMiddleware = require("../middlewares/validatoinMiddleware")
const userValidationSchema = require("../validationSchemas/UserValidationSchema")
const uplaod = require("../middlewares/uploadMiddleware")
const authMiddleware = require("../middlewares/AuthMiddleware")
// router.get("/users",(req,res)=>{

// })

router.get("/users",authMiddleware,userController.getAllUsers)
router.get("/user/:id",userController.getUserById)

//router.post("/user",testMiddleware,userController.createUser)
//router.post("/user",testMiddleware("nodejs"),userController.createUser)

//router.post("/user",validationMiddleware(userValidationSchema),userController.createUser)

router.post("/user",uplaod.single("file"),userController.createUser)
router.post("/userm",uplaod.array("file",3),userController.createUserWithMultipuleFile)
router.delete("/user/:id",userController.deleteUser)
router.put("/user/:id",userController.updateUser)
//router.put("/addhobby/:id",userController.updateUser)
router.post("/login",userController.loginUser)
module.exports = router