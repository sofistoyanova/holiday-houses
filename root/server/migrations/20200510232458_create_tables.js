exports.up = function(knex) {
    return knex.schema
      .createTable('users', (table) => {
          table.increments('id')
          table.string('email').unique()
          table.string('password')
          table.string('first_name')
          table.string('last_name')
          table.timestamp('created_at').defaultTo(knex.fn.now())
      })
      .createTable('houses', (table) => {
        table.increments('id')
        table.string('city')
        table.string('pk')
        table.string('title')
        table.string('rooms')
        table.string('beds')
        table.string('bathrooms')
        table.boolean('pet_allowed')
        table.string('category')
        table.text('description')
        table.float('price_per_night')
        table.text('image_name')
        table.integer('owner_id').unsigned() // add later - .notNullable() // this is the owner

        // Set foreign key
        table.foreign('owner_id')
          .references('id')
          .inTable('users')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
      })
      .createTable('bookings', (table) => {
        table.increments('booking_id')
        table.integer('house_id').unsigned().notNullable()
        table.integer('renter_id').unsigned().notNullable()
        table.string('adults')
        table.string('children')
        table.date('start_date')
        table.date('end_date')
      })
  };
  
  exports.down = function(knex) {
    return (
      knex.schema
      .dropTableIfExists('bookings')
        .dropTableIfExists('houses')
        .dropTableIfExists('users')
    )
  };
  