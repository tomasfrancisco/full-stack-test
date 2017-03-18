const path = require('path');

var config = {
  db: {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, 'sqlite.db')
    },
    useNullAsDefault: true
  }
};

module.exports = config;
