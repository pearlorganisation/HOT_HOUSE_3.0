import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const sendMail = async (email, otp) => {
  // transporter - configuration of admin/user to send mail from
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com", // Hostinger SMTP server
    port: 465, // Secure SSL/TLS port
    secure: true, // Use SSL/TLS for secure connection
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const templatePath = path.join(__dirname, `../views/otp.ejs`);

  let data = await ejs.renderFile(templatePath, { email, otp });

  let mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: "OTP - Pizza Inno Watford",
    html: data,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return reject(error);
      } else {
        return resolve("Otp Sent Successfully" + info.response);
      }
    });
  });
};
