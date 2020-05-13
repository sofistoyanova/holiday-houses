const router = require("express").Router();
const House = require('../../models/House');
const multer = require('multer')

// Set Storage Engine for multer
const storage = multer.diskStorage({
    destination:  function(req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now()+ '-' + file.originalname )
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(new Error(), false)
    }
}

// Init upload
const upload = multer({ 
    storage: storage, 
    limits: {
        fileSize: 1024 * 1024 * 5 // accept files up to 5mb 
    },
    fileFilter: fileFilter
}).single('houseImage')

router.get('/allhouses', async (req, res) => {
    const houses = await House.query().select()
    res.send(houses)
})

router.post('/registerhouse', (req, res) => {
    
    upload(req, res, async (err) => {
        // If file was uploaded
        if(!req.file) {
            return res.status(400).send({status: 400, message: 'Please upload an image'})
        }

        // If error with file type or size
        if(err) {
            return res.status(400).send({status: 400, message: 'File type should be png or jpgeg. Allowed file size is 5MB.'})
        }

        const fileName = req.file.filename
        const { city, street, streetNumber, pk, pricePerNight, title, description } = req.body

        if(!city || !street || !streetNumber || !pk || !pricePerNight || !title || !description) {
            return res.status(400).send({status: 400, message: 'Please fill in all user details'})
        } else if(city.length < 2) {
            return res.status(400).send({status: 400, message: 'City should contain at least 2 characters'})
        } else if(street.length < 2) {
            return res.status(400).send({status: 400, message: 'Street should contain at least 2 characters'})
        } else if(title.length < 2) {
            return res.status(400).send({status: 400, message: 'Title should contain at least 2 characters'})
        } else if(description.length < 2) { // change later!!!
            return res.status(400).send({status: 400, message: 'Description should contain at least 50 characters'})
        } else if(isNaN(streetNumber)) {
            return res.status(400).send({status: 400, message: 'Street number should be a number'})
        } else if(isNaN(pk)) {
            return res.status(400).send({status: 400, message: 'PK should be a number'})
        } else if(isNaN(pricePerNight)) {
            return res.status(400).send({status: 400, message: 'Price should be a number'})
        } 

        // Create new house
        try {
            const house = await House.query().insert({
                city: city,
                street: street,
                street_number: streetNumber,
                pk: pk,
                title: title,
                description: description,
                price_per_night: pricePerNight,
                image_name: fileName

            })

            return res.send(house)
        } catch(err) {
            res.status(500).send({status: 500, message: 'Could not create a house'})
        }
    })
})


module.exports = router