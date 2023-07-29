const express = require('express')
const app = express()
const product = require('./routes/productRout.js')
const user = require('./routes/userRout.js')
const order = require('./routes/orderRout.js')
const errorMiddleware = require('./middleware/errorMiddleware.js')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser())
app.use('/api/v1', product)
app.use('/api/v1', user)
app.use('/api/v1', order)
app.use(errorMiddleware)//this errorMiddleware function take 
//one argument this (new ErrorHandler(err.message, 404))

module.exports = app