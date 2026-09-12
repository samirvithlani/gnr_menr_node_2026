console.log("app file loaded..")

// const user = require("./users")
// console.log(user) // {}
// console.log(user.userName)
// console.log(user.userAge)

const {userName,userAge} = require("./users")
console.log(userName)
console.log(userAge)

const employee = require("./employee")
console.log(employee) //{Function}
var ans = employee.setEmployee(100)
console.log("ans = ",ans)

var x = employee.getFullName("virat","kohli")
console.log(x)