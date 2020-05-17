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
        table.string('street')
        table.string('street_number')
        table.string('pk')
        table.string('title')
        table.text('description')
        table.float('price_per_night')
        table.text('image_name')
        table.integer('user_id').unsigned() // add later - .notNullable()

        // Set foreign key
        table.foreign('user_id')
          .references('id')
          .inTable('users')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
      })
  };
  
  exports.down = function(knex) {
    return (
      knex.schema
        .dropTableIfExists('houses')
        .dropTableIfExists('users')
    )
  };
  