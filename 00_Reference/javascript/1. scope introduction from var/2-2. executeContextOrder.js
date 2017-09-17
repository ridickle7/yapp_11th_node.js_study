// 외부 함수 scope
function multiple(a, b){
    var c = a * b;

    // 내부 함수 scope
    function printLog(d){
            console.log('곱한 값은 ' + d + '입니다.');
    }
    return printLog(c);
}

multiple(3, 2);
multiple(4, 3);