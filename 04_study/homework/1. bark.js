var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

const ip = '127.0.0.1';
const port = 1338;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {

    var html =
    `
    <!DOCTYPE HTML>
    <html>
        <head>
        <meta charset = "utf-8">
        </head>
        <body>
            <form action='receive' method='get'>
                <p>
                <input type='text' name='input'>
                <p>
                <input type='submit'>
        </body>
    </html>
    `

    res.send(html);

});

app.get('/receive', function(req, res){
   
    var array = new String(req.query.input).split("");
    var n = array.length;
    var max = -1;

    function palin(from, to)
    {
        var temp = array.slice(from, to);

        if(temp.join("") === temp.reverse().join(""))
            return temp.length;
        return 0;        
    }

    function solve(callback)
    {
        for(var i = 0 ; i <= n ; ++i)
        {
            for(var j = i+1 ; j <= n ; ++j)
            {
                max = Math.max(palin(i, j), max);
            }
        }

        callback();
    }

    solve(function(){
        res.send('result is : ' + max);
    });
});

app.listen(port, ip, function(){
  console.log("server listening on loopback:1338");
});