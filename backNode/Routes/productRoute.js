const express = require("express");
const productController = require('../Controllers/productController');
const authController = require('../Controllers/authController');

const router = express.Router();
router.route('/')
.get(authController.protect, productController.getAllProducts)
.post(authController.protect, authController.restrictTo('admin'), productController.addProduct);

router.route('/:id')
.get(authController.protect, productController.getProduct)
.patch(authController.protect, authController.restrictTo('admin'), productController.updateProduct)
.delete(authController.protect, authController.restrictTo('admin'), productController.deleteProduct);

module.exports = router;