const express = require("express");
const { newOrder, getSingleOrder, myOrders, getAllOrders, processingUpdateOrder, deleteOrder } = require("../controllers/orderController.js");
const { isAuthenticated, ownerRoles } = require("../middleware/auth.js");
const router = express.Router();

router.route("/order/new").post(isAuthenticated, newOrder);
router.route("/order/singleOrder/:id").get(isAuthenticated, getSingleOrder);
router.route("/order/myOrders").get(isAuthenticated, myOrders);
router.route("/order/allOrders").get(isAuthenticated, getAllOrders);
router.route("/order/update/:id").put(isAuthenticated,ownerRoles('admin'), processingUpdateOrder);
router.route("/order/delete/:id").delete(isAuthenticated,ownerRoles('admin'), deleteOrder);

module.exports = router;
