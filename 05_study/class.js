function Person(){
    this.eyes = 2;
    this.nose = 1;

    this.abcd = function(){
        console.log('abcd');
    }
}

function Person()

// function Person(){}

// // 프로토타입 변수 선언
// Person.prototype.eyes = 2;
// Person.prototype.nose = 1;

// // 프로토타입 함수 선언
// Person.prototype.abcd = function(){
//     console.log('abcd');
// }

// // 이로써 새로운 javascript 형 class 가 만들어졌다.

// // java에 비유하면
// // public class Person{
// //     int eyes;
// //     int nose;

// //     public Person{
// //         eyes = 2;
// //         nose = 1;
// //     }

// //     public void abcd(){
// //         System.out.println("abcd");
// //     }
// // }

// var kim = new Person();
// var park = new Person();

// console.log(kim.eyes + ' / ' + kim.nose);
// kim.abcd();
// console.log(park.eyes + ' / ' + park.nose);
// park.abcd();

// // park.eyes = 1;
// Person.prototype.eyes = 3;


// console.log(kim.eyes + ' / ' + kim.nose);
// kim.abcd();
// console.log(park.eyes + ' / ' + park.nose);
// park.abcd();

// kim.abcd = function(){
//     console.log('asdklf;as');
// }

// kim.abcd();
// park.abcd();
