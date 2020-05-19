const { Model } = require('objection')

class Booking extends Model {
    static get tableName() {
        return 'bookings'
    }
}

module.exports = Booking