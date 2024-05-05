const express = require("express");
const router = express.Router();
const orderController = require('../Controllers/orderController');
const authController = require('../Controllers/authController');

// View Orders
router.get("/", authController.protect, orderController.viewAllOrders);
router.get("/delivered", authController.protect, orderController.ViewDeliveredOrders);
router.get("/undelivered", authController.protect, orderController.ViewUnDeliveredOrders);
router.get("/:id", authController.protect, orderController.viewOrder);

// Create Order
router.post("/create", authController.protect, orderController.createOrder);

// Update Order
router.patch("/pay/:order_id", authController.protect, orderController.updateOrderToPaid);
router.patch("/deliver/:order_id", authController.protect, orderController.updateOrderToDelivered);

// Dashboard
router.get("/dashboard", authController.protect, orderController.getDashboardData);

module.exports = router;