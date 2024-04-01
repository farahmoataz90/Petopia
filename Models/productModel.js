const crypto = require('crypto');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'The product must have a name'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Email is required'],
        lowercase: true,
        unique: true,
        trim: true,
        validate: [validator.isEmail, 'please provide a valid email']
    },
    price: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    image: {
        type: String,
        required: true
    },
    available: Boolean,
    quantity: Number,

});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;  