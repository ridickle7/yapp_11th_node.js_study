var url = require('url');

var urlStr = 'http://localhost:8080/read/search?search=example.txt';
// 주석 : parsedURL = [pathname = /write/input, query.search = example.txt, .......]
var parsedURL = url.parse(urlStr, true);  // true가 있으면 json 형태로 리턴

console.log(parsedURL.pathname);
console.log(parsedURL.query);