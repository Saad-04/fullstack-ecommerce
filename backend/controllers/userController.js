const jsonTokenAndResponse = require("../utils/jsonTokenAndResponse.js");
const User = require("../models/userModel.js");
const ErrorHandler = require("../utils/errorHandler.js");
const sendEmail = require("../utils/sendEmail.js");
const crypto = require("crypto");

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
    res.cookie("token", null, {
      httpOnly: true,
      expires: new Date(Date.now()),
    });
    res.send({
      success: true,
      message: "successfull logout",
    });
  } catch (error) {
    next(new ErrorHandler(error.message, 401));
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

// forgot user password
exports.forgotPassword = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new ErrorHandler("user not found", 404));
  }
  // get resetpaswword token
  const resetPasswordToken = user.getResetPasswordToken(); //this is normal password token
  // console.log(resetPasswordToken)
  await user.save({ validateBeforeSave: false });
  // this is reset password url
  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/password/reset/${resetPasswordToken}`; //pass roken in params

  const message = `your password reset url is :-\n\n${resetPasswordUrl} \n\n if your don't want to change the password then ignore it !`;
  // main function start here

  try {
    await sendEmail({
      email: user.email,
      subject: "ecommerce password recovery email",
      message,
    });
    res.status(200).json({
      success: true,
      message: `email send to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });

    next(new ErrorHandler(error.message, 404));
  };
};

// forgot user password
exports.resetPassword = async (req, res, next) => {
  try {
    const resetPasswordToken = crypto //here we create hashed password again with same token which pass in previous funtions params
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      next(new ErrorHandler("user not found", 500));
    }
    if (req.body.password !== req.body.confirmPassword) {
      next(new ErrorHandler("password does not matched ! ", 500));
    }

    user.password = req.body.password || req.body.confirmPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(new ErrorHandler(error.message, 404));
  }
};
