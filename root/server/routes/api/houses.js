const router = require("express").Router()
const House = require('../../models/House')
const multer = require('multer')
const http = require('http')
const formidable = require('formidable')
const fs = require('fs') 
const { promisify } = require('util')
const pipeline = promisify(require('stream').pipeline)


// Set Storage Engine for multer
const storage = multer.diskStorage({
    destination:  function(req, file, cb) {
        cb(null, '../client/src/uploads')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname )
    }
})

router.get('/allhouses', async (req, res) => {
    const houses = await House.query().select()
    res.status(200).send(houses)
    
})

const upload = multer({ storage: storage })
router.post('/registerhouse', upload.single('file'), async (req, res) => {
    const { title, price, city, zip, type, description, rooms, bathrooms, petAllowed, beds, userId } = req.body
    const file = req.file

    if(!title || !price || !city || !zip || !type || !description || !file || !rooms || !beds || !bathrooms || !petAllowed || !file) {
        return res.send({status: 400, message: 'Please upload an image'})
    }else if(city.length < 2) {
        return res.send({status: 400, message: 'City should contain at least 2 characters'})
    }  else if(title.length < 2) {
        return res.send({status: 400, message: 'Title should contain at least 2 characters'})
    } else if(description.length < 50) {
        return res.send({status: 400, message: 'Description should contain at least 50 characters'})
    } else if(isNaN(zip)) {
        return res.send({status: 400, message: 'Zip should be a number'})
    } else if(isNaN(price)) {
        return res.send({status: 400, message: 'Price should be a number'})
    } else if(isNaN(rooms)) {
        return res.send({status: 400, message: 'Rooms should be a number'})
    } else if(isNaN(bathrooms)) {
        return res.send({status: 400, message: 'Bathrooms should be a number'})
    } else if(isNaN(beds)) {
        return res.send({status: 400, message: 'Beds should be a number'})
    } 
    

    if (file.mimetype !== 'image/jpeg') {
        return res.send({status: 400, message: 'File should be jpeg'})
    }

    let isPetAllowed = false
    if(petAllowed == 'yes') {
        isPetAllowed = true
    }
    const fileName = file.originalname
    
    cityLowerCased = city.toLowerCase()
    try {
        await House.query().insert({
            city: cityLowerCased,
            pk: zip,
            title: title,
            description: description,
            price_per_night: price,
            image_name: fileName,
            rooms: rooms,
            beds: beds,
            bathrooms: bathrooms,
            pet_allowed: isPetAllowed,
            category: type,
            owner_id: userId
        })
        return res.send({status: 200, message: 'Uploaded!'})
    } catch(err) {
        return res.send({status: 400, message: 'Error while uploading your house! Please try again later'})
    }
})

// Overview of a specific house route (NOT TESTED!)
router.get("/house/:id", async (req, res) => {
    const { id } = req.params
    const specificHouses = await House.query().select().where({id: id}).limit(1)
    const foundHouse = specificHouses[0]
    if (foundHouse) {
        return res.status(200).send({
            id: foundHouse.id,
            title: foundHouse.title,
            city: foundHouse.city,
            postalCode: foundHouse.pk,
            rooms: foundHouse.rooms,
            bathrooms: foundHouse.bathrooms,
            beds: foundHouse.beds,
            description: foundHouse.description,
            price_per_night: foundHouse.price_per_night,
            pet_allowed: foundHouse.pet_allowed,
            image_name: foundHouse.image_name
        })
    } else {
        return res.status(404).send({respone: 'House does not exists'})
    }
})

router.get('/filterhouse', async(req, res) => {
    const {city, startDate, endDate, rooms} = req.body
        try {
            const cityLowerCased = city.toLowerCase()
            if(city) {
                const houses = await House.query().select().where({ city: cityLowerCased })
                if(houses.length < 0 ) {
                    return res.send({status: 404, message: 'Houses not found'})
                }
                return res.send(houses)
            } else if(rooms) {
                const houses = await House.query().select().where({ rooms })
                if(houses.length < 0 ) {
                    return res.send({status: 404, message: 'Houses not found'})
                }
                return res.send(houses)
            } else if(startDate && endDate) {
                
            }
    } catch(err) {
        return res.send({status: 500, message: 'Could not find anything'})
    }
})


module.exports = router