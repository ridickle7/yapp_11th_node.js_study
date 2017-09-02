## 2.  자바스크립트 prototype

prototype은 말 그대로 시제품을 만들기 전의 원형 <br>
javascript에서 prototype은 **객체의 원형** 을 이야기한다.

객체의 원형을 통해서 또 다른 객체를 만들고 이 과정을 반복하여 객체를 확장시켜 나가는 방식을
**프로토타입 기반 프로그래밍** 이라 한다.

prototype의 구성

1. Protytype Object <br>
자기 자신의 분신<br>
다른 객체가 참조할 수 있는 프로토타입 객체<br>

그 전에 객체와 함수형 데이터에 대해 먼저 알아보자!

> 1. 모든 객체(인스턴스)의 조상(타입)은 함수이다. <br>
> 객체(Object) 생성시 일반적으로, new 연산자 또는 기초 형태를 사용하여 선언한다.<br>
> <pre><code>// 객체(인스턴스) 생성 방법
> var obj1 = {};                      // 객체 생성 방법 1
> var obj2 = new Object();            // 객체 생성 방법 2
> 
> var fun1 = function(){};            // 함수 생성 방법 1
> var fun2 = new Function("", "");    // 함수 생성 방법 2	
> 
> // 1. obj1 과 obj2 의 값은 같을까?
> console.log('obj1의 type : ', typeof(obj1));
> console.log('obj2의 type : ', typeof(obj2));
> console.log('typeof(obj1) == typeof(obj2) : ', typeof(obj1) == typeof(obj2));
> console.log('typeof(obj1) === typeof(obj2) : ', typeof(obj1) === typeof(obj2));
> 
> console.log(Object);
> 
> // 2. fun1 과 fun2 의 값은 같을까?
> console.log('fun1의 type : ', typeof(fun1));
> console.log('fun2의 type : ', typeof(fun2));
> console.log('typeof(fun1) == typeof(fun2) : ', typeof(fun1) == typeof(fun2));
> console.log('typeof(fun1) === typeof(fun2) : ', typeof(fun1) === typeof(fun2));
> 
> console.log(Function);
> </code></pre><br>
> A. 1번과 2번의 답은 아래에 있습니다. <br>
> ![Image](https://github.com/ridickle7/yapp_11th_node.js_study/blob/7_LeeSangWoo/00_Reference/javascript/2.%20prototype/object_equal.png)
> ![Image](https://github.com/ridickle7/yapp_11th_node.js_study/blob/7_LeeSangWoo/00_Reference/javascript/2.%20prototype/function_equal.png)

원하는 답도 얻어냈고, Object, Function도 원론적으로 **함수형 타입** 이라는 것도 알아냈다.<br>
(참고로 Array 등도 모두 **함수형 타입** 이다.) <br>
그런데 이 사실이 Prototype Object 랑 무슨 상관일까? 다음으로 넘어간다.

> 2. 함수형 타입이 가지게 되는 특징이 있다. <br>
> > 1. 생성자(Constructor) 자격이 부여된다. <br>
> > 이 특징 때문에 new를 통해 객체를 만들 수 있다.
> > 2. 정의와 동시에 prototype 데이터가 내장된다. <br>
> > 위의 말은 함수형 타입 생성과 동시에 prototype이 생긴다는 말과 같은 말이다.<br>
> > 개발자 도구를 통해서 위의 말을 이해할 수 있다. (참고로 일반 콘솔에서는 확인이 힘들다) <br>
> > ![Image](https://github.com/ridickle7/yapp_11th_node.js_study/blob/7_LeeSangWoo/00_Reference/javascript/2.%20prototype/functionHasPrototypeObject.png)

여기서 이야기나온 prototype 데이터가 바로 Prototype Object 이다!
> Prototype Object는 클래스(를 가장한 함수)와 다음과 같은 관계를 갖는다.<br>
> ![Image](https://github.com/ridickle7/yapp_11th_node.js_study/blob/7_LeeSangWoo/00_Reference/javascript/2.%20prototype/whenFunctionDefined.png)

Prototype Object에 Prototype Property를 통해 인수 및 함수를 자유롭게 넣어줄 수 있다.
<pre><code>function Person() { };
Person.prototype.eyes = 4;              // Prototype Property
Person.prototype.nose = 5;              // Prototype Property
Person.prototype.getTotal = function(){ // Prototype Property
    return this.eyes + ' / ' + this.nose;
}
</code></pre>

해당 코드를 실행하면 Person은 다음과 같은 형태로 저장된다.<br>
![Image](https://github.com/ridickle7/yapp_11th_node.js_study/blob/7_LeeSangWoo/00_Reference/javascript/2.%20prototype/prototypeParameter.png)


위의 코드를 통해 앞으로 People (가짜) 클래스에서 만들어지는 객체(인스턴스)는<br>
1. eyes와 nose라는 변수를 가지게 될 것이며
2. 기본적으로 eyes = 2 / nose = 1 을 초기값으로 가진다. 
3. String 데이터를 return 하는 getTotal이라는 함수가 있다.

JAVA로 비유하면 다음과 같다.
<pre><code>class Person {
    int eyes;
    int nose;

    public Person() {
        this.eyes = 2;
        this.nose = 1;
    }

    public String getTotal(){
        return this.eyes + " / " + this.nose;
    }
}</code></pre>

그런데 다른 방법으로도 저런 클래스를 구현하는 것이 가능하다.
<pre><code>function Person() {
    this.eyes = 2;
    this.nose = 1;

    this.getTotal = function () {
        return this.eyes + ' / ' + this.nose;
    }
}</code></pre>

이 코드는 Person.prototype.constructor 내에 저장되는 것이다. <br>
그러면 만약 this.eyes 와 Person.prototype.eyes 호출 순위를 비교한다면 누가 우선순위일까?

여기서 _proto_에 대해 이야기를 진행해보겠다.

<pre><code>
var a = {
    attr1: 'a'
};

var b = {
    __proto__: a,
    attr2: 'b'
};

var c = {
    __proto__: b,
    attr3: 'c'
};

c.attr1 // 'a'
</code></pre>

해당 코드에서 att1을 찾아나가는 과정은 다음과 같다.
<pre>
1. c객체 내부에 attr1 속성을 찾는다. -> 없다.
2. c객체에 __proto__ 속성이 존재하는지 확인한다. -> 있다.
3. c객체의 __proto__ 속성이 참조하는 객체로 이동한다. -> b객체로 이동
4. b객체 내부에 attr1 속성을 찾는다. -> 없다.
5. b객체에 __proto__ 속성이 존재하는지 확인한다. -> 있다.
6. b객체의 __proto__ 속성이 참조하는 객체로 이동한다. -> a객체로 이동
7. a객체 내부에 attr1 속성을 찾는다. -> 있다.
8. 찾은 속성의 값을 리턴한다. <br><br>
	여기서 잠깐..! 만약 없는 변수라면 어디까지 가게 될까? <br>
	attr0 을 찾는다고 가정하고 계속 진행하겠다. <br><br>
9. a객체의 __proto__ 속성이 참조하는 객체로 이동한다. -> Object.prototype 로 이동
10. Object.prototype 에서 attr0 속성을 찾는다. -> 없다.
11. Object.prototype 에서 __proto__ 속성을 찾는다. -> 없다.
12. undefined를 리턴한다.
</pre>
이 과정을 보고 감이 온 분들도 있겠지만 **_proto_는 상위의 것을 찾아가는 흐름** 이다.<br>
그러면 프로토타입의 _proto_는 뭘 의미하는 것일까? 여기서 Prototype Link를 이야기할 수 있다.

2. Prototype Link<br>
javascript의 모든 객체는 객체 원형에 대한 숨겨진 연결을 갖는다. <br>
Prototype Link는 자기 자신을 만들어낸 객체의 원형(상위 객체)을 가리킨다.<br>
prototype으로 변수를 선언한 코드의 경우 _proto_ 값은 Object이다. <br>
인스턴스는 각자 자신을 생성한 클래스(를 가장한 함수)를 _proto_로 가지고 있다. <br>
헷갈리지 말아야 될 것이 인스턴스는 prototype이 없다!! 반드시 주의할 것!

여기서 나올 수 있는 이야기가 Prototype Chain 이다. 예제를 보자.

<pre><code>var A = function () { };
A.prototype.x = function () {
     console.log('hello');
};
var B = new A();
var C = new A();

// A의 프로토타입 프로퍼티를 그대로 가져옴
B.x();  
// A의 프로토타입 프로퍼티를 그대로 가져옴
C.x();  

// A가 바뀜
A.prototype.x = function () {
     console.log('world');
};

// 바뀐 프로토타입 프로퍼티가 그대로 적용됨
B.x();
// 바뀐 프로토타입 프로퍼티가 그대로 적용됨
C.x();
</code></pre>

먼저 B와 C는 A 클래스를 그대로 긁어온다. 이로 인해 프로토타입 정보 역시 B와 C에 그대로 반영될 것이다. 위의 체인을 도식상으로 표현하면 다음 그림과 같다. <br>
![Image](https://github.com/ridickle7/yapp_11th_node.js_study/blob/7_LeeSangWoo/00_Reference/javascript/2.%20prototype/prototypeChain.png)


javascript 자체가 객체지향의 성격을 많이 가져오려 노력했기에 OOP의 성격을 마음 먹고 찾으면 찾을 수 있고, 직접 구현도 할 수 있다. 마지막 예제를 보자!

<pre><code>function Car() { 
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
</code></pre>

Car이라는 기본 클래스(함수)가 있고, 
Truck과 SUV는 prototype에 Car을 상속받음으로써 Car 내에 있는 변수를 가져온다.
그리고 각각의 클래스에 Constructor 설정을 해줌으로써 일종의 Overriding도 구현하였다.
이렇게 프로토타입을 상위 클래스로 설정해줌으로써 상속을 구현할 수 있었다. 

식별자 검색은 생성자와, 프로토타입 체인을 통해 진행한다.
1. 생성자 검사
truck에 go 속성이 있는지 검사 
2. 프로토타입 검사
Truck.prototype에 go 속성이 있는지 검사 (= new Car()의 생성자 검사)
3. new Car()의 prototype인 Car.prototype 검사
4. Car.prototype.go 발견
