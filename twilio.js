const dotenv = require("dotenv");
dotenv.config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
const sendSms = () => {
  client.messages
    .create({
      body: "Hello from Twilio",
      from: "+17707583551",
      to: "+972537154917",
    })
    .then((message) => console.log("ok"))
    .catch((err) => {
      console.log(err);
    });
};
module.exports = sendSms