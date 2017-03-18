var winston = require('winston');

var level = process.env.DEBUG ? "debug" : "info";

module.exports = new winston.Logger({
  transports: [
    new winston.transports.Console({
      colorize: true,
      level:    level
    })
  ]
});
