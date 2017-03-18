var db      = require('../db'),
    Item    = require('./Item'),
    Booking = require('./Booking');

var BookingItem = db.Model.extend({
  tableName: 'booking_items',
  item: function() { return this.belongsTo(Item) },
  booking: function() { return this.belongsTo(Booking) }
});

module.exports = BookingItem;
