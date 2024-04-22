const express = require("express");
const router = express.Router();
const orderController = require('../Controllers/orderController');
const authController = require('../Controllers/authController');

router.get("/", authController.protect, orderController.viewAllOrders);
router.get("/delivered", authController.protect, orderController.ViewDeliveredOrders);
router.get("/undelivered", authController.protect, orderController.ViewUnDeliveredOrders);
router.get("/:id", authController.protect, orderController.viewOrder);
router.post("/:cart_id", authController.protect, orderController.createOrder);
router.patch("/pay/:order_id", authController.protect, orderController.updateOrderToPaid);
router.patch("/deliver/:order_id", authController.protect, orderController.updateOrderToDelivered);
router.get("/dashboard", authController.protect, orderController.getDashboardData);

module.exports = router;
