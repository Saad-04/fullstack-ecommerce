const mongoose  = require('mongoose')

const database = async()=>{
try {
    const res = await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
    if(res){
    console.log(`database connected: to ${res.connection.host}`)
    }
} catch (error) {
    console.log(error)
}
}
module.exports = database