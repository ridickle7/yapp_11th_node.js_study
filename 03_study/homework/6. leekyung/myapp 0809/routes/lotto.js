var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  var numbers = [];
  var i = 0;
  while( i < 6 ){
    var rand = Math.random() * (45)
    rand = Math.floor(rand)+1
    if( numbers.indexOf(rand) == -1 )
    {
      numbers[i] = parseInt(rand)
      i++
    }
  }

  res.render('lotto', { numbers : numbers.sort( (a,b) => {return a-b;} ) });
});

module.exports = router;

