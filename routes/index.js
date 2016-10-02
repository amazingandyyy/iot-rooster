var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'IoT rooster' });
});

router.get('/clock.html', function(req, res, next) {
  res.render('clock', { title: 'IoT rooster' });
});

module.exports = router;
