// 객체(인스턴스) 생성 방법
var obj1 = {};                      // 객체 생성 방법 1
var obj2 = new Object();            // 객체 생성 방법 2

var fun1 = function(){};            // 함수 생성 방법 1
var fun2 = new Function("", "");    // 함수 생성 방법 2	

// 1. obj1 과 obj2 의 값은 같을까?
console.log('obj1의 type : ', typeof(obj1));
console.log('obj2의 type : ', typeof(obj2));
console.log('typeof(obj1) == typeof(obj2) : ', typeof(obj1) == typeof(obj2));
console.log('typeof(obj1) === typeof(obj2) : ', typeof(obj1) === typeof(obj2));

console.log(Object);

// 2. fun1 과 fun2 의 값은 같을까?
console.log('fun1의 type : ', typeof(fun1));
console.log('fun2의 type : ', typeof(fun2));
console.log('typeof(fun1) == typeof(fun2) : ', typeof(fun1) == typeof(fun2));
console.log('typeof(fun1) === typeof(fun2) : ', typeof(fun1) === typeof(fun2));

console.log(Function);