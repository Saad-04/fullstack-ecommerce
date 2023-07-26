const response = (res, code, yesNo, user, text) => {
  return res.status(code).json({
    success: yesNo,
    user: (user)? (user): null ,
    message: text?text: null
  });
};
module.exports = response;
