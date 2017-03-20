var Venue          = require('../../models/Venue'),
    User           = require('../../models/User'),
    ErrorGenerator = require('../../utils/ErrorGenerator'),
    SortQuery      = require('../../utils/SortQuery'),
    _              = require('lodash');

var middleware = {
  getAll: (req, res) => {
    return Venue.findAll({
      limit: req.query['$limit'],
      offset: req.query['$offset'],
      order: SortQuery.getList(req.query['$sort'])
    }).then(
      (venues) => res.json(venues)
    ).catch((err) => ErrorGenerator.generate(500, err.message, res));
  },

  get: (req, res) => {
    return Venue.find({
      where: { id: req.params.id },
    }).then(
      (venue) => res.json(venue)
    ).catch((err) => ErrorGenerator.generate(500, err.message, res));
  }
}

module.exports = middleware;
