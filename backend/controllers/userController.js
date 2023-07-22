const User = require("../models/userModel.js");
const ErrorHandler = require("../utils/errorHandler.js");
const ApiFeatures = require("../utils/apiFeatures.js");

exports.registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user =await User.create({
      name,
      email,
      password,
      avatar: {
        public_id: "this is public id ",
        url: "this is url ",
      },
    });
    res.status(201).json({
        success:true,
        user
    })
  } catch (error) {
    next(new ErrorHandler(error.message, 404));
  }
};
