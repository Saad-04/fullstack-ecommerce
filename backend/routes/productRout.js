const express = require("express");
const {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetail,
} = require("../controllers/productControllers.js");
const { isAuthenticated, ownerRoles } = require("../middleware/auth.js");

const router = express.Router();

router.route("/products").get(getAllProduct);
router
  .route("/product/new")
  .post(isAuthenticated, ownerRoles("admin"), createProduct);
router
  .route("/product/:id")
  .get(getProductDetail)
  .put(isAuthenticated, ownerRoles("admin"), updateProduct)
  .delete(isAuthenticated, ownerRoles("admin"), deleteProduct);

module.exports = router;
