const crypto = require('crypto');
const mongoose = require('mongoose');
// name, category, price, description, image, quantity, gender, age, breed
// category -> pet, 
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'product must have a name'],
        trim: true,
    },
    type: {
        type: String,
        lowercase: true,
        enum: ['pet', 'need'],
        required : true
    },
    categoryId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: [true, 'product must have a category']
    },
    description: {
        type: String,
        lowercase: true,
        unique: true,
        trim: true,
    },
    image: {
        type: String,
        required: true
    },
    quantity: {type: Number, default: 1},
    gender: {
        type: String,
        enum: ['male', 'female'],
    },
    age: Number,
    breed: Boolean,
    price: {type: Number, default: 0, required: [true, `price must be specified`]}
});

productSchema.pre('save',function (next) {
    if (this.type === 'pet')
    {
        if (!this.gender)
            return console.log('gender of pet must be specified');
        if (!this.age)
            return console.log('age of pet must be specified');
        if (!this.breed)
            return console.log('breed of pet must be specified');
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;