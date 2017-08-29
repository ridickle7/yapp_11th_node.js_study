var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var dbConfig = {
  host : '127.0.0.1',
  port : 3306,
  user : 'root',
  password : '1234',
  database : 'example2'
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sql', function(req,res,next){
  // 2. 커넥션이 생성됨
  var connection = mysql.createConnection(dbConfig);

  // 3. 쿼리문 실행
  connection.query('SELECT * FROM user', function(err, result){
    // 4. 결과값가지고 지지고 볶음
    res.send(result);
  });

  // 5. 커넥션 반납
  connection.end();
});

module.exports = router;
