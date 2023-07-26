const ErrorHandler = require("../utils/errorHandler.js");
// this err is  = new ErrorHandler(err.message, 404)
module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // wrong id error
  if (err.name === "CastError") {
    //this Casterror is built in error name
    const message = `resource not found invalid : ${err.path}`;
    err = new ErrorHandler(message, 400);
  }
  // duplicate email error
  if (err.code === 11000 && err.keyPattern && err.keyPattern.email ===1) {
    const message = `this ${'E11000'} is already exist try another ${err.keyValue('E11000')}`;
    err = new ErrorHandler(message, 400);
  }
  // invalid json token 
  if (err.name === 'JsonWebTokenError') {
    const message = `json web token is invalid plzz try again !`;
    err = new ErrorHandler(message, 400);
  }
  // json token is expiredr
  if (err.name === 'JsonExpiredError') {
    const message = `json web token is expired try again !`;
    err = new ErrorHandler(message, 400);
  }
  

  res.status(err.statusCode).json({
    success: false,
    message: {
      error: err.message,
    },
  });
};
