function Car() { 
    this.wheel = 4; 
    this.beep = "BEEP!"; 
}; 

Car.prototype.go = function () { 
    console.log(this.beep); 
}; 

function Truck() { 
    this.wheel = 6; 
    this.beep = "HONK!"; 
}; 

Truck.prototype = new Car(); 

function SUV() { 
    this.beep = "WANK!";
}; 

SUV.prototype = new Car(); 
var truck = new Truck(), 
suv = new SUV(); 
console.log(truck.wheel === 6 && suv.wheel === 4); // === true; 
console.log(truck.beep === "HONK!" && suv.beep === "WANK!"); // === true; 
truck.go();     // === "HONK!" 
suv.go();       // === "WANK!"

// Truck의 prototype         : Car
// Truck의 __proto__         : function

// turck의 prototype         : 인스턴스라 없음
// truck의 __proto__         : Car

// SUV의 prototype           : Car
// SUV의 __proto__           : function

// suv의 prototype           : 인스턴스라 없음
// suv의 __proto__           : Car

// Car의 prototype           : Car Prototype
// Car의 __proto__           : function

// Car Prototype __proto__  : Object

