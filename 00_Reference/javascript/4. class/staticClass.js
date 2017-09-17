class Person{
    constructor(name){
        this.name = name;
    }        
    static getProfile(){
        return 'My name is ' + this.name;
    }

    static getRoar(){
        return console.log('abcd!!!!!');
    }
}

console.log(Person.getProfile());
Person.getRoar();

let soonJae = new Person('soonJae');
// console.log(soonJae.getProfile);        // undefined
// console.log(soonJae.getProfile());      // TypeError: soonJae.getProfile is not a function
// soonJae.getRoar();                      // TypeError: soonJae.getProfile is not a function
