## 3. let과 const

기존에 javascript에서 활용했던 var 자료형은 재정의, 재사용 등에 열려있어 쓰기에 자유로웠으나, 그 만큼 개발자가 신경써야 될 요소가 많다.
대표적으로 function 단위로 움직이는 scope에 신경을 써야하고, hoisting으로 인해 전역변수를 불러오지 않고 선언부를 끌어올려 undefined를 호출하는 등 신경써주어야 할 요소가 많았다. <br>
ES6에서는 이 부분을 부정적으로 생각했는지, let과 const를 새로 소개하고 var 대신 사용하는 것을 추천한다. <br>과연 이전 var과 let / const는 무슨 차이가 있을까?

# let
### 1. 재정의 시 에러를 발생시킵니다.
기존의 var의 경우 재정의에 너그러웠습니다.
<pre><code>var foo = 'bar1';
var foo = 'bar2';
</code></pre>

이 코드는 전혀 문제가 없으며 최종적으로 foo에는 bar2 스트링 값이 들어갑니다.
<br><br>
하지만 let의 경우 재정의 시 에러를 발생시킵니다.
<pre><code>let foo = 'bar1';
// let foo = 'bar2'; 
// ERROR: Uncaught SyntaxError: Identifier 'foo' has already been declared
</code></pre>

### 2. undefined를 보이지 않게 하려 노력합니다.
기존의 var의 경우 값이 정의 되지 않았거나, 없는 변수를 호출하는 경우 undefined를 리턴했습니다.
<pre><code>console.log(abjkajl);	 // undefined
</code></pre>
<br>
하지만 let의 경우 에러를 발생시킵니다.
<pre><code>console.log(foo);
// Error: Uncaught ReferenceError: foo is not defined
</code></pre>

### 3. 블록 scope로 바뀌며, 호이스팅에 소극적입니다.
기존의 var의 경우 함수 scope를 기반으로 하며, 호이스팅을 적극적으로 지원했습니다.
<pre><code>var foo = 'bar1';
console.log(foo); // bar1

// if문 블록과 관계없이 전역 foo값을 가져옴
if (true) {
  var foo = 'bar2';
  console.log(foo) // bar2 (전역변수 foo 값 변경시킴)
}

console.log(foo) // bar2

// hoisting
if (true) {
  // var foo2;		// 아래의 선언부가 위로 끌어올라와짐
  console.log(foo2) // undefined
  var foo2 = 'bar2';
  console.log(foo2) // bar2
}
 
console.log(foo); // bar2
</code></pre>
<br>
하지만 let의 경우 블록 scope로 바뀌며, hoisting을 소극적으로 지원합니다.
<pre><code>let foo = 'bar1';
console.log(foo); // bar1

// 전역 foo와 if 블록 안의 foo와 다른 변수로 인식
if (true) {
  let foo = 'bar2';
  console.log(foo) // bar2 (전역변수 foo 값 변경시킴)
}

console.log(foo) // bar1

// hoisting 지원 X
if (true) {
  // console.log(foo2)
  // Uncaught ReferenceError: foo is not defined
  let foo2 = 'bar2';
  console.log(foo2) // bar2
}

console.log(foo); // bar2
</code></pre>

# const
###1. var과 비슷하지만, 값을 재정의할 수 없다. (상수)

const는 원시형(Primitives type: string, number, boolean, null, undefined)에서 상수로 동작한다.
<pre><code>const foo = 0;
foo = 1;
// Error: Uncaught TypeError: Assignment to constant variable.
</code></pre>

참조형(Complex type: array, object, function)의 경우 const로 선언하더라도 멤버값을 조작하는 것이 가능하다.

<pre><code>const foo = [0, 1];
const bar = foo;		// [0, 1]
 
foo.push(2);
bar[0] = 10;
 
console.log(foo, bar)	// [10, 1, 2] [10, 1, 2]
</code></pre>

- 참고 <br>
배열이나 객체 값을 그대로 가져오는 경우, ...arg / Object의 assign 함수를 사용한다.<br>
<pre><code>const arg = [0, 1];
const obj = {foo: 'bar'};

// 값을 그대로 가져올 시 활용
const refArg = [...arg];
const refObj = Object.assign({}, obj);

console.log(arg, refArg);
console.log(obj, refObj);
</code></pre>

참고 자료 <br>
1. [ES6] var, let 그리고 const <br>
http://blog.nekoromancer.kr/2016/01/26/es6-var-let-%EA%B7%B8%EB%A6%AC%EA%B3%A0-const/
2. let<br>
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let
