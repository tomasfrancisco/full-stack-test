var Booker = require('../../models/Booker');

var middleware = () => {
  return {
    getAllBookers: (req, res) => {
      console.log("getting bookers");
      return Booker.fetchAll().then((bookers) => {
        return bookers.mapThen(function(booker) {
          return booker.load(['user'])
        });
      }).then((bookers) => {
        res.json(bookers);
      }).catch((err) => {
        res.status(500).json({
          message: err.message
        });
      });
    }
  };
}

module.exports = middleware();
