const router = require("express").Router();
const User = require('../../models/User')

// First endpoint
router.get('/', async (req, res) => {
    const users = await User.query()
    res.send(users)
})


//Signup route (POST)


//Login route (POST)


//User profile route (GET)
router.get("/userprofile", (req, res) => {
    console.log('hi')
    res.send('User profile')
});


module.exports = router