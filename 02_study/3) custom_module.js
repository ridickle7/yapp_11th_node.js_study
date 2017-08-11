function add(a,b){
    return a + b;
}

var json = {
    id : 'abc',
    pw : '123'
}

// module.exports = add;

module.exports.json = json;
module.exports.add = add;

