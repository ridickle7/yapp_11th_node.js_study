// function 유효범위
function scopeTest() {
    var a = 0;

    // if 블록 영역
    if (true) {
        var b = 0;

        // for 블록 영역
        for (var c in [1, 2, 3, 4, 5]) {
            c++;
            console.log('c : ' + c + ' (for 블록 영역)');
        }

        console.log('b : ' + b + ' (if 블록 영역)');
    }

    console.log('a : ' + a + ' (function 블록 영역)');
    console.log('b : ' + b + ' (function 블록 영역)');
    console.log('c : ' + c + ' (function 블록 영역)');
}

scopeTest();
