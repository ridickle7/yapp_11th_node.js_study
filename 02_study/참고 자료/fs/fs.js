var fs = require('fs');

// 비동기로 파일 읽기
fs.readFile('example.txt', 'utf8', function(err, result){
   if(err){
      console.log(err);
   }
   
   else{
      console.log(result);
   }
});

// 동기로 파일 읽기
// console.log(fs.readFileSync('example.txt', 'utf8'));
