var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('It\'s my hometask nodejs + express');
});

module.exports = router;
