var db          = require('../db'),
    Sequelize   = require('sequelize'),
    Booker      = require('./Booker'),
    BookingItem = require('./BookingItem');

var Booking = db.define('Booking', {
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

Booking.belongsTo(Booker, { as: 'booker', foreignKey: { name: 'booker_id', allowNull: false } });
Booking.hasMany(BookingItem, { as: 'items', foreignKey: { name: 'booking_id', allowNull: false} });

module.exports = Booking;
