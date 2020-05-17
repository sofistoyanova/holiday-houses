const express = require('express')
const app = express()

// Require router files
const usersRoutes = require('./api/users.js')
const houseRoutes = require('./api/houses.js')

// Include the routes to express
app.use('/users', usersRoutes)
app.use('/houses', houseRoutes)

module.exports = app