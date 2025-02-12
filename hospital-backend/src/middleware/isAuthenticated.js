import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  try {
    //get token from postman
    let tokenString = req.headers.authorization;
    let tokenArray = tokenString.split(" ");
    let token = tokenArray[1];

    let user = await jwt.verify(token, process.env.SECRET_KEY);

    // console.log(user);

    req._id = user._id;
    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      message: ("token not valid", error.message),
    });
  }
};
