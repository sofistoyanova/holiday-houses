const { Model } = require('objection')

class House extends Model {
    static get tableName() {
        return 'houses'
    }
}

module.exports = House