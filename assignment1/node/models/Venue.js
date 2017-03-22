var db        = require('../db'),
    Sequelize = require('sequelize');

var Venue = db.define('venue', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING(255),
    allowNull: false
  }
}, { });

module.exports = Venue;
