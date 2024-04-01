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

exports.getItems = async (req, res, next) => {

    // Products?price[lte]=2000&price[gte]=1000
    const items = await Cart.find({userId: req.params.id}).select('cartItems').populate('cartItems');
    res.status(200).json({
    status: 'success',
    data: items
})
}

exports.addItem = async (req, res, next) => {
    const { productId } = req.body;
    const product = Product.findById(productId);
    let userCart = await Cart.findById(req.user._id);
    let productIndex = -1;
    if (!userCart) {
        userCart = await Cart.create({ userId: req.user._id, cartItems: [{product: productId, price: product.price}]});
    } else {
        productIndex = userCart.cartItems.findIndex((item) => item.product.toString() === productId);    
    }
    
    if (productIndex > -1) {
        const cartItem = userCart.cartItems[productIndex];
        cartItem.quantity += 1;
        userCart.cartItems[productIndex] = cartItem;
    } else {
        cart.cartItems.push({ product: productId, price: product.price });
    }

    calcTotalCartPrice(userCart);
    await userCart.save();


    res.status(200).json({
        status: 'success',
        numOfCartItems: userCart.cartItems.length,
        data: userCart
    });
};

