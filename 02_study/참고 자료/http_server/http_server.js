var http = require('http');
var url = require('url');
var fs = require('fs');

// 클라이언트로부터 메세지를 받는다.
// URL에 따라 + request.method 에 따라 조건문 처리해준다.  // 1. GET, POST    2. URL의 내용을 분석  


var httpServer = http.createServer(function (request, response) {
   var method = request.method.toLowerCase();
   // console.log("request.method : ", method);
   // console.log("request.method : ", request.url);
   
   // URL 분석
   var parsedURL = url.parse(request.url, true);
   console.log('parseURL.pathname : ', parsedURL['pathname'], ' parseURL.query : ', parsedURL['query']);
   // console.log('parseURL 배열 분석 : ', parsedURL);
   // 주석 : ex> URL : http://localhost:8080/read/search?search=example.txt
   // 주석 : parsedURL = [pathname = /write/input, query.search = example.txt, .......] 
   
   // 주석 : method가 get일 경우
   if (method == 'get') {
      // 주석 : URL이 http://localhost:8080/read 인 경우
      if (parsedURL['pathname'] == '/read') {
         console.log('URL : ', parsedURL['pathname'], " 일반 text 응답 (헬로우 node 텍스트 값 보내줘)");
         response.writeHead(200, { 'Content-type': 'text/plain; charset=UTF-8' });
         response.write("헬로우 node");
         response.end();
      }
      
      // 주석 : URL이 http://localhost:8080/read/search?search=example.txt 인 경우  (쿼리 key : search / 쿼리 value : example)
      else if (parsedURL['pathname'] == '/read/search') {
         console.log('URL : ', parsedURL['pathname'], " 쿼리에 있는 value 파일 찾아 응답 (쿼리 value하고 매치되는 메모장 내용 보내줘");
         
         // 주석 : 쿼리 search가 비어있거나 example.txt가 아닌 경우
         if (parsedURL['query'].search != 'example.txt') {
            response.writeHead(200, { 'Content-type': 'text/plain; charset=UTF-8' });
            response.end('query 데이터가 비어있거나 example.txt값이 아닙니다. URL을 http://localhost:8080/read/search?search=example.txt 로 입력해주세요.')
         }
         else {
            fs.readFile(parsedURL['query'].search, 'utf8', function(err, result){
               if(err){
                  console.err(err);
                  return;
               }
               else{
                  response.writeHead(200, { 'Content-type': 'text/plain; charset=UTF-8' });
                  response.end(result);
               }
            });
            // var data = fs.readFileSync(parsedURL['query'].search, 'utf8');    // parsedURL['query'].search : key 값 search에 있는 value 값
            // response.end(data);     // response.write(data); + response.end();
         }
      }
      // 주석 : URL이 http://localhost:8080/edit 인 경우 
      else if (parsedURL['pathname'] == '/edit') {
         console.log('URL : ', parsedURL['pathname'], " 이미지 응답 (사진 보내줘)");
         response.writeHead(200, { 'Content-type': 'image/png; charset=UTF-8' });
         fs.createReadStream('image.png').pipe(response);      // 주석 : 따로 response.end() 해 줄 필요 없다.
      }
      else if (parsedURL['pathname'] == '/favicon.ico') {   // 주석 : 여기선 따로 처리 안해줌
         console.log('URL : ', parsedURL['pathname'], " favicon.ico 이미지 응답 (아이콘 이미지 보내줘)");
      }
      else {
         var str = 'URL : this URL is not used';
         console.log(str);
         response.writeHead(200, { 'Content-type': 'text/plain; charset=UTF-8' });
         response.end(str);
      }
   }
   
   // 주석 : method가 post인 경우
   else if (method == 'post') {
      
   }
});



httpServer.listen(8080, function () {
   console.log("Server is open 8080 ");
});