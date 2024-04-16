const express = require("express");
const router = express.Router();
const productController = require('../Controllers/productController');
const authController = require('../Controllers/authController');

router.get("/", authController.protect, getAllProducts);

router.route("/:id")
.get(authController.protect, productController.getProduct)
.post(authController.protect, authController.restrictTo(['admin']), productController.addProduct)
.patch(authController.protect, authController.restrictTo(['admin']), productController.updateProduct)
.delete(authController.protect, authController.restrictTo(['admin']), productController.deleteProduct);

module.exports = router;