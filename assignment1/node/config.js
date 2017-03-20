const path = require('path');

var config = {
  db: {
    host: 'localhost',
    dialect: 'sqlite',
    define: {
      timestamps: false,
      underscored: true
    },
    storage: './database.sqlite'
  }
};

module.exports = config;
