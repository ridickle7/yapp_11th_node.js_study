let abcd = 3;

for (var i in [1,2,3,4]){
    console.log(abcd);
    let abcd = 4; 
}

console.log(abcd);