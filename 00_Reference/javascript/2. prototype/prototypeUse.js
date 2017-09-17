function Person() { 
    this.eyes = 3;      // Prototype Object constructor 
    this.nose = 1;      // Prototype Object constructor
};

Person.prototype.eyes = 4;              // Prototype Property
Person.prototype.nose = 5;              // Prototype Property
Person.prototype.getTotal = function(){ // Prototype Property
    return this.eyes + ' / ' + this.nose;
}

var abcd = new Person();
console.log(abcd.eyes);