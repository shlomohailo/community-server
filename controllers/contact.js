const main = require("../nodemailer");

const sendMail = (req,res)=>{
  const name = req.body.name;
  const email = req.body.email;
  const sub = req.body.subject;
  const message = req.body.msg; 
  console.log(name);
  const mail = {
    from: 'managedata57@gmail.com',
    to: email,
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Subject: ${sub}</p>
           <p>Email: ${email}</p>
           <p>Message: Thank you for reaching out! </p>`,
  };
  if(mail){
    main(mail)
    res.status(200).json({ status: "Message Sent" });
  }else res.status(400).json({ status: "ERROR" });
}

module.exports = sendMail;