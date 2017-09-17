// var a = 'abc';

// function C (){
//     return function(){
//         var b = "123";
//         console.log(a+b);
//     }
// }

// var test = C();
// test();



// function C (){
//     return function(){
//         var b = "123";
//         console.log(B()+b);
//     }
// }

// function B(){
//     return a;
// }

// var test = C();
// test();


function add1(one){
    var o = one;
    return function(two){
        o = o + two;
        return o;
    }
}


function add2(one){
    var o = one;
    return function(two){
        return o + two;
    }
}

var a1 = add(5);

console.log(a1(5));
console.log(a1(10));

// console.log(a1(3));
// console.log(a1(4));



// var a1 = add(5);
// console.log(a1(10));
