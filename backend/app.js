const express = require('express')
const app = express()
const product = require('./routes/productRout.js')
const user = require('./routes/userRout.js')
const order = require('./routes/orderRout.js')
const errorMiddleware = require('./middleware/errorMiddleware.js')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
// const fileUpload = require('express-fileupload')

app.use(express.json())
app.use(cookieParser())
// app.use(fileUpload())
app.use(bodyParser.urlencoded({ extended: true }))
// user all router here 
app.use(cors()); // Enable CORS for all routes
app.use('/api/v1', product)
app.use('/api/v1', cors(), user)
app.use('/api/v1', order)
app.use(errorMiddleware)//this errorMiddleware function take 
//one argument this (new ErrorHandler(err.message, 404))

module.exports = app