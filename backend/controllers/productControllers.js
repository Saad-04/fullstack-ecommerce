const Product = require("../models/productModel.js");
const ErrorHandler = require("../utils/errorHandler.js");
const ApiFeatures = require("../utils/apiFeatures.js");
const response = require("../utils/response.js");

// create product api Admin
exports.createProduct = async (req, res, next) => {
  try {
    req.body.user = req.user.id; //here we save product create user id in body user property

    const product = await Product.create(req.body);
    response(res, 201, true, product, "product created successfully ");
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
    const product = await apiFeature.query;

    if (product) {
      response(res, 200, true, product, productCount);
    }
  } catch (err) {
    next(new ErrorHandler(err.message, 404)); //this next is goes to errorMiddleware function which declare in app.use in app.js
  }
};

exports.getProductDetail = async (req, res, next) => {
  try {
    const product = await Product.findById(req?.params?.id);
    if (product) {
      response(res, 200, true, product, null);
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
      response(res, 200, true, product, "update successfully ");
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
      response(res, 200, true, product, null);
    }
  } catch (e) {
    next(new ErrorHandler(e.message, 404));
  }
};

// create and update reviews from a product
exports.createAndUpdateReview = async (req, res, next) => {
  try {
    const { productId, comment, rating } = req.body;
    console.log(typeof rating);
    const review = {
      user: req.user._id,
      name: req.user.name,
      comment,
      rating,
    };
    const product = await Product.findById(productId); //this product id come when user click on
    //a single product item

    const isAlreadyReview = product.reviews.find(
      //this isAlreadyReview returh only true or false !
      (rev) => rev.user.toString() === req.user._id.toString()
    );
    // if user already give a review
    if (isAlreadyReview) {
      //herer we apply foreach on reviews array
      product.reviews.forEach((e) => {
        //check here array each object user.id is matched to user._id
        if (e.user.toString() === req.user._id.toString()) {
          e.comment = comment;
          e.rating = rating;
        }
      });
    }
    // if a user never give a review to the product
    if (!isAlreadyReview) {
      product.reviews.push(review);
      product.numOfReview = product.reviews.length;
    }

    // here we calculate to average of all reviews if we combine it
    let average = 0;
    product.reviews.forEach((e) => {
      return (average += e.rating); //here we sum all objects rating in average
    });

    product.ratings = Number(average / product.reviews.length); //here we divide all ratings number to total number of user rating

    await product.save();
    response(res, 200, true, product, "done");
  } catch (e) {
    next(new ErrorHandler(e.message, 404));
  }
};
