"use strict";
const nodemailer = require("nodemailer");

async function main(mail) {
console.log(mail);
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: 'managedata57@gmail.com', 
      pass: 'respeboapbukuzzi', 
    },
  });
 return transporter.sendMail(mail, (e) => {
    if (e) {
      return console.log(e);
    }else return console.log('email sent');
  });

}


module.exports = main;