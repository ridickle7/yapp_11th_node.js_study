## 1.  자바스크립트 scope

scope는 말 그대로 유효 범위 <br>
변수 scope는 변수(또는 인수)의 **생존기간**을 뜻한다.

scope의 종류
1. 전역 유효범위 (Global scope)
2. 지역 유효범위 (Local scope)

그림으로 이해하면 다음과 같다. <br>
![Image](https://github.com/ridickle7/effectiveJava/blob/master/src/Object_1/_05_uselessObject/primitive%2C%20wrapper%20class.png)


### 1) javascript는 타 언어에 비한 고유한 유효범위 특징이 있다.
1. 함수 단위의 유효범위
2. 변수명 중복 허용
3. var 키워드 생략
4. 렉시컬 특성


#### 1. 함수 단위의 유효 범위
타 언어와 다르게 function 블록 단위로 범위가 정해진다. (아래의 코드를 실행해보면 이해될 것이다.)
<pre><code>// 1. 함수 단위의 유효범위
// function 유효범위
function scopeTest() {
    var a = 0;

    // if 블록 영역
    if (true) { 
        var b = 0;

        // for 블록 영역
        for (var c in [1, 2, 3, 4, 5]) { 
            c++;
            console.log('c : ' + c + ' (for 블록 영역)');
        }
        
        console.log('b : ' + b + ' (if 블록 영역)');
    }

    console.log('a : ' + a + ' (function 블록 영역)');
    console.log('b : ' + b + ' (function 블록 영역)');
    console.log('c : ' + c + ' (function 블록 영역)');
}

scopeTest();

</code></pre>


#### 2. 변수명 중복 허용
변수명을 중복해서 선언해도 문제가 없다. <br>단 함수 단위의 유효범위에서만 해당 이름의 지역변수 정보가 유지된다. (아래의 코드를 실행해보면 이해될 것이다.)
<pre><code> // 2. 변수명 중복 허용
var scope = 10;  

function functionScope(){  
    var scope = 20;
    console.log("functionScope() 내 scope = " +scope);
}

functionScope();
console.log("functionScope() 바깥 scope = " +scope);
</pre></code>


#### 3. var 키워드 생략
int, char, string 데이터 모두 통합형으로 관리 (var / const,let) <br>
변수형을 선언해주지 않아도 에러가 나지 않는다. (JAVA, C에서는 상상도 못할 일)<br>
선언해주지 않는 경우 global 선언으로 인식

<pre><code> // 3. var 키워드 생략
function defineScope(){  
    scope = 20;
    console.log("scope = " +scope);
}

function executeScope(){  
    console.log("scope = " + scope);
}

defineScope();  
executeScope();
</pre></code>


#### 4. 렉시컬 특성
함수 실행 시 유효범위를 **~~함수 실행 환경~~** 이 아닌 **함수 정의 환경** 으로 참조한다.


<pre><code> // 4. 렉시컬 특성
function f1(){  
    var a= 10;
    f2();
}

function f2(){  
    // 이건 당연히 가능
    return console.log('f2 호출됨');
    
    // 함수 정의 영역이 다르기 때문에 f1 내에서 f2 함수가 쓰였다고 해도 
    // f1 내의 변수를 참조할 수 없다.
    // return a;    // a is not defined
}

f1();
</pre></code>


#### 5. 호이스팅 (Hoisting)
- 1번 특징과 (함수 단위의 유효 범위), 전역/지역 scope에서 연계되는 개념 <br>
- 직역하면 (변수 선언문을) 끌어올리기 <br>

##### 1. 변수 선언문이 유효범위 상단에 끌어올라와진다.

<pre><code> // 5. 호이스팅 (Hoisting) - 변수 ver
var outScope = 3;

function inScope(){
    // var outScope;
    console.log(outScope);
    var outScope = 4;
    console.log(outScope);
}

inScope();
</pre></code>

##### 2. (위에서도 봤겠지만) 변수로 인식되는 경우 값은 일절 hoisting에 반영되지 않는다.

<pre><code> // 5. 호이스팅 (Hoisting) - 변수 ver
hoistingFunction1();    // 함수라고 인식
// hoistingFunction2(); // 변수라고 인식
// hoistingFunction3(); // 변수라고 인식

function hoistingFunction1(){
    console.log('hoistingFunction1');
}

var hoistingFunction2 = function(){
    console.log('hoistingFunction2');
}

var hoistingFunction3 = new Function(
    '', "return console.log('hoistingFunction3')"
);
</pre></code>

### 2) 실행 문맥 (Execution context)
- 실행 정보를 의미함  (한줄 한줄의 명령어!) <br>
- javascript 내 Call Stack에서 실행 문맥들을 관리 <br>

<pre><code> // 6. 실행 문맥 (Execution context)
console.log("전역 컨텍스트 입니다");  

function Func1(){  
    console.log("첫 번째 함수입니다.");
};

function Func2(){  
    Func1();
    console.log("두 번째 함수입니다.");
};

Func2();  
</pre></code>

위의 코드에서 "Func2()" 가 실행되면, 다음의 flow 를 가진다. <br>
![Image](https://github.com/ridickle7/effectiveJava/blob/master/src/Object_1/_05_uselessObject/primitive%2C%20wrapper%20class.png)

실행 문맥은 3가지로 구성되어 있다.
- 활성화 객체 	: (파라미터와 내부 변수)
- 유효범위 정보	: 현재 실행 문맥의 유효 범위
- this 객체		: 현재 실행 문맥을 포함하는 객체

실행 문맥의 생성 순서는 다음과 같다.

1. 활성화 객체 생성 <br>
![Image](https://github.com/ridickle7/effectiveJava/blob/master/src/Object_1/_05_uselessObject/primitive%2C%20wrapper%20class.png)

2. arguments객체 생성 <br>
![Image](https://github.com/ridickle7/effectiveJava/blob/master/src/Object_1/_05_uselessObject/primitive%2C%20wrapper%20class.png)

3. 유효범위 정보 생성 <br>
![Image](https://github.com/ridickle7/effectiveJava/blob/master/src/Object_1/_05_uselessObject/primitive%2C%20wrapper%20class.png)

4. 변수 생성 <br>
![Image](https://github.com/ridickle7/effectiveJava/blob/master/src/Object_1/_05_uselessObject/primitive%2C%20wrapper%20class.png)

5. this객체 바인딩 <br>
![Image](https://github.com/ridickle7/effectiveJava/blob/master/src/Object_1/_05_uselessObject/primitive%2C%20wrapper%20class.png)

6. 함수 실행 <br>
![Image](https://github.com/ridickle7/effectiveJava/blob/master/src/Object_1/_05_uselessObject/primitive%2C%20wrapper%20class.png)


### 3) 스코프 체인 (Scope Chain)
- 함수가 중첩함수일 때 상위함수의 유효범위까지 흡수하는 것
- 하위함수가 실행되는 동안 **상위 함수의 변수 또는 함수의 메모리** 를 참조하는 것
- 유효범위 정보에 해당 참조 정보가 List 형식으로 저장된다 <br>
(가장 먼저 발견하는 상위 함수 영역부터 저장)

그림으로 표현하면 다음과 같다. <br>
![Image](https://github.com/ridickle7/effectiveJava/blob/master/src/Object_1/_05_uselessObject/primitive%2C%20wrapper%20class.png)

### 4) 클로져 (Closure)
- javascript의 스코프 체인을 이용하여 이미 생명 주기가 끝난 외부 함수의 변수를 참조하는 방법
- 외부 함수가 종료되었으나 내부 함수가 실행될 수 있는 상태라면<br>외부 함수는 내부 함수에 의해서 종료되어야 하는 상태가 된다!
- 본래의 역활을 넘어 **외부 함수에 갑질을 하는 내부 함수** 를 지칭하는 말이 Closure!

<pre><code>	// 클로저의 예제
function voidFunction(c) {
    var name = c;

    function voidValue() {    // void 리턴형 클로저
        console.log(name);
    }

    voidValue();
}

voidFunction('과자');
voidFunction('abcd');




function returnFunction(c){
    var name = c;

    function returnValue() {    // function 리턴형 클로저
        console.log(name);
    }

    return returnValue;
}

var a = returnFunction('과자');
var b = returnFunction('abcd');

a();
b();
</code></pre>

클로저에 대한 흐름
1. 클로저는 스코프 체인을 활용한다.
2. 스코프 체인은 상위 함수의 변수 및 함수 정보를 저장한다.
3. 해당 정보를 저장 하려면 그 만큼의 메모리를 써야 한다.
4. 함수가 불필요하게 생성될 수 있다.

ex> Person 클래스에서 해당 사람의 이름 값을 얻어내는 함수(getName)가 필요할 때! <br>
case 1 : 클로저를 활용한다면
1. 인스턴스를 생성할 때 마다, 해당 인스턴스에 getName 함수 데이터도 저장된다.
2. (인스턴스마다 getName을 다르게 처리해주는게 아닌 이상) 메모리 소비, 처리 속도 측면에서 클로저를 활용하는 건 좋지 않다.

Q. 그러면 어떻게해야 되나요? <br>
A. 정답은 프로토타입
