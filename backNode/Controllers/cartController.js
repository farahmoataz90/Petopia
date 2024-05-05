const Product = require('../Models/productModel');
const AppError = require('../utils/appError');
const Cart = require('../Models/cartModel');



const calcTotalCartPrice = (cart) => {
    let totalPrice = 0;
    cart.cartItems.forEach((item) => {
      totalPrice += item.quantity * item.price;
    });
    cart.totalCartPrice = totalPrice;
    cart.totalPriceAfterDiscount = undefined;
    return totalPrice;
};

const getItems = async (req, res, next) => {

    // Products?price[lte]=2000&price[gte]=1000
    const items = await Cart.find({userId: req.user._id}).select('cartItems').populate('cartItems');

    if (!items)
        next(new AppError('this cart contain no items'), 400);
        
    res.status(200).json({
    status: 'success',
    data: items[0].cartItems
})}

const addItem = async (req, res, next) => {
    const product_id = req.params.id;
    const product = await Product.findById(product_id);

    if (!product)
        return next(new AppError('no product with this id was found', 400));

    if (product.quantity == 0)
        return next(new AppError('product out of stock', 400));

        
    let userCart = await Cart.findOne({userId: req.user._id});
    let productIndex = -1;

    if (!userCart) {
        userCart = await Cart.create({ userId: req.user._id, cartItems: [{product: product_id, price: product.price}]});
    } else {
        productIndex = userCart.cartItems.findIndex((item) => item.product.toString() === product_id);

        if (product.quantity == userCart.cartItems[productIndex].quantity)
            return next(new AppError('product quantity in stock not enough', 400));
            
        if (productIndex > -1) {
            const cartItem = userCart.cartItems[productIndex];
            cartItem.quantity += 1;
            userCart.cartItems[productIndex] = cartItem;
        } else {
            userCart.cartItems.push({ product: product_id, price: product.price });
        }
    }
    


    calcTotalCartPrice(userCart);
    await userCart.save();   

    res.status(200).json({
        status: 'success',
        numOfCartItems: userCart.cartItems.length,
        data: userCart
    });
};

module.exports = {
    addItem, 
    getItems
}