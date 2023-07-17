const { config } = require('dotenv')
const app = require('./app')
const database = require('./config/dataBase')

config({path:'backend/config/config.env'})

database()

app.listen(process.env.PORT,()=>{
console.log('server started on ',process.env.PORT)
})
