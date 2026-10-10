// //non param middleware..
// const testMiddleware = (req,res,next)=>{

//     console.log("#################### test middleware called #######################################")
//     res.json({
//         message:"invalid.."
//     })
//     //next()
// }

// param middleware..
const testMiddleware = (data) => (req, res, next) => {
  console.log(
    "#################### test middleware called #######################################",
  );
  console.log("data", data);
  if (data == "js") {
    res.json({
      message: "invalid..",
    });
  } else {
    next();
  }
};
module.exports = testMiddleware;
