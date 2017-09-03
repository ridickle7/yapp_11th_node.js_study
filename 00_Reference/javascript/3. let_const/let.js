let foo = 'bar1';
console.log(foo); // bar1
// 전역 foo와 if 블록 안의 foo와 다른 변수로 인식
if (true) {
    let foo = 'bar2';
    console.log(foo) // bar2 (전역변수 foo 값 변경시킴)
}


console.log(foo) // bar1


// hoisting 지원 X
if (true) {
    console.log(foo2)
    // Uncaught ReferenceError: foo is not defined
    // tdz(temporal dead zone)
    let foo2 = 'bar2';
    console.log(foo2) // bar2
}


console.log(foo); // bar2