var db      = require('../db'),
    User    = require('./User'),
    Booking = require('./Booking');

var Booker = db.Model.extend({
  tableName: 'bookers',
  user: function() { return this.belongsTo(User) },
  bookings: function() { return this.hasMany(Booking) }
});

module.exports = Booker;
