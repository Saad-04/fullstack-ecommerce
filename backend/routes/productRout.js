const express = require("express");
const {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createAndUpdateReview,
  getProductAllReviews,
  deleteProductReview,
} = require("../controllers/productControllers.js");
const { isAuthenticated, ownerRoles } = require("../middleware/auth.js");


const router = express.Router();
// all routes start form here 
router.route("/products").get(getAllProduct);
router.route("/product/detail/:id").get(getProductDetails);
router
  .route("/admin/product/create")
  .post(isAuthenticated, ownerRoles("admin"), createProduct);
router
  .route("/admin/product/:id")
  .put(isAuthenticated, ownerRoles("admin"), updateProduct)
  .delete(isAuthenticated, ownerRoles("admin"), deleteProduct);
router
  .route("/product/create/review")
  .put(isAuthenticated, createAndUpdateReview);
router.route("/product/all/review").get(getProductAllReviews);
router
  .route("/product/delete/review")
  .delete(isAuthenticated, ownerRoles("admin"), deleteProductReview);

module.exports = router;
