const express = require("express");
const { newOrder, getSingleOrder, myOrders, getAllOrders } = require("../controllers/orderController.js");
const { isAuthenticated } = require("../middleware/auth.js");
const router = express.Router();

router.route("/order/new").post(isAuthenticated, newOrder);
router.route("/order/singleOrder/:id").get(isAuthenticated, getSingleOrder);
router.route("/order/myOrders").get(isAuthenticated, myOrders);
router.route("/order/allOrders").get(isAuthenticated, getAllOrders);

module.exports = router;
