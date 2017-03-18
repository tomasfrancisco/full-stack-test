var express     = require('express'),
    bodyParser  = require('body-parser'),
    http        = require('http'),
    morgan      = require('morgan'),
    log         = require('./utils/log'),
    services    = require('./services');

var app     = express();
var server  = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use('/', services);

server.listen(3000, () => {
  var port = server.address().port;

  log.info('Listening at http://localhost:%s', port);
});
