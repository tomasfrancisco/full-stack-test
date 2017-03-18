var db     = require('../db'),
    Item = require('./Item');

var Space = db.Model.extend({
  tableName: 'spaces',
  item: function() { return this.belongsTo(Item) }
});

module.exports = Space;
