const Product = require('../Models/productModel');

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
    const items = await Cart.find({userId: req.params.id}).select('cartItems').populate('cartItems');
    if (!items)
        next(new appError('this cart contain no items'), 400);
        
    res.status(200).json({
    status: 'success',
    data: items
})}

const addItem = async (req, res, next) => {
    const product_id = req.params.id;
    const product = await Product.findById(product_id);
    if (!product)
        next(new AppError('no product with this id was found', 400));
    
    let userCart = await Cart.findById(req.user._id);
    let productIndex = -1;
    if (!userCart) {
        userCart = await Cart.create({ userId: req.user._id, cartItems: [{product: product_id, price: product.price}]});
    } else {
        productIndex = userCart.cartItems.findIndex((item) => item.product.toString() === product_id);    
    }
    
    if (productIndex > -1) {
        const cartItem = userCart.cartItems[productIndex];
        cartItem.quantity += 1;
        userCart.cartItems[productIndex] = cartItem;
    } else {
        cart.cartItems.push({ product: product_id, price: product.price });
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