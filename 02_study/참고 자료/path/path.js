var path = require('path');

console.log(__dirname);                                        // 이 파일이 존재하는 디렉토리 값 리턴
console.log(path.join(__dirname, '../', 'custom_module'));     // 경로를 만들고 리턴 (리눅스 개념을 적용하며, 경로가 실제 있는 경로인지는 신경쓰지 않는다.)     
console.log(path.extname('path2.js'));                         // 파라미터 값(path2.js)의 확장자 확인