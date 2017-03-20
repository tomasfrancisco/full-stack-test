var Booker         = require('../../models/Booker'),
    User           = require('../../models/User'),
    ErrorGenerator = require('../../utils/ErrorGenerator'),
    SortQuery      = require('../../utils/SortQuery'),
    _              = require('lodash');

var middleware = {
  getAll: (req, res) => {
    return Booker.findAll({
      limit: req.query['$limit'],
      offset: req.query['$offset'],
      include: {
        model : User,
	      required : true
      },
      order: SortQuery.getList(req.query['$sort'])
    }).then(
      (bookers) => res.json(bookers)
    ).catch((err) => ErrorGenerator.generate(500, err.message, res));;
  },

  get: (req, res) => {
    return Booker.find({
      where: { id: req.params.id },
      include: {
        model : User,
	      required : true
      }
    }).then(
      (booker) => res.json(booker)
    ).catch((err) => ErrorGenerator.generate(500, err.message, res));
  }
}

module.exports = middleware;
