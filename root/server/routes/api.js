const express = require('express')
const app = express()

// Require router files
const usersRoutes = require('./api/users.js')
const housesRoutes = require('./api/houses.js')
const bookingsRoutes = require('./api/bookings.js')

// Include the routes to express
app.use('/users', usersRoutes)
app.use('/houses', housesRoutes)
app.use('/bookings', bookingsRoutes)

module.exports = app