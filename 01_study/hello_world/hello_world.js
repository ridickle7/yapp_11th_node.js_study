var http = require('http');

var server = http.createServer(responseSetting);

function responseSetting(request, response){
    response.writeHead(200, {"Content-type":"text/plain"});
    response.write("Hello world");
    response.end();
}

server.listen(8888, addLog);

function addLog(){
    console.log("server open success : 8888");
}