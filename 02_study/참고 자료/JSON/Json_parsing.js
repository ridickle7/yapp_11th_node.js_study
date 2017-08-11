var newJson = require('./newJson.js'); // 커스텀 모듈 불러오기

var JsonValue = newJson.newJson;       // newJson 값을 가져오기

// json 값은 '.' 을 통하여 접근
console.log("JsonValue.hello : ", JsonValue.hello);     
console.log("JsonValue.array : ", JsonValue.array);  
console.log("JsonValue.array[1] : ", JsonValue.array[1]);  
console.log("JsonValue.json.nodejs : ", JsonValue.json.nodejs);  
console.log("JsonValue.json.team_member : ", JsonValue.json.team_member);  
console.log("JsonValue.json.team_member[5] : ", JsonValue.json.team_member[5]);  


