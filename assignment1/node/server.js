var express     = require('express'),
    bodyParser  = require('body-parser'),
    http        = require('http'),
    morgan      = require('morgan'),
    log         = require('./utils/log'),
    services    = require('./services'),
    ErrorGenerator = require('./utils/ErrorGenerator');

var app     = express();
var server  = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use('/', services);
app.use((req, res) => ErrorGenerator.generate(404, "Page not found", res));

server.listen(3000, () => {
  var port = server.address().port;

  log.info('Listening at http://localhost:%s', port);
});
