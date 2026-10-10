const zod = require("zod")

const userValidationSchema = zod.object({
    name: zod.string().min(3,"min 3 char").max(255),
    age: zod.number().min(18).max(100),
    bloodGroup: zod.enum(["A+","A-","B+","B-"]),
    email: zod.string().email(),
    hobbies: zod.array(zod.string()).min(1),
    password: zod.string().min(8).max(255)
}).strict()

module.exports = userValidationSchema