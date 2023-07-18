const ErrorHandler = require('../utils/errorHandler.js');

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // wrong id error 
if (err.name ==="CastError"){
  const message = `resource not found invalid : ${err.path}`
  err = new ErrorHandler(message,400)
}

  res.status(err.statusCode).json({
    success: false,
    message: {
      error: err.message,
      "not exact but possible":{0:"wronge product id ", 1:"product id missing "}
    },
  });
};