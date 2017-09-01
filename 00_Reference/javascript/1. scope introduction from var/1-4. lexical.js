function f1() {
    var a = 10;
    f2();
}

function f2() {
    // 이건 당연히 가능
    return console.log('f2 호출됨');

    // 함수 정의 영역이 다르기 때문에 f1 내에 함수가 쓰였다고 해도 참조할 수 없다.
    // return a;    // a is not defined

}

f1();