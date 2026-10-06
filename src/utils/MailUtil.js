const mailer = require("nodemailer")
require("dotenv").config()


const mailSend = async(to,subject,text)=>{


        const transport = mailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.GMAIL_ID,
                pass:process.env.GMAIL_PASS,
            }
        })

        const mailOption = {
            from:process.env.GMAIL_ID,
            to:to,
            subject:subject,
            text:text
        }

        const mailResponse = await transport.sendMail(mailOption)
        console.log("mail response..",mailResponse)

}

module.exports = mailSend