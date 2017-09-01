var outScope = 3;

function inScope(){
    // var outScope;
    console.log(outScope);
    var outScope = 4;
    console.log(outScope);
}

inScope();