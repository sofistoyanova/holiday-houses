const express = require('express')
const app = express()

// Require router files
const usersRoutes = require('./api/users.js')

// Include the routes to express
app.use('/users', usersRoutes)

module.exports = app