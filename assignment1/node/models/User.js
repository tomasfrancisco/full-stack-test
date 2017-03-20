var db        = require('../db'),
    Sequelize = require('sequelize');

var User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  first_name: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  last_name: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  registered: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(255),
    allowNull: false
  }
}, { });

module.exports = User;
