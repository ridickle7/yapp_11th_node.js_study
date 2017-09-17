class Animal{
    constructor(name){
        this.name = name;
    }

    eat(){
        console.log('맛있게 먹는다');
    }
}

class Person extends Animal{
    constructor(name, iq){
        super(name);
        this.iq = iq;
    }

    eat(){
        console.log(this.name + '이 맛있게 먹는다.');
    }
    
    static speak(){
        console.log('말을 한다.');
    }
}

let dog = new Animal('진돗개');
dog.eat();

let IU = new Person('이지은',430);
Person.speak();
IU.eat();