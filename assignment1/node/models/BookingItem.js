var db        = require('../db'),
    Sequelize = require('sequelize'),
    Item      = require('./Item');

var BookingItem = db.define('booking_item', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  locked_piece_price: {
    type: Sequelize.REAL,
    allowNull: false
  },
  locked_total_price: {
    type: Sequelize.REAL,
    allowNull: false
  },
  start_timestamp: {
    type: Sequelize.INTEGER
  },
  end_timestamp: {
    type: Sequelize.INTEGER
  }
}, { });

BookingItem.belongsTo(Item, { as: 'item', foreignKey: { name: 'item_id', allowNull: false } });

module.exports = BookingItem;
