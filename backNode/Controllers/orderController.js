const Order = require('../Models/orderModel');
const Cart = require('../Models/cartModel');
const Pet = require('../Models/productModel');

module.exports.viewAllOrders = async (req, res, next) => {
    const orders = await Order.find({user: req.user._id});
    if (!orders)
        return next(new appError('no orders were found', 400));

    res.status(200).json({
        status: 'success',
        data: orders
    });
}

module.exports.ViewDeliveredOrders = async (req, res, next) => {
    const orders = await Order.find({user: req.user._id, isDelivered: true});
    if (!orders)
        return next(new appError('You have no delivered orders', 400));

    res.status(200).json({
        status: 'success',
        data: orders
    });
}

module.exports.ViewUnDeliveredOrders = async (req, res, next) => {
    const orders = await Order.find({user: req.user._id, isDelivered: false});
    
    if (!product)
        return next(new appError('You have no undelivered orders', 400));

    res.status(200).json({
        status: 'success',
        data: orders
    });
}

module.exports.viewOrder = async (req, res, next) => {
    const order = await Order.find({user: req.user._id, _id: req.params.id});
    if (!order)
        return next(new appError('no order with this id was found', 400));

    res.status(200).json({
        status: 'success',
        data: order
    });
}

module.exports.createOrder = async (req, res, next) => {
    // params -> cart_id
    const taxPrice = 0;
    const shippingPrice = 0;
    const cart = await Cart.findById(req.params.cart_id);
    if (!cart)
        return next(new appError('no cart for this user exist', 400));

    const cartPrice = cart.totalPriceAfterDiscount
    ? cart.totalPriceAfterDiscount
    : cart.totalCartPrice;

    const totalOrderPrice = cartPrice + taxPrice + shippingPrice;

    const order = await Order.create({ user: req.user._id, cartItems: cart.cartItems, totalOrderPrice });
    
    const bulkOption = cart.cartItems.map((item) => ({
        updateOne: {
            filter: {_id: item.product},
            update: { $inc: { quantity: -item.quantity, sold: +item.quantity} }
        },
    })
    );

    await Pet.bulkWrite(bulkOption, {});
    await Cart.findByIdAndDelete(req.params.cart_id);
    
    res.status(201).json({
        status: 'success',
        data: order
    });
}

module.exports.updateOrderToPaid = async (req, res, next) => {
    // params -> order_id
    const order = Order.findById(req.params.order_id);
    if (!order)
        return next(new appError('no order with this id was found', 400));

    order.isPaid = true;
    order.isPaidAt = Date.now();

    const updatedOrder = await order.save();
    res.status(200).json({
        status: 'success',
        data: updatedOrder
    });

}

module.exports.updateOrderToDelivered = async (req, res, next) => {
    // params -> order_id
    const order = Order.findById(req.params.order_id);
    if (!order)
        return next(new appError('no product with this id was found', 400));

    order.isDelivered = true;
    order.isDeliveredAt = Date.now();

    const updatedOrder = await order.save();
    res.status(200).json({
        status: 'success',
        data: updatedOrder
    });
}

