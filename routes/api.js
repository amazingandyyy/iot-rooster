var express = require('express');
var router = express.Router();
var clock_info = {};
let twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
/* GET users listing. */
router.post('/setclock', function(req, res) {
    // -POST /api/setclock
  clock_info = req.body
  console.log('clock_info: ', clock_info);
  res.send(clock_info)
});

router.post('/sentMessage', function(req, res) {
    // -POST /api/setclock
  var friend_phone = req.body.phoneNumber
  var name = req.body.name
  console.log('friend_phone: ', friend_phone);
  twilio.sendMessage({
      to: friend_phone,
      from: process.env.TWILIO_NUMBER,
      body: `Your friend ${name} cannot be waken up by sunlight, whould you help him/her?`
  }, (err, res) => {
      if (err) {
          console.log('err when send twilio SMS: ', err);
          return res.status(500).send('fail to send')
      }
      res.send('send')
  })
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

function sendTwilio(phone, message, successRes, cb) {
    console.log('check');
    twilio.sendMessage({
        to: phone,
        from: process.env.TWILIO_NUMBER,
        body: message
    }, (err, res) => {
        if (err) {
            console.log('err when send twilio SMS: ', err);
            return cb(err)
        }
        cb(null, successRes);
    })
}
