const mongoose  = require('mongoose')

const database = async()=>{
try {
    const res = await mongoose.connect()
    if(res){
    console.log('database connected')
    }
    else if(!res){
        console.log('database not connected ')
    }
} catch (error) {
    console.log(error)
}
}
module.exports = database