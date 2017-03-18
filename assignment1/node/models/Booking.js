var db      = require('../db'),
    Booker    = require('./Booker'),
    BookingItem = require('./BookingItem');

var Booking = db.Model.extend({
  tableName: 'bookings',
  booker: function() { return this.belongsTo(Booker) },
  bookedItems: function() { return this.hasMany(BookingItem) }
});

module.exports = Booking;
