var db        = require('../db'),
    Sequelize = require('sequelize'),
    Venue     = require('./Venue'),
    Space     = require('./Space');

var Item = db.define('Item', {
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

Item.belongsTo(Venue, { as: 'venue', foreignKey: 'venue_id' });
Item.hasOne(Space, { as: 'space', foreignKey: 'item_id' });

module.exports = Item;
