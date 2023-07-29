const express = require("express");
const { newOrder } = require("../controllers/orderController.js");
const { isAuthenticated } = require("../middleware/auth.js");
const router = express.Router();

router.route("/order/new").post(isAuthenticated, newOrder);

module.exports = router;
