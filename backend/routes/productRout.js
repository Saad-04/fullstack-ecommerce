const express =require('express')
const {getAllProduct, createProduct, updateProduct, deleteProduct, getProductDetail} = require('../controllers/productControllers.js')

const router = express.Router()

router.route('/products').get(getAllProduct)
router.route('/product/new').post(createProduct)
router.route('/product/:id').get(getProductDetail).put(updateProduct).delete(deleteProduct)


module.exports =router

