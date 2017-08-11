var http = require('http');
// var variable1;   // 함수형 데이터라는 정보까지 받아옵니다.
// var variable2;   // 변수형 데이터라는 정보까지 받아옵니다.

var server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-type":"text/plain"});
    response.write("Hello world");
    response.end();
})

server.listen(8888, variable1);  // 요건 문제 없다.

// 1번쨰 선언방식
function variable1(){
    console.log('asdfsjadf');
}

// 2번쨰 선언방식
var variable2 = function(){
    console.log('123j21421');
}

