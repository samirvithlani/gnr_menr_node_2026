const multer = require("multer")

const storage = multer.diskStorage({
    filename:(req,file,cb)=>{
        //orginalname --> builtin param
        cb(null,file.originalname)
    },
    destination:"./uploads"
})

const upload = multer({
    storage:storage,
})

module.exports = upload