const express = require('express')
const app = express()
const port = 9091


app.use(express.urlencoded({extended: false}));
app.use(express.json());

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