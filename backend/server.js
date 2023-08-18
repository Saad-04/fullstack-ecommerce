const { config } = require('dotenv')
const app = require('./app')
const database = require('./config/dataBase')
const cloudinary = require('cloudinary').v2;
// handled uncaughed promise rejections 
// process.on("uncaughtException",(err)=>{
//     console.log(`Error: ${err.message}`)
//     console.log(`shutting down the server due to uncaught exception`)
//     process.exit(1)
// })

// config 
config({ path: 'backend/config/config.env' })

// connect to database 
// connect to cloud 
'CLOUDINARY_URL=cloudinary://293265826197626:7Xt2zHBmEXx83YVTxf7b5vxnBBQ@ddcchehkv'
cloudinary.config({
    cloud_name: 'ddcchehkv',
    api_key: '293265826197626',
    api_secret: '7Xt2zHBmEXx83YVTxf7b5vxnBBQ'
});
database()
// connect to server 
const server = app.listen(process.env.PORT, () => {
    console.log('server started on ', process.env.PORT)
})


// unhandled promise rejection
// process.on('unhandledRejection', (error) => {
//     console.log(`Error: ${error.message}`)
//     console.log(`shutting down the server duo to unhandled promise rejection`)
//     server.close(()=>{
//         process.exit(1)
//     })
// })
