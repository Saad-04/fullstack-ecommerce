const { config } = require('dotenv')
const app = require('./app')
const database = require('./config/dataBase')


// handled uncaughed promise rejections 
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`)
    console.log(`shutting down the server due to uncaught exception`)
    process.exit(1)
})

// config 
config({ path: 'backend/config/config.env' })

// connect to database 
database()
// connect to server 
const server = app.listen(process.env.PORT, () => {
    console.log('server started on ', process.env.PORT)
})


// unhandled promise rejection 
process.on('unhandledRejection', (error) => {
    console.log(`Error: ${error.message}`)
    console.log(`shutting down the server duo to unhandled promise rejection`)
    server.close(()=>{
        process.exit(1)
    })
})
