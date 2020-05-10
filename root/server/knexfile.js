const credentials = require('./config/db_config')

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: credentials.database,
      user: credentials.user,
      password: credentials.password
    }
  }
};
