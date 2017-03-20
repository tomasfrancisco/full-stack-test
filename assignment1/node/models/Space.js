var db        = require('../db'),
    Sequelize = require('sequelize');

var Space = db.define('Space', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  hour_price: {
    type: Sequelize.REAL,
    allowNull: false
  }
}, { });

module.exports = Space;
