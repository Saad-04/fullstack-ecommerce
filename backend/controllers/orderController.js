const Order = require("../models/ordersModel.js");
const ErrorHandler = require("../utils/errorHandler.js");
const response = require("../utils/response.js");

// create new order api for new order
exports.newOrder = async (req, res, next) => {
  try {
    const {
      shippingIfo,
      orderItems,
      paymentInfo,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;

    const order = await Order.create({
      shippingIfo,
      orderItems,
      paymentInfo,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      paidAt: Date.now(),
      user: req.user._id,
    });

    response(res, 201, true, order, "order created successfully ");
  } catch (error) {
    next(new ErrorHandler(error.message, 404));
  }
};
