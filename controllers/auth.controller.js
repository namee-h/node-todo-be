const authController = {};
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
authController.authenticate = (req, res, next) => {
  try {
    const tokenString = req.headers.authorization;
    if (!tokenString) {
      return res.status(401).json({
        status: "fail",
        message: "No token provided",
      });
    }

    const token = tokenString.split(" ")[1].trim();
    jwt.verify(token, JWT_SECRET_KEY, (err, payload) => {
      if (err) {
        return res.status(401).json({
          status: "fail",
          message: "Invalid token",
        });
      }
      //   res.status(200).json({ status: "success", userId: payload._id });
      req.userId = payload._id;
      next();
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      message: error.message,
    });
  }
};

module.exports = authController;
