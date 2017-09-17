function Person(eyes, nose) {
    this.eyes = eyes;
    this.nose = nose;

    this.getTotal = function () {
        return this.eyes + ' / ' + this.nose;
    }
}

function Person() {
    this.eyes = 2;
    this.nose = 1;

    this.getTotal = function () {
        return this.eyes + ' / ' + this.nose;
    }
}

var soonJae = new Person(3, 2);
console.log(soonJae.eyes);

// class Person {
//     int eyes;
//     int nose;

//     public Person() {
//         eyes = 2;
//         nose = 1;
//     }

//     public String getTotal(){
//         return this.eyes + " / " + this.nose;
//     }
// }