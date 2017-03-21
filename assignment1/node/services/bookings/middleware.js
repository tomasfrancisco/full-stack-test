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

var mapVenueIntoBooking = (booking) => {
  var bookingJSON = booking.toJSON();
  if(bookingJSON.items) {
    if(bookingJSON.items[0].item && bookingJSON.items[0].item.venue) {
      bookingJSON.venue = bookingJSON.items[0].item.venue;
      delete bookingJSON.items[0].item.venue;
    }
  }
  return bookingJSON;
};

var middleware = {
  getAll: (req, res) => {
    var modelPromise = Booking;
    if(req.query['$count']) {
      modelPromise = modelPromise.count();
    } else {
      modelPromise = modelPromise.findAll({
        limit: req.query['$limit'],
        offset: req.query['$offset'],
        include: [{
            model: Booker,
            as: 'booker',
            include: {
              model: User
            }
          }, {
            model: BookingItem,
            as: 'items',
            include: {
              model: Item,
              as: 'item',
              include: [{
                model: Space,
                as: 'space'
              }, {
                model: Venue,
                as: 'venue',
                where: {
                  id: Sequelize.col('venue_id')
                }
              }]
            }
          }
        ],
        order: SortQuery.getList(req.query['$sort'])
      }).then(
        (bookings) => _.map(bookings, (booking) => mapVenueIntoBooking(booking))
      );
    }

    return modelPromise.then(
      (bookings) => res.json(bookings)
    ).catch((err) => ErrorGenerator.generate(500, err.message, res));;
  },

  get: (req, res) => {
    return Booking.find({
      where: { id: req.params.id },
      include: [{
        model: Booker,
        as: 'booker',
	      required: true
      }, {
        model: BookingItem,
        as: 'items',
        include: {
          model: Item,
          as: 'item',
          include: [{
            model: Space,
            as: 'space'
          }, {
            model: Venue,
            as: 'venue',
            where: {
              id: Sequelize.col('venue_id')
            }
          }]
        }
      }]
    }).then(
      (booking) => mapVenueIntoBooking(booking)
    ).then(
      (booking) => res.json(booking)
    ).catch((err) => ErrorGenerator.generate(500, err.message, res));
  }
}

module.exports = middleware;
