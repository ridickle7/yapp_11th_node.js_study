// 프로토타입 식별자 룩업

var a = {
    attr1: 'a'
};

var b = {
    __proto__: a,
    attr2: 'b'
};

var c = {
    __proto__: b,
    attr3: 'c'
};

console.log(c.attr1) // 'a'

// 1. c객체 내부에 attr1 속성을 찾는다. -> 없다.
// 2. c객체에 __proto__ 속성이 존재하는지 확인한다. -> 있다.
// 3. c객체의 __proto__ 속성이 참조하는 객체로 이동한다. -> b객체로 이동
// 4. b객체 내부에 attr1 속성을 찾는다. -> 없다.
// 5. b객체에 __proto__ 속성이 존재하는지 확인한다. -> 있다.
// 6. b객체의 __proto__ 속성이 참조하는 객체로 이동한다. -> a객체로 이동
// 7. a객체 내부에 attr1 속성을 찾는다. -> 있다.
// 8. 찾은 속성의 값을 리턴한다.
// 만약 attr0 일 경우 (어디에도 없는 경우)
// 9. a객체의 __proto__ 속성이 참조하는 객체로 이동한다. -> Object.prototype 로 이동
// 10. Object.prototype 에서 attr0 속성을 찾는다. -> 없다.
// 11. Object.prototype 에서 __proto__ 속성을 찾는다. -> 없다.
// 12. undefined를 리턴한다.