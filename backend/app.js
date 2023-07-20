const express = require('express')
const app = express()
const router = require('./routes/productRout.js')
const errorMiddleware = require('./middleware/errorMiddleware.js')


app.use(express.json())
app.use('/api/v1', router)
app.use(errorMiddleware)//this errorMiddleware function take 
//one argument this (new ErrorHandler(err.message, 404))

module.exports = app