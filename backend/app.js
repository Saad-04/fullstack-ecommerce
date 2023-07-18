const express = require('express')
const app =express()
const router = require('./routes/productRout.js')
const errorMiddleware  = require('./middleware/errorMiddleware.js')


app.use(express.json())
app.use('/api/v1',router)
app.use(errorMiddleware)

module.exports = app