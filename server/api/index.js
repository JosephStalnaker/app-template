const router = require('express').Router();

//match routes for use
// router.use('/users', require('./users'));

// matches GET requests to /api/
//router.get('/', function (req, res, next) { /* etc */});

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

module.exports = router;
