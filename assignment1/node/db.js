var Sequelize = require('sequelize'),
    config    = require('./config');

var db = new Sequelize('database', 'username', 'password', config.db);

module.exports = db;
