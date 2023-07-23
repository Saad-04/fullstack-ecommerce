const express =require('express')
const {getAllProduct, createProduct, updateProduct, deleteProduct, getProductDetail} = require('../controllers/productControllers.js')
const { isAuthenticated, ownerRoles } = require('../middleware/auth.js')


const router = express.Router()

router.route('/products').get(isAuthenticated,ownerRoles('admin'),getAllProduct)
router.route('/product/new').post(createProduct)
router.route('/product/:id').get(getProductDetail).put(updateProduct).delete(deleteProduct)


module.exports =router

