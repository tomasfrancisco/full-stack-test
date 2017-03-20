var Booking        = require('../../models/Booking'),
    User           = require('../../models/User'),
    Booker         = require('../../models/Booker'),
    BookingItem    = require('../../models/BookingItem'),
    Item           = require('../../models/Item'),
    Space          = require('../../models/Space'),
    Venue          = require('../../models/Venue'),
    ErrorGenerator = require('../../utils/ErrorGenerator'),
    SortQuery      = require('../../utils/SortQuery'),
    Sequelize      = require('sequelize'),
    _              = require('lodash');


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
              include: {
                model: Space,
                as: 'space'
              }
            }
          },
          // TODO: Missing Venue fetch
        ],
        order: SortQuery.getList(req.query['$sort'])
      });
    }

    return modelPromise.then(
      (bookings) => res.json(bookings)
    ).catch((err) => ErrorGenerator.generate(500, err.message, res));;
  },

  get: (req, res) => {
    return Booking.find({
      where: { id: req.params.id },
      include: {
        model: Booker,
	      required: true
      }
    }).then(
      (booking) => res.json(booking)
    ).catch((err) => ErrorGenerator.generate(500, err.message, res));
  }
}

module.exports = middleware;
