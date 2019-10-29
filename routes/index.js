var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('virker her');
  res.render('index', {type: ['GET', 'GET'], url: ['/cities', '/countries']})
});

module.exports = router;
