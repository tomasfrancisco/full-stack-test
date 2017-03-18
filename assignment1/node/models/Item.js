var db      = require('../db'),
    Venue   = require('./Venue'),
    Space   = require('./Space'),
    Product = require('./Product');

var Item = db.Model.extend({
  tableName: 'items',
  venue: function() { return this.belongsTo(Venue) },
  space: function() { return this.hasOne(Space) },
  product: function() { return this.hasOne(Product) }
});

module.exports = Item;
