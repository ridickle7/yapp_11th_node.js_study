var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbConfig = {
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '1234',
  database: 'example'
};

router.get('/', function (req, res, next) {

  var connection = mysql.createConnection(dbConfig);
  connection.connect();

  connection.query('SELECT * FROM user;', function (err, rows, fields) {
    if (err)
      throw err;
    console.log('fields : ', fields);
    res.send(rows);
  });

  // connection.end();
});




var connectionPool = {
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '1234',
  database: 'example',
  connectionLimit: 10
};

var pool = mysql.createPool(connectionPool);

router.get('/post', function (req, res, next) {
  pool.getConnection(function (err, connection) {
    var sql = 'SELECT * FROM user;';

    connection.query(sql, function (err, rows, fields) {
      if (err)
        throw err;
      console.log('fields : ', fields);
      res.send(rows);
    });

    connection.release();
  });
});

module.exports = router;
