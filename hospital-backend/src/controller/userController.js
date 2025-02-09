import bcrypt from "bcryptjs";
import { HospitalUser } from "../schema/userSchema.js";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utilis/sendMail.js";

//register
export const createUserController = async (req, res, next) => {
  try {
    let data = req.body;

    let hashedPassword = await bcrypt.hash(data.password, 10);
    data = {
      ...data,
      password: hashedPassword,
      isVerifiedEmail: false,
    };

    let result = await HospitalUser.create(data);

    //token

    let infoObj = {
      _id: result._id,
    };

    let secretkey = process.env.SECRET_KEY;

    let expiryInfo = {
      expiresIn: "1d",
    };

    let token = await jwt.sign(infoObj, secretkey, expiryInfo);

    await sendEmail({
      to: result.email,
      subject: "Your account has been Registered",
      html: `
      <h1>Thank you for registering on our hospital</h1>
      <p>To verify your email click the link below:</p>
      </br>
      <a href="http://localhost:3000/verify-email?token=${token}">http://localhost:3000/verify-email?token=${token}</a>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Account created successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: ("failed to create account", error.message),
    });
  }
};

//email verify
export const verifyEmail = async (req, res, next) => {
  try {
    let tokenString = req.headers.authorization;
    let tokenArray = tokenString.split(" ");
    let token = tokenArray[1];

    // console.log(token);

    let secretkey = process.env.SECRET_KEY;

    let infoObj = await jwt.verify(token, secretkey);

    // console.log(infoObj);

    let result = await HospitalUser.findByIdAndUpdate(infoObj._id, {
      isVerifiedEmail: true,
    });
    res.status(200).json({
      success: true,
      message: "Email verified successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: ("Failed to verify email", error.message),
    });
  }
};

//Read all
export const readAllUserController = async (req, res, next) => {
  try {
    let result = await HospitalUser.find({});
    res.status(200).json({
      success: true,
      message: "All user Read successfully",
      result: result,
    });
  } catch (error) {
    res.staus(400).json({
      success: false,
      message: ("failed to read all user", error.message),
    });
  }
};

//read-specific
export const readSpecificUserController = async (req, res, next) => {
  try {
    let result = await HospitalUser.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Read specific user successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to read Specific User",
    });
  }
};

//update user
export const UpdateUserController = async (req, res, next) => {
  try {
    let result = await HospitalUser.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "User data Updated",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: ("Failed to update", error.message),
    });
  }
};

//delete user
export const deleteUserController = async (req, res, next) => {
  try {
    let result = await HospitalUser.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: ("Failed to delete", error.message),
    });
  }
};

//login part
export const login = async (req, res, next) => {
  try {
    let email = req.body.email;
    let password = req.body.password;

    let user = await HospitalUser.findOne({ email });

    if (!user) {
      throw new Error("Invalid Credentials");
    }

    if (!user.isVerifiedEmail) {
      throw new Error("Email not verified");
    }

    let isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new Error("Invalid Credentials");
    }

    let infoObj = {
      _id: user._id,
    };
    let secretkey = process.env.SECRET_KEY;

    let expiryInfo = {
      expiresIn: "365d",
    };
    let token = await jwt.sign(infoObj, secretkey, expiryInfo);

    res.status(200).json({
      success: true,
      message: "Login successfully",
      result: user,
      token: token,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: ("Failed to login", error.message),
    });
  }
};
