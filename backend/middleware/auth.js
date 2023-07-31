const ErrorHandler = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");
const { request } = require("express");
exports.isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return next(new ErrorHandler("login first to access resources", 401));
    }
    const verify = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(verify.id); //here we set userProfile in req.user property
    
    next();
  } catch (err) {
    return next(new ErrorHandler(err.message, 401));
  }
};

// ownerRoles function  only owner can access this function

exports.ownerRoles = (...roles) => {
  return (req, res, next) => {
    try {
      //console.log(req.user.role); //req.user = user profile
      if (!roles.includes(req.user.role)) {
        next(
          new ErrorHandler("access not allow only Admin can access this ", 403)
        );
      }else{
          next();
      }
    } catch (err) {
      next(new ErrorHandler(err.message, 401));
    }
  };
};
