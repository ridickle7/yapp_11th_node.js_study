
// // ES5
// function sleep(callback, msec) {
//     setTimeout(callback, msec);
// }

// sleep(function () {
//     console.log('wake!')
// }, 1000);



// // ES6
function sleep(msec) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, msec);
    });
}

// sleep(1000).then(function () {
//     console.log('wake!');
// });


// // // ES6
'use strict';
var co = require('co');

co(function* () {
    console.log('sleep...');

    // return 구문과 비슷 
    yield sleep(1000);

    console.log('wake!');
});

function abcd(){
    console.log('sleep...');
    setTimeout(function () {
        console.log('wake!')
    }, 1000);
}

abcd();



// function* quips(name) {
//     yield "hello " + name + "!";
//     yield "i hope you are enjoying the blog posts";
//     if (name.startsWith("X")) {
//         yield "it's cool how your name starts with X, " + name;
//     }
//     yield "see you later!";
// }

// var iter = quips("jorendorff");

// console.log(iter.next());