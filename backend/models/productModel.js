const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter a valid name"],
  },
  description: {
    type: String,
    required: [true, "please enter a discription of product"],
  },
  price: {
    type: Number,
    required: [true, "please enter a product price"],
    maxLength: [0, "please enter price lessthan 8 digits "],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  image: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true,, "please select a category"],
    default:"all"
  },
  stock: {
    type: Number,
    maxlength: [4, "pleaxe enter a number lessthan 4 digits "],
    required: true,
    default: 1,
  },
  numOfReview: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
