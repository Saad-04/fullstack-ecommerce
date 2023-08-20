const jsonTokenAndResponse = (user, status, res) => {
  const token = user.jsonToken(); //this jsonToken is come from when we set method in userSchema
  const option = {
    expires: new Date(
      Date.now() +  process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000
    ),
   
    httpOnly: true,
  };
  res.status(201).cookie("token", token, option).json({
    success: true,
    token: token,
    user,
  });
};
module.exports = jsonTokenAndResponse;
