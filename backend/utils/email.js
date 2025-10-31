// const nodemailer = require("nodemailer");
const nodemailer = require('nodemailer')
// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
    service: "gmail",
    //   port: 587,
    //   secure: false, // true for 465, false for other ports
    auth: {
        user: "mdanikislam947936@gmail.com",
        pass: "wzki ksmn ilcf oaaq",
    },
});


const mail = async (to, subject, html) => {
    const info = await transporter.sendMail({
        from: '"WII" <anik45908@gmail.com>',
        to,
        subject,
        // text: "Hello world?", // plain‑text body
        html,
    }); 
    console.log("Message sent:", info.messageId);
}

module.exports = mail;