const express =require('express')
const {getProduct} = require('../controllers/productControllers.js')
const router = express.Router()
router.route('/products').get(getProduct)

module.exports =router

