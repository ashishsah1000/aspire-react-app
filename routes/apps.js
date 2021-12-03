var express = require('express');
var router = express.Router();
const app = require('../app');


/* GET home page. */
router.get('/focus', function(req, res, next) {
  res.render('index', { title: 'Focus Page' });
});

router.post("/focus/create",(req,res,err)=>{
  var data = req.body;
  console.log(data);
  
  
})
module.exports = router;
