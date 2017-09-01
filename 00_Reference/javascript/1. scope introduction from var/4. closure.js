function voidFunction(c) {
    var name = c;

    function voidValue() {    // void 리턴형 클로저
        console.log(name);
    }

    voidValue();
}

voidFunction('과자');
voidFunction('abcd');




function returnFunction(c){
    var name = c;

    function returnValue() {    // function 리턴형 클로저
        console.log(name);
    }

    return returnValue;
}

var a = returnFunction('과자');
var b = returnFunction('abcd');
a();
b();
