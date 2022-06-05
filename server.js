// import path from 'path/path'
// import express from 'express'
// import mongoose from 'mongoose'
// import api from './BE/api.js'

// const app = express()
// const PORT = 8080;

// mongoose.connect("mongodb://localhost/bank", { useNewUrlParser: true, useUnifiedTopology: true })

// app.use(express.urlencoded({ extended: false }))
// app.use(express.json())

// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

//     next()
// })
// app.use('/', api)

























// import { join } from 'path'
// import express, { urlencoded, json, static } from 'express'
// import { connect } from 'mongoose'
// // import api from './server/routes/api'
// import App from '/src/App.js'

// const app = express()
// const PORT = 9000

// connect(process.env.MONGODB_URI ||
//     "mongodb://localhost/mypocket",
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })

// app.use(urlencoded({ extended: false }))
// app.use(json())

// app.use(static(join(__dirname, 'dist')))
// app.use(static(join(__dirname, 'node_modules')))
// app.use('/', App)


// /*=====================================================
// Start the server:
// =======================================================*/

// app.listen(process.env.PORT || PORT, function () {
//     console.log(`Server up and running on port ${PORT}`)
// })
// //===============================================================================================