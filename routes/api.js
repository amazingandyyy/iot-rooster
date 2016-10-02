var express = require('express');
var router = express.Router();
var clock_info = {};
/* GET users listing. */
router.post('/setclock', function(req, res) {
    // -POST /api/setclock
  clock_info = req.body
  console.log('clock_info: ', clock_info);
  res.send(clock_info)
});

router.get('/clockjson', function(req, res) {
    // -GET /api/clockjson
    var totalSecond = clock_info.totalSecond
    res.send(totalSecond)
});

// router.get('/clock', function(req, res) {
//   res.render('clock', { info: `${JSON.stringify(clock_info)}` });
// });

module.exports = router;
