const router = require("express").Router()
const User = require('../../models/User')
const House = require('../../models/House')
const Booking = require('../../models/Booking')

router.get('/my-bookings', async (req, res) => {
    const { userId } = req.query

    try {
        // verify user
        const user = await User.singleOrDefault({id: userId})
        if(!user) {
            return res.status(400).send({status: 400, message: 'User does not exists'})
        }

        //find bookings
        const bookings = await Booking.query().select('*').join('houses', 'bookings.house_id', '=', 'houses.id')
        if(bookings.length < 1) {
            return res.status(400).send({status: 400, message: 'Could not find bookings'})
        }

        return res.send({status: 200, message: bookings})
    } catch(err) {
        res.status(500).send({status: 500, message: 'Could not find bookings'})
    }
})

router.post('/make-booking', async (req, res) => {
    const { houseId, renterId } = req.query
    const { adults, children, startDate, endDate } = req.body
    
    try {
        //verify user
        const user = await User.singleOrDefault({id: renterId})
        if(!user) {
            return res.status(400).send({status: 400, message: 'User does not exists'})
        }

        //verify house
        const house = await House.singleOrDefault({id: houseId})
        if(!house) {
            return res.status(400).send({status: 400, message: 'House does not exists'})
        }
        
        await Booking.query().insert({
            house_id: houseId,
            renter_id: renterId,
            adults: adults,
            children: children,
            start_date: startDate,
            end_date: endDate
        })

        return res.send({status: 200, message: 'booking created, check your bookings'})
    } catch(err) {
        res.status(500).send({status: 500, message: 'Could not make a booking'})
    }
})

module.exports = router