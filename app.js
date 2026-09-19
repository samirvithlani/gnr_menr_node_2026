const express = require("express");
//refereance variable crearte..
const app = express();

const DbConnection  = require("./src/utils/DBConnection")
DbConnection()

//require userRoutes

const userRoutes = require("./src/routes/UserRoutes")
app.use(userRoutes) //--> glob middleware..




const PORT = 3000;

//server creation.
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
