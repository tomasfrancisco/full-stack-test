var middleware  = require('./middleware'),
    express     = require('express'),
    router      = express.Router();

router.get('/', middleware.getAll);
router.get('/:id', middleware.get);

module.exports = router;
