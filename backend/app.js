const express = require('express')
const app = express()
const product = require('./routes/productRout.js')
const user = require('./routes/userRout.js')
const errorMiddleware = require('./middleware/errorMiddleware.js')


app.use(express.json())
app.use('/api/v1', product)
app.use('/api/v1', user)
app.use(errorMiddleware)//this errorMiddleware function take 
//one argument this (new ErrorHandler(err.message, 404))

module.exports = app