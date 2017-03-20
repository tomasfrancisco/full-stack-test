var db        = require('../db'),
    Sequelize = require('sequelize'),
    Item      = require('./Item');

var Product = db.define('Product', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  price: {
    type: Sequelize.REAL,
    allowNull: false
  }
}, { });

Product.belongsTo(Item, { foreignKey: 'item_id' });

module.exports = Product;
