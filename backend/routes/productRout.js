const express = require("express");
const {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetail,
  createAndUpdateReview,
} = require("../controllers/productControllers.js");
const { isAuthenticated, ownerRoles } = require("../middleware/auth.js");

const router = express.Router();

router.route("/products").get(getAllProduct);
router
  .route("/admin/product/create")
  .post(isAuthenticated, ownerRoles("admin"), createProduct);
  router.route("product/detail/:id").get(getProductDetail);
router
  .route("/admin/product/:id")
  .put(isAuthenticated, ownerRoles("admin"), updateProduct)
  .delete(isAuthenticated, ownerRoles("admin"), deleteProduct);
  router
    .route("/product/review").put(isAuthenticated,createAndUpdateReview)
  

module.exports = router;
