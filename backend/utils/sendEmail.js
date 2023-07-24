const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporer = nodeMailer.createTransport({
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  const option = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  await transporer.sendMail(option);
};
module.exports = sendEmail;
