const Order = require("../models/ordersModel.js");
const ErrorHandler = require("../utils/errorHandler.js");
const response = require("../utils/response.js");
const Product = require("../models/productModel.js");
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

    if (!orders) {
      next(new ErrorHandler("order not found  ❌ "));
    }
    response(res, 200, true, orders, "done");
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

// admin check all order list
exports.processingUpdateOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id); //here we match login user id to inside of order user id

    if (!order) {
      next(new ErrorHandler("order not found with this id  ❌ "), 404);
    }
    if (order.orderStatus === "delivered") {
      next(
        new ErrorHandler(
          "your order is already delivered thanks for visiting 😊 "
        ),
        404
      );
    }
    order.orderItems.forEach(async (o) => {
      await updateStock(o.product, o.quantity);
    });

    if (order.orderStatus === "processing") {
      if (req.body.status === "delivered") {
        order.deliveredStatus = Date.now();
      }
      order.orderStatus = req.body.status;
      await order.save({ validateBeforeSave: false });

      response(res, 201, true, order);
    }
  } catch (error) {
    next(new ErrorHandler(error.message, 404));
  }
};

const updateStock = async (id, quantity) => {
  const product = await Product.findById(id);

  product.stock -= quantity;
  product.save({ validateBeforeSave: false });
};

//
exports.deleteOrder = async (req, res, next) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id); //here we match login user id to inside of order user id

    if (!order) {
      next(new ErrorHandler("order not found with this id ❌ "));
    }
    response(res, 201, true, order);
  } catch (error) {
    next(new ErrorHandler(error.message, 404));
  }
};
