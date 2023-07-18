const express =require('express')
const {getAllProduct, createProduct, updateProduct, deleteProduct, getProductDetail} = require('../controllers/productControllers.js')

const router = express.Router()

router.route('/products').get(getAllProduct)
router.route('/product/single/:id').get(getProductDetail)
router.route('/product/new').post(createProduct)
router.route('/product/update/:id').put(updateProduct)
router.route('/product/delete/:id').delete(deleteProduct)


module.exports =router

