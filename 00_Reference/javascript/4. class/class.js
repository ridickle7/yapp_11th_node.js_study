// 클래스 define 1
class Person{
    constructor(name){      // 생성자
        this.name = name;
    }
}

// 클래스 define 2
var customClass = class Person2{
    constructor(name){
        this.name = name;
    }
}

// 인스턴스 생성
let soonJae = new Person('soonJae');
console.log(soonJae.name);

let suhyun = new customClass('suhyun');
console.log(suhyun.name);