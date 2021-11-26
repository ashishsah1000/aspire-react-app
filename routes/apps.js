var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/focus', function(req, res, next) {
  res.render('index', { title: 'Focus Page' });
});

module.exports = router;
