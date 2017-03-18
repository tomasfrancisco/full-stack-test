var Booker         = require('../../models/Booker');
var ErrorGenerator = require('../../utils/ErrorGenerator');

var middleware = () => {
  return {
    getAll: (req, res) => {
      return Booker.fetchAll().then(
        (bookers) => bookers.mapThen((booker) => booker.load(['user']))
      ).then((bookers) => res.json(bookers)
      ).catch((err) => ErrorGenerator.generate(500, err.message));
    },

    get: (req, res) => {
      return Booker.forge().where({
        id: req.params.id
      }).fetch().then((booker) => {
        res.json(booker);
      }).catch((err) => ErrorGenerator.generate(500, err.message));
    }
  };
}

module.exports = middleware();
