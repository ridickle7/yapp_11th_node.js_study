var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var multer = require('multer');
var path = require('path');

// multer 
var storage = multer.diskStorage({
    // 서버에 저장할 폴더
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', 'public', 'images'));
    },
    // 서버에 저장할 파일 명
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpeg');
    }
});

var upload = multer({ storage: storage })

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
    connection.query('SELECT * FROM user;', function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
        var responseData = {
            'Data': data,
            'String': 'young',
            'json': 'json'
        }
        res.send(responseData);
        connection.end();
    });
});


router.post('/multiPart', upload.array('asdfg'), function (req, res, next) {      
    console.log(req.body); //form fields
    console.log(req.files); //form files

    res.send(req.files);
});

module.exports = router;