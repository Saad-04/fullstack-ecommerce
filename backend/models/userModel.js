const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [4, "Name should have more than 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: [true, "this email already exist"],
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [8, "Password should be greater than 8 characters"],
    select: false,
  },
  // avatar: {
  //   public_id: {
  //     type: String,
  //     required: true,
  //   },
  //   url: {
  //     type: String,
  //     required: true,
  //   },
  // },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10); //here we save hash password in user model before creating user account
});

// here we create jwttoken for user
// jsonToken() this function return token
userSchema.methods.jsonToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE, //here user will logout after 5 days
  });
};
// compare user password
// this (comparePass) is = when user enter password on input field
userSchema.methods.comparePassword = async function (comparePass) {
  return bcrypt.compare(comparePass, this.password);
};

// generate password reset token
userSchema.methods.getResetPasswordToken = function () {
  //this function return normal password token
  const resetToken = crypto.randomBytes(20).toString("hex"); //this is normal password token
  // console.log(resetToken)
  this.resetPasswordToken = crypto //this is hashed password token and this is saved in user model resetPasswordToken property
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000; //here we set expiry date in user model resetPasswordexpire property
  return resetToken;
};

module.exports = mongoose.model("User", userSchema);
