const express = require('express')
const router = express.Router()
const User = require('../../models/User')

// First endpoint
router.get('/', async (req, res) => {
    const users = await User.query()
    res.send(users)
})

module.exports = router