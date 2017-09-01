function Soonjae(){}

Soonjae.prototype.age = 63;
Soonjae.prototype.mind = function(){
    console.log("actor's mind");
}

var soonjae = new Soonjae();
console.log(soonjae.age);
soonjae.mind();

var soon