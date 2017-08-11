var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res, next){
  if(req.params.id){
    var mysql = require('mysql');
    var conn  = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '20142405',
      database : 'topic_db'
    });
    conn.connect();
    var id = parseInt(req.params.id)
    conn.query('SELECT * FROM topic WHERE id=?', [id],
     (err, rows, fileds)=>{
       if(err){
        console.log(err)
       }
       if(rows){
         console.log(rows[0])
         res.render('view', { title: rows[0].title, contents : rows[0].description, author : rows[0].author } )
       }
    })
  }
  else
    res.send('no id')
});

module.exports = router;
