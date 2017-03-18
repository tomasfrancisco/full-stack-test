var db     = require('../db'),
    Booker = require('./Booker');

var User = db.Model.extend({
  tableName: 'users',
  booker: function() { return this.hasOne(Booker) }
});

module.exports = User;
