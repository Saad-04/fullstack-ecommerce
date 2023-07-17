const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
    name: {
        type: String,
        required: [true, 'please enter a valid name']
    },
    description: {
        type: String,
        required: [true, 'please enter a discription of product']
    },
    price: {
        type: Number,
        required: [true, 'please enter a product price'],
        maxLength: [0, 'please enter price lessthan 8 digits ']
    },
    rating: {
        type: Number,
        default: 0
    },
    image: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ],
    category: {
        type: [String, 'please select a category'],
        required: true
    },
    stock: {
        type: Number,
        maxlength: [4, 'pleaxe enter a number lessthan 4 digits '],
        required: true,
        default: 1

    },
    numOfReview: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
}
)

module.exports = mongoose.model('Product',productSchema)