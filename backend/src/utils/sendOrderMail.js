import nodemailer from 'nodemailer'
import ejs from "ejs"
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const sendOrderMail = async (email, orderId ,amount, date, paymentType,orderType,items,name) => {
    // transporter - configuration of admin/user to send mail from
    console.log(email,"Inside the sendOrderMail Controller")
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com", // Hostinger SMTP server
      port: 465, // Secure SSL/TLS port
      secure: true, // Use SSL/TLS for secure connection
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

      
    const templatePath = path.join(__dirname, `../views/orderMail.ejs`);

    let data = await ejs.renderFile(templatePath, { email, orderId, amount, date ,paymentType,orderType,items,name});


    let mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: [email,process.env.NODEMAILER_EMAIL],
        subject: "Your Pizza Inno Watford Order Confirmation",
        html: data,
      };

      return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error("Error sending mail:", error);
            return reject(error);  // Reject on error
          } else {
            console.log("Email sent:", info.response);
            return resolve("Order Mail Sent Successfully: " + info.response);  // Resolve with success message
          }
        });
      });
}