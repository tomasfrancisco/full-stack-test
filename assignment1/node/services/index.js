var express     = require('express'),
    router = express.Router(),
    bookersService = require('./bookers');

router.use('/bookers', bookersService);

module.exports = router;
