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

//here we get single order model and also order user name and email
exports.getSingleOrder = async (req, res, next) => {
  try {
    // req.params.id is model orderId
    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email"
    );
    if (!order) {
      next(new ErrorHandler("order not found id is order incorrect ❌ "));
    }

    response(res, 201, true, order, "output");
  } catch (error) {
    next(new ErrorHandler(error.message, 404));
  }
};

// loggged in user check their order list
exports.myOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.user._id }); //here we match login user id to inside of order user id

    if(!orders){
      next(new ErrorHandler("order not found  ❌ "));
    }
    response(res,200,true,orders,'done')
  } catch (error) {
    next(new ErrorHandler(error.message, 404));
  }
};

// admin check all order list
exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find(); //here we match login user id to inside of order user id

    if (!orders) {
      next(new ErrorHandler("order not found  ❌ "));
    }
    if (orders) {
      let totalAmount = 0;
      orders.forEach((order) => {
        totalAmount += order.totalPrice;
      });
      response(res, 201, true, orders, totalAmount);
    }
  } catch (error) {
    next(new ErrorHandler(error.message, 404));
  }
};
