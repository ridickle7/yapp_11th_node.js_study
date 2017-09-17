var scope = 10;

function functionScope() {
    var scope = 20;
    console.log("functionScope() 내 scope = " + scope);
}

functionScope();
console.log("functionScope() 바깥 scope = " + scope);