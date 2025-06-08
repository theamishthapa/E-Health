//nodemailer
import nodemailer from "nodemailer";
import { config } from "dotenv";

//the main thing in this file is transporterInfo and mailInfo
const transporterInfo = {
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // true for port 465, false for other ports
  auth: {
    //user and pass must be genuine
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    //use 2 step verification and generate app password
  },
};

export const sendEmail = async (mailInfo) => {
  try {
    let transporter = nodemailer.createTransport(transporterInfo);
    let info = await transporter.sendMail(mailInfo);
  } catch (error) {
    console.log("error has occurred", error.message);
  }
};
