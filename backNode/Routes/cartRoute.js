const express = require("express");
const router = express.Router();
const cartController = require('../Controllers/cartController');
const authController = require('../Controllers/authController');



router.post('/:id', authController.protect, cartController.addItem)
router.get('/', authController.protect, cartController.getItems);

module.exports = router;