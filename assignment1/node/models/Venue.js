var db   = require('../db'),
    Item = require('./Item');

var Venue = db.Model.extend({
  tableName: 'venues',
  items: function() { return this.hasMany(Item) }
});

module.exports = Venue;
