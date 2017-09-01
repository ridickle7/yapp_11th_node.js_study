var 가 = '가';
var 나 = '나';

function multiple(a, b){
    var c = a * b;

    function printLog(d){
            console.log('곱한 값은 ' + d + '입니다.');
    }
    return printLog(c);
}

multiple(3, 2);