const express = require("express");
const router = express.Router();
const productController = require("../Controller/productController");
const reviewRouter = require("./reviewRoutes");
const billRouter = require("./billRoutes");
const {
  protect,
  isLoggedIn,
  restrictTo,
} = require("../Controller/authController");

// review Route
router.use("/:productId/reviews", reviewRouter);

// bill Route
router.use("/:productId/bill", billRouter);

// Create product routes

// Get all products
router.get("/", protect, productController.allProduct);

// Filter products by category
router.get("/filter", productController.filterProductsByCategory);

// Get one product, Update product, Delete product
router.use(protect);
router.use(restrictTo("admin"));
router.post("/create", productController.uploadImage, productController.createProduct);
router
  .route("/:id")
  .get(productController.oneProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
