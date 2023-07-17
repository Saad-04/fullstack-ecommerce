const Product = require('../models/productModel.js')

// create product api Admin 
exports.createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(201).json({
            success: true,
            product
        })
    } catch (error) {
        res.status(200)
    }
}

// get all products 
exports.getAllProduct = async (req, res) => {
    try {
        const product = await Product.find()

        res.status(200).json({
            success: true,
            product
        })
    } catch (error) {
        res.status(404).
            res.json({
                success: false,
                error
            })

    }
}
// updagte products 
exports.updateProduct = async (req, res) => {
    try {
        const id = req.params.id

        if (!id) {
            res.status(500).json({
                success: false,
                message: 'product not found'
            })
        }
         const updated = Product.findOneAndUpdate({_id:id}, req.body)
        res.status(200).json({
            success: true,
            updated
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            error: error.message
        })
        
    }
}

