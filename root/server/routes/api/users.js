const router = require("express").Router()
const User = require('../../models/User')
const bcrypt = require('bcrypt')
const saltRounds = 10

//Signup route (POST) - http://localhost:9091/api/users/signup
router.post("/signup", (req, res) => {
    const { email, password, repeatPassword, first_name, last_name } = req.body 
    // validate if values are entered
    if ( email && password && repeatPassword && password === repeatPassword ) {
        if ( password.length < 8 ) {
            return res.status(411).send({response: 'Password has to be atleast 8 chars.!'})
        } else {
            bcrypt.hash( password, saltRounds, async ( err, hashPassword ) => {
                if ( err ) {
                    return res.status(500).send({response: 'Cannot hash password'})
                }
                
                try {
                    const existingUser = await User.query().select().where({email: email}).limit(1)

                    if( existingUser[0] ) {
                        res.status(400).send({response: 'User already exists'})
                    } else {
                        const newUser = await User.query().insert({
                            email,
                            password: hashPassword,
                            first_name,
                            last_name
                        })

                        res.status(200).send({
                            email: newUser.email,
                            first_name: newUser.first_name
                        })
                    }

                } catch ( error ) {
                    return res.status(500).send({ response: "Something in the database" })
                }
            })
        }
    } else if ( password !== repeatPassword ) {
        return res.status(401).send({ response: "Password and repeat password should match" })
    } else {
        return res.status(401).send({ response: "Missing fields" })
    }
})


//Login route (POST) - http://localhost:9091/api/users/login
// Login via email and password
router.post("/login", async (req, res) => {
    const { email, password } = req.body

    if ( email && password ) {
        const [ user ] = await User.query().select().where({email: email}).limit(1)

        if ( !user ) {
            return res.status(404).send({ response: "Wrong email and/or password" })
        }

        await bcrypt.compare(password, user.password, (err, isSame) => {
            if ( err ) {
                return res.status(500).send({})
            } 
            if ( !isSame ) {
                return res.status(400).send({response: 'error'})
            } else {
                return res.status(200).send({ email: user.email, id: user.id }) 
            }
        })
    } else {
        return res.status(400).send({ response: "Missing email or password" })
    }
    
})


//User profile route (GET) - http://localhost:9091/api/users/userprofile
router.get("/userprofile/:id", async (req, res) => {
    const { id } = req.params
    if ( id ) {
        let user = await User.singleOrDefault({id: id})
        res.status(200).send({email: user.email, firstName: user.first_name, lastName: user.last_name })
    } else {
        res.status(401).send({response: 'Error in loading user profile'})
    }
})

// Update user password
router.post("/updatepw/:id", (req, res) => {
    const { id } = req.params
    const { newPassword, repeatPassword } = req.body

    if(newPassword && repeatPassword && newPassword === repeatPassword) {
        if ( newPassword.length < 8 ) {
            return res.status(400).send({response: "Password does not fulfill the requirements"})
        } else {
            bcrypt.hash(newPassword, saltRounds, async (error, hashPw) => {
                if( error ) { 
                    return res.status(500).send({response: 'Something went wrong'})
                }

                try {
                    const user_id = id
                    const updatePw = await User.query().update({
                        password: hashPw
                    }).where({id: user_id})

                    if( updatePw < 1 ) {
                        return res.send({response: 'Nope ) '})
                    }

                    res.status(200).send({
                        response: 'Password has succeccfully been updated!',
                        updatePassword: updatePw,
                        user_id: user_id // Returning the id for edited user
                    })
                    
                } catch (error) {
                    return res.status(500).send({ response: "Something went wrong with the database" })
                }
            })
        }
    } else if (newPassword !== retypePassword) {
        return res.send({ response: "Password and repeat password are not the same" })
    } else {
        return res.send({ response: "Missing fields" })
    }
})

module.exports = router