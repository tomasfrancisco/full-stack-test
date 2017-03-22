var db        = require('../db'),
    Sequelize = require('sequelize'),
    User      = require('./User');

var Booker = db.define('booker', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  created: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
}, { });

Booker.belongsTo(User, { foreignKey: { name: 'user_id', allowNull : false } });

module.exports = Booker;
