var express = require('express');
var path = require('path');
var fs = require('fs');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var engines = require('consolidate');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.engine('jade', engines.jade);
app.engine('ejs', engines.ejs);

// // view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

app.use(function(req, res, next) {
  console.log('다음 미들웨어(기능) 실행함');
  next('abcd');
});

app.use(function(ㄷㅌ, req, res, next) {
  console.log('넘어온 값: ' + ㄷㅌ);
  next();
});

app.get('/kiki', function(req,res){
  // fs.createReadStream('./public/images/image.png').pipe(res);      // 주석 : 따로 response.end() 해 줄 필요 없다.
  // // http://ourcstory.tistory.com/64 I/O stream 관련 레퍼런스
  fs.readFile('./public/images/image.png', 'image', function(error, data) { 
    res.send(data);
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
