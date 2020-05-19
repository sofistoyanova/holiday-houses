const { Model } = require('objection')

class House extends Model {
    static get tableName() {
        return 'houses'
    }

      // return single record or null
    static async singleOrDefault (query) {
        let result = await this.query().select().where(query).limit(1);
        return result[0];
    }
}

module.exports = House