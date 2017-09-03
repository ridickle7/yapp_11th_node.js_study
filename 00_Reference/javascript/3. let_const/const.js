const arg = [0, 1];
const obj = {foo: 'bar'};

// 값을 바꾸는 데 열려있다.
arg[0] = 3;
obj.foo = 'rab';

const arg = [0, 1];
const obj = {foo: 'bar'};

// 값을 그대로 가져올 시 활용
const refArg = [...arg];
const refObj = Object.assign({}, obj);

console.log(arg, refArg);
console.log(obj, refObj);


