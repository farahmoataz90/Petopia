const product = require('../Models/productModel')


FilterProduct = async(req ,res) => {

    try {
            let queryFilteredProduct = {}
            
            const { category, gender, price } = req.query;

            if(category){
                queryFilteredProduct.category = category
            }
            if(gender){
            queryFilteredProduct.gender = gender   
            }
            if(price){
                queryFilteredProduct.price = price
            }


            const filteredProduct = await product.find(queryFilteredProduct)

            res.status(200).json({
                status:'success',
                data: filteredProduct
            })
       }
       catch(err) {
           res.status(400).json({
               status: 'fail',
               message: err.message = 'Internal Server Error'
           })
       }
}
