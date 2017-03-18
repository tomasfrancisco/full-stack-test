var db     = require('../db'),
    Booker = require('./Booker');

var Product = db.Model.extend({
  tableName: 'products',
  booker: function() { return this.hasOne(Booker) }
});

module.exports = Product;
