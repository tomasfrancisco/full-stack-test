var express         = require('express'),
    router          = express.Router(),
    bookersService  = require('./bookers'),
    bookingsService = require('./bookings'),
    venuesService   = require('./venues');

router.use('/:type(booker|bookers)', bookersService);
router.use('/:type(booking|bookings)', bookingsService);
router.use('/:type(venue|venues)', venuesService);

module.exports = router;
