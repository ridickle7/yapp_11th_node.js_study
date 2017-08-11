var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.render('write');
});

router.post('/', function(req, res, next){
  var mysql = require('mysql');
  var conn  = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '20142405',
    database : 'topic_db'
  });
  conn.connect();

  // DB에 등록
  // conn.query('SELECT max(id) FROM topic', (err,rows,fields)=>{
  //   if(err) console.log(err)
  //   else{
  //     res.send('max id : '+rows);
  //
  //   }
  // })
  var data = [ req.body.title, req.body.contents, 'unknown']
  conn.query('INSERT INTO topic(title,description,author) VALUES(?,?,?);',
   data,
   (err, rows, fields)=>{
     if(err)  console.log(err);
     else{
       res.redirect('/list')
     }
   })

})

module.exports = router;
