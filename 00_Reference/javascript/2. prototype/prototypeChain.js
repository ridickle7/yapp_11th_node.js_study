var A = function () { };
A.prototype.x = function () {
     console.log('hello');
};
var B = new A();
var C = new A();

// A의 프로토타입 프로퍼티를 그대로 가져옴
B.x();  
// A의 프로토타입 프로퍼티를 그대로 가져옴
C.x();  

// A가 바뀜
A.prototype.x = function () {
     console.log('world');
};

// 바뀐 프로토타입 프로퍼티가 그대로 적용됨
B.x();
// 바뀐 프로토타입 프로퍼티가 그대로 적용됨
C.x();
