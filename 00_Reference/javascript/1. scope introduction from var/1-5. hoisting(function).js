hoistingFunction1();    // 함수라고 인식
// hoistingFunction2(); // 변수라고 인식
// hoistingFunction3(); // 변수라고 인식

function hoistingFunction1(){
    console.log('hoistingFunction1');
}

var hoistingFunction2 = function(){
    console.log('hoistingFunction2');
}

var hoistingFunction3 = new Function(
    '', "return console.log('hoistingFunction3')"
);

