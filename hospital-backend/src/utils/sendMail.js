//nodemailer
import nodemailer from "nodemailer";

//the main thing in this file is transporterInfo and mailInfo
const transporterInfo = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    //user and pass must be genuine
    user: "asus.1995.zenbook@gmail.com",
    pass: "zcwo pfay msbr ljdz",
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
