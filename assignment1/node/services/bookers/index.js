var middleware  = require('./middleware'),
    express     = require('express'),
    router      = express.Router();

router.get('/', middleware.getAllBookers);

module.exports = router;
