const Product = require('../models/productModel.js')
const ErrorHandler = require('../utils/errorHandler.js')
// create product api Admin 
exports.createProduct = async (req, res) => {
   
        const product = await Product.create(req.body)
        res.status(201).json({
            success: true,
            product
        })
    
}

// get all products 
exports.getAllProduct = async (req, res,next) => {
    
        const product = await Product.find()
const length = await Product.length
        res.status(200).json({
            length,
            success: true,
            product
            
        })
    if(!product){next(new ErrorHandler('product not found',404))}
}

exports.getProductDetail= async (req, res, next) => {
    const product = await Product.find({_id:req?.params?.id})
  console.log(product)
    if(product){
    res.status(200).json({
      success: true,
      product,
    })}
   else if(!product){
    res.status(404).json({
      success: false,
      message:"product not found",
    })
   }
    // if (product._id !== req.params.id ) {
    //   return next(new ErrorHandler("Product not found", 404));
    // }
    
  }

// updagte products 
exports.updateProduct = async (req, res,next) => {
 
    const id =req.params.id
   
    const updated =await Product?.findByIdAndUpdate(req.params.id,req.body)
    const product =await Product?.findById(req.params.id)
        res.status(200).json({
        success: true,
        product
    })
}

// updagte products 
exports.deleteProduct = async (req, res,next) => {
   
        const id =req.params.id
         const updated =await Product?.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            updated
        })
        if(!updated){next(new ErrorHandler('product not found',404))}
}

