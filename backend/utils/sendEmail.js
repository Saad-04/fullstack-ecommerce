const { trusted } = require("mongoose");
const nodeMailer = require("nodemailer");

const sendEmailFunction = async (options) => {
  const transporter = nodeMailer.createTransport({
    // host: "smtp.forwardemail.net",
    service: "gmail",
    port: 465,

    auth: {
      user: "asaad4674@gmail.com",//this is website owner email
      pass: "hkxykdsmbvtqvhnr",
    },
    secure: trusted,
  });
  const option = {
    from: "<asaad4674@gmail.com>",//this is website owner email
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  await transporter.sendMail(option);
};

module.exports = sendEmailFunction;
