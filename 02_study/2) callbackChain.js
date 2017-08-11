var http = require('http');

var server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-type":"text/plain"});
    response.write("Hello world");
    response.end();
})

var chain3 = function(){
    console.log('3rd chain callback')
}

server.listen(8888, callbackFunction(chain1));

function callbackFunction(callback){
    console.log('server opened');
    callback(chain2);
};

function chain1(callback){
    console.log('1st chain callback')
    callback(chain3);
}


function chain2(callback){
    console.log('2nd chain callback')
    callback();
}

function chain4(){
    console.log('4rd chain callback')
}


// 1번째 선언 방법
function variable(){
    console.log('adklfjaks');
}

// 2번째 선언 방법
var variable = function(){
    console.log('adklfjaks');
}


// 함수 데이터를 파라미터로 활용할 수 있음
server.listen(8889, variable);



// http://blog.xcoda.net/65

// 라이브러리 프레임워크 플랫폼 설명
// http://jokergt.tistory.com/89    /    http://seulkom.tistory.com/45