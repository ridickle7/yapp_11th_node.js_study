// function time0(param) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () { }, 1000);
//     });
// }
// function time1(param) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () { console.log('1') }, 2000);
//     });
// }
// function time2(param) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () { console.log('2') }, 1000);
//     });
// }
// function time3(param) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () { console.log('3') }, 2000);
//     });
// }

// var start = true;
// time0(start)
//     .then(time1)
//     .then(time2)
//     .then(time3)

// function functionLevel(){
//     var a = 1;
//     if(a == 1){
//         a = 2;
//         var b = 3;
//     }

//     console.log(a);
//     console.log(b);
// }

// functionLevel()


function add(one){
    var o = one;
    return function(two){
        return o + two;
    }
}

var a1 = add(5);
console.log(a1(10));
