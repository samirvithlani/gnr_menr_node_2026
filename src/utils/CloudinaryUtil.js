const cloudinary  = require("cloudinary").v2;
require("dotenv").config()
const uploadtoCloud = async(path)=>{

    cloudinary.config({
        api_key:process.env.CLOUD_API_KEY,
        api_secret:process.env.CLOUD_API_SECRET,
        cloud_name:process.env.CLOUD_NAME
    })

    const response = await cloudinary.uploader.upload(path)

    return response;
}
module.exports = uploadtoCloud;
