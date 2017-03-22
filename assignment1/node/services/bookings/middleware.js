var Booking        = require('../../models/Booking'),
    User           = require('../../models/User'),
    Booker         = require('../../models/Booker'),
    Booking        = require('../../models/Booking'),
    BookingItem    = require('../../models/BookingItem'),
    Item           = require('../../models/Item'),
    Space          = require('../../models/Space'),
    Venue          = require('../../models/Venue'),
    ErrorGenerator = require('../../utils/ErrorGenerator'),
    SortQuery      = require('../../utils/SortQuery'),
    Sequelize      = require('sequelize'),
    _              = require('lodash');

var fixVenueMapping = (booking) => {
  var bookingJSON = booking.toJSON();

  bookingJSON.venue = null;
  
  if(bookingJSON.venue_id || bookingJSON.venue_name) {
    bookingJSON.venue = {
      id: bookingJSON.venue_id,
      name: bookingJSON.venue_name
    };
  }

  delete bookingJSON.venue_id;
  delete bookingJSON.venue_name;

  return bookingJSON;
};

var bookingQuery = (options) => {
  var query = {
    subQuery: false,
    attributes: {
      include: [
        [ Sequelize.col('items.item.venue.id'), 'venue_id' ],
        [ Sequelize.col('items.item.venue.name'), 'venue_name' ],
      ]
    },
    include: [{
      model: Booker,
      as: 'booker',
      required: false,
      include: {
        model: User
      }
    }, {
      model: BookingItem,
      as: 'items',
      required: false,
      include: {
        model: Item,
        as: 'item',
        required: false,
        include: [{
          model: Space,
          as: 'space'
        }, {
          model: Venue,
          as: 'venue',
          required: false,
          attributes: {
            exclude: [ 'id', 'name' ]
          },
          where: {
            id: Sequelize.col('venue_id')
          }
        }]
      }
    }]
  };

  query.limit = options.limit ? options.limit : null;
  query.offset = options.offset ? options.offset : null;
  query.where = options.id ? { id: options.id } : null;
  query.order = options.sortQuery ? SortQuery.getList(options.sortQuery) : null;

  return query;
};

var middleware = {
  getAll: (req, res) => {
    var modelPromise = Booking;
    if(req.query['$count']) {
      modelPromise = modelPromise.count();
    } else {
      modelPromise = modelPromise.findAll(
        bookingQuery({
          limit: req.query['$limit'],
          offset: req.query['$offset'],
          sortQuery: req.query['$sort']
        })
      ).then(
        (bookings) => _.map(bookings, (booking) => fixVenueMapping(booking))
      );
    }

    return modelPromise.then(
      (bookings) => res.json(bookings)
    ).catch((err) => ErrorGenerator.generate(500, err.message, res));;
  },

  get: (req, res) => {
    return Booking.find(
      bookingQuery({
        id: req.params.id
      })
    ).then(
      (booking) => fixVenueMapping(booking)
    ).then(
      (booking) => res.json(booking)
    ).catch((err) => ErrorGenerator.generate(500, err.message, res));
  }
}

module.exports = middleware;
