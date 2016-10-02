var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/setclock', function(req, res) {
  console.log(req.body);
  res.send(req.body)
});

module.exports = router;
