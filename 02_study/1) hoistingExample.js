var http = require('http');

var server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-type":"text/plain"});
    response.write("Hello world");
    response.end();
})


server.listen(8888, callFunction);  // 요건 문제 없다.

// callFunction2가 정상적으로 실행되지 않는다. (hoisting 관련 이슈)
// server.listen(8888, callFunction2);  

function callFunction(){
    console.log('define function call Started');
}

var callFunction2 = function(){
    console.log('variable function call Started');
}




