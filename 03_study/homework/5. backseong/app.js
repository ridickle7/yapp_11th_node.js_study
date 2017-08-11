var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var app = express();

// view engine setup
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

// 바디파서, form get data to controller
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));

// express를 이용한 것!
// library로 하드코딩하면 if문이 너무 많아짐
app.get('/abcd', function(request, response){
  response.send('/abcd를 받았는데 심심해!');
})

app.get('/lotto', function(request, response){
  var result; // 등수

  /////
  var inputNumbers = new Array(6);
  for(var i=0; i<inputNumbers.length; i++){
    inputNumbers[i] = request.param('num'+(i+1));
  }

  /////
  var lottoNumbers = new Array(6);
  for(var i=0; i<lottoNumbers.length; i++){
    lottoNumbers[i] = parseInt(Math.random()*45) + 1; // 로또 번호
  }
  var bonusNumber = parseInt(Math.random()*45) + 1; // 보너스 번호

  /////
  var lottoCount = 0; // 맞은 수 개수
  var bonusFlag = false; // 보너스
  for(var i=0; i<lottoNumbers.length; i++){
    // if(lottoNumbers.contains(inputNumbers[i])) lottoCount++;
    if(inputNumbers.includes(lottoNumbers[i]))
      lottoCount++;
  }
  if(inputNumbers.includes(bonusNumber)) bonusFlag = true;

  /////
  if(lottoCount == 6) result = "1등";
  else if(lottoCount == 5 && bonusFlag == true) result = "2등";
  else if(lottoCount == 5) result = "3등";
  else if(lottoCount == 4) result = "4등";
  else result = "꽝"

  result += "(맞은 개수 : " + lottoCount + " / 보너스 여부 : " + bonusFlag + ")";
  response.send(result);
})

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
