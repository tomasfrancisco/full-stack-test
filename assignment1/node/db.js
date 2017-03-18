var config    = require('./config.js').db,
    knex      = require('knex')(config),
    bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
