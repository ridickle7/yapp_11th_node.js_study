var express = require('express');
var app = express();

// use static file
app.use(express.static(__dirname+'/public'));
// routing
app.set('views','./views');
app.set('view engine','ejs');

app.get('/lotto',function(req,res){
	res.render('lotto',{title:'random lotto'});
});

app.get('/',function(req,res){
	res.render('home');
	console.log("listen 3000 port");
	console.log(__dirname);
});
app.listen(3000);