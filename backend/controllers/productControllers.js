const Product = require("../models/productModel.js");
const ErrorHandler = require("../utils/errorHandler.js");
const ApiFeatures = require("../utils/apiFeatures.js");

// create product api Admin
exports.createProduct = async (req, res, next) => {
  try {
    req.body.user = req.user.id; //here we save product create user id in body user property

    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    next(new ErrorHandler(error.message, 404));
  }
};

// exports.getProductDetail= async (req, res, next) => {
//     const product = await Product.find({_id:req?.params?.id})
//   console.log(product)
//     if(product){
//     res.status(200).json({
//       success: true,
//       product,
//     })}
//    else if(!product){
//     res.status(404).json({
//       success: false,
//       message:"product not found",
//     })
//    }
// if (product._id !== req.params.id ) {
//   return next(new ErrorHandler("Product not found", 404));
// }

//   }

// updagte products
// exports.updateProduct = async (req, res,next) => {

//     const id =req.params.id

//     const updated =await Product?.findByIdAndUpdate(req.params.id,req.body)
//     const product =await Product?.findById(req.params.id)
//         res.status(200).json({
//         success: true,
//         product
//     })
// }

// get all products
exports.getAllProduct = async (req, res, next) => {
  try {
    //apiFeature is =  this keryword
    let resultPerPage = 3;
    const productCount = await Product.countDocuments();
    const apiFeature = new ApiFeatures(Product.find(), req.query)
      .search()
      .filters()
      .pagination(resultPerPage);
    ;
    const product = await apiFeature.query;
    const length = await Product.length;
    if (product) {
      res.status(200).json({
        length,
        success: true,
        product,
        productCount,
      });
    }
  } catch (err) {
    next(new ErrorHandler(err.message, 404)); //this next is goes to errorMiddleware function which declare in app.use in app.js
  }
};

exports.getProductDetail = async (req, res, next) => {
  try {
    const product = await Product.findById(req?.params?.id);
    if (product) {
      res.status(200).json({
        success: true,
        product,
      });
    }
  } catch (error) {
    next(new ErrorHandler(error.message, 404));
  }
};

// updagte products
exports.updateProduct = async (req, res, next) => {
  try {
    const id = req?.params?.id;
    const updated = await Product?.findByIdAndUpdate(id, req.body);
    const product = await Product?.findById(id);
    if (product) {
      res.status(200).json({
        success: true,
        product,
      });
    }
  } catch (e) {
    next(new ErrorHandler(e.message, 404));
  }
};

// updagte products
exports.deleteProduct = async (req, res, next) => {
  try {
    const id = req?.params?.id;
    const product = await Product?.findById(id);
    const updated = await Product?.findByIdAndDelete(id);
    if (product) {
      res.status(200).json({
        success: true,
        product,
      });
    }
  } catch (e) {
    next(new ErrorHandler(e.message, 404));
  }
};
