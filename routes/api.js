var express = require('express');
var router = express.Router();
var clock_info = {};
/* GET users listing. */
router.post('/setclock', function(req, res) {
  clock_info = req.body
  console.log('clock_info: ', clock_info);
  res.send(clock_info)
});
router.get('/getlatestclock', function(req, res) {
  res.send(clock_info)
});

module.exports = router;
