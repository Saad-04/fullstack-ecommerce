const jsonTokenAndResponse = require("../utils/jsonTokenAndResponse.js");
const User = require("../models/userModel.js");
const ErrorHandler = require("../utils/errorHandler.js");

exports.registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password,
      avatar: {
        public_id: "this is public id ",
        url: "this is url ",
      },
    });
    // this is cookie token and response
    jsonTokenAndResponse(user, 200, res);
  } catch (error) {
    next(new ErrorHandler(error.message, 404));
  }
};

exports.logoutUser = async (req, res, next) => {
  try {
    res.cookie('token',null,{
      httpOnly:true,
     expires:new Date(Date.now())
    })
    res.send({
      success:true,
      message:"successfull logout"
    })
  } catch (error) {
     next(new ErrorHandler(error.message,401))
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // if email and password empty
    if ((!email, !password)) {
      return next(new ErrorHandler("enter email and password ", 400));
    }

    const user = await User.findOne({ email }).select("+password");
    // if email and password not match
    if (!user) {
      return next(
        new ErrorHandler("invalid user wrong email and password", 401)
      );
    }
    // if email and password is matched
    const isMatch = await user.comparePassword(password);
    // if email and password is matched
    if (!isMatch) {
      return next(new ErrorHandler(" wrong password", 401));
    }
    // this is cookie token and response
    jsonTokenAndResponse(user, 200, res);
  } catch (error) {
    next(new ErrorHandler(error.message, 404));
  }
};

