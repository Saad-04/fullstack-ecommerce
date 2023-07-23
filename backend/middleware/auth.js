const ErrorHandler = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");
exports.isAuthenticated = async (req, res, next) => {
  try {
    const {token} = req.cookies;

    if (!token) {
      return next(new ErrorHandler("login first to access resources", 401));
    }
    const user = jwt.verify(token, process.env.JWT_SECRET);
    console.log(user);
    req.user = await User.findById(user._id)
  } catch (err) {
    return next(new ErrorHandler(err.message, 401));
  }
};
