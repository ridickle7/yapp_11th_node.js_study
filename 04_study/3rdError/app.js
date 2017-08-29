var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

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

app.use(function(req, res, next){
  console.log('3개의 parameter');
  res.locals.ㄷㅌ = '김영중';      // 1번쨰 방식 : res 변수의 locals 영역에 저장
  next();
});

app.set('ㄷㅌ2', '최성훈');        // 2번쨰 방식 : app 서버 객체에 setter/getter

app.use(function(req, res, next){
  console.log('4개의 parameter');
  console.log('내가 뭐라고 입력? : ' + res.locals.ㄷㅌ);
  // console.log('내가 뭐라고 입력? : ' + app.get('ㄷㅌ2'));
  next();
});

app.use('/', index);
app.use('/users', users);

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
