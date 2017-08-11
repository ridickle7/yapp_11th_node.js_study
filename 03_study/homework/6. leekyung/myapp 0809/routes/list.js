var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  var mysql = require('mysql');
  var conn  = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '20142405',
    database : 'topic_db'
  });
  conn.connect();
  conn.query('SELECT * FROM topic', (err, rows, fields)=>{
    if(err)
    { console.log(err)  }
    else {
      res.render('list', { title : 'List', rows : rows});
    }
  })

});

module.exports = router;
