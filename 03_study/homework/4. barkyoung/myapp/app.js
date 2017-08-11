var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();


var session  = require('express-session');
var flash    = require('connect-flash');

var cons = require('consolidate');
app.engine('html', cons.swig);
app.engine('ejs', cons.ejs);
app.set('views', path.join(__dirname, 'views/'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(flash());
app.use(session({
  secret: 'afsdfiuhaiufheui123uh1i2hiuhqwd',
  resave: false,
  saveUninitialized: true
}));

/*
 *  custom
 */

 var arr = new Array();
 var jsoninfo = new Object();

app.get('/', function(req, res){
  res.redirect('/login');
});

 app.get('/login', function(req, res){
  res.render('login');
});

app.post('/up_receiver', function(req, res){
  
  var first = req.body.firstname;
  var last = req.body.lastname;
  var email = req.body.email;
  var pass = req.body.password;
  var flag = false;

  arr.forEach(function(index){
    if(index.email === email)
          flag = true;
  });

  if(flag)
  {
    res.render('exist');
  }
  else
  {
    var temp = Object();
    temp.first = first;
    temp.last = last;
    temp.email = email;
    temp.pass = pass;

    arr.push(temp);

    console.log(arr);

    res.render('reg_done');
  }
});

app.post('/index', function(req, res){
  var temail = req.body.email;
  var tpass = req.body.password;
  var flag = false;

  arr.forEach(function(index){
    if(index.email === temail)
      if(index.pass === tpass)
      {
          flag = true;
      }
  });

  if(flag)
     res.render('front');
  else
     res.render('invaild');
});


function oneTicket (){ 

		 var array = new Array; 

     for ( var n = 1; n < 46; n++ )
         	 array.push(n); 

		 array.sort( function(){
          return Math.random() - 0.5; 
     }); 

		 var start = Math.floor( Math.random() * 40 );    
		 var newArray = array.slice( start, (start + 6) );  

     newArray.sort( function(a, b){
        return a - b;
     });
  

     return newArray.join(" ");
  }

app.post('/check', function(req, res){

   var num = req.body.lotto;
   var random = oneTicket();

   var url = 
`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Sign-Up/Login Form</title>
  <link href='https://fonts.googleapis.com/css?family=Titillium+Web:400,300,600' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="/stylesheets/style.css">
</head>

<body>
  <div class="form">
      
  <h1>
    <p align="center">Your LOTTO number is</p>
    <p align="center">${num}</p>
    <p align="center"> Win LOTTO number is</p>
    <p align="center">${random}</p> 
  </h1>   

      
  </div> <!-- /form -->
  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

  <script src="js/index.js"></script>

</body>
</html>
`

res.send(url);

});


/*
 *
 */

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