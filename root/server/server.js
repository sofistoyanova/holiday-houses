const express = require('express')
const app = express()
const port = 9091

app.use(express.urlencoded({extended: false}))
app.use(express.json())

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:9091")
    res.header("Access-Control-Allow-Origin", "http://localhost:3000")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, HEAD, OPTIONS")
    res.header("Access-Control-Allow-Credentials", true)
    next()
})

// Require routes
const apiRoutes = require('./routes/api.js')

// Knex 
const Knex = require('knex')
const knexFile = require('./knexfile')
const knex = Knex(knexFile.development)

// Objection
const { Model } = require('objection')

// Bind all models to the knex instance
Model.knex(knex)

// Include routes to express
app.use('/api', apiRoutes)

// Start the server
app.listen(port, (error) => {
    if(error) {
        return console.log('Error running express')
    }
    console.log('Server is running on port: ', port)
})