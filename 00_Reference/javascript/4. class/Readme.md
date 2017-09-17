## 4. class

보통 javascript class에 대해서 많은 사람들이 이렇게 설명한다고 한다.

> JavaScript classes introduced in ECMAScript 6 are **syntactical sugar** over JavaScript’s existing prototype-based inheritance. The class syntax is not introducing a new object-oriented inheritance model to JavaScript. - MDN - Classes
Many features in ES6 (such as destructuring) are, in fact, syntactic sugar – and classes are no exception. - ES6 Classes in Depth

> Not “traditional” classes, **syntax sugar** on top of prototypal inheritance - ES6 Overview in 350 Bullet Points

> In basic use, the class keyword is **syntactic sugar** for writing constructor functions with prototypes. - JavaScript Allongé

문법 설탕이라고 이야기를 하는데 검색을 해보니 
- 컴퓨터 언어를 사람이 이해하기 쉽고 표현하기 쉽게 적은 문맥
- 내부적인 동작은 기존과 동일하지만, 구현 방식에 맞추어 새롭게 만들어진 문법
- 제거되더라도 그 언어가 제공하는 기능과 표현을 복구하는 데 별 노력이 필요 없는 문법

이라고 한다.
하지만 prototype를 활용한다는 건 변함이 없고, 왜 문법 설탕인지도 직접 느껴봐야하기 때문에..! 지금 부터 시작해봅니다!

### 1. 생성
기본 생성은 다음과 같습니다.

<pre><code>// 클래스 define 1
class Person{
    constructor(name){      // 생성자 (선택 사항)
        this.name = name;
    }
}

// 클래스 define 2
var customClass = class Person2{
    constructor(name){
        this.name = name;
    }
}

// 인스턴스 생성
let soonJae = new Person('soonJae');
console.log(soonJae.name);

let suhyun = new customClass('suhyun');
console.log(suhyun.name);
</code></pre>


### 2. class 사용시 유의 사항

1. class body에는 메소드만을 포함시킬 수 있다. (변수 포함 안됨)
<pre><code>class myClass{
    // [js] Unexpected token. A constructor, method, accessor, or property was expected.
    // let name = '';
    
    constructor(name){
        this.name = name;
    }
}</pre></code>
멤버 변수 선언, 초기화는 반드시 constructor 내에서 진행해야 한다. <br>

2. 멤버 변수는 언제나 this에 연결(바인딩) 되어 있으므로 언제나 public이다 <br>
-> class는 **private, public, protected** 키워드와 같은 접근 제한자(Access modifier)를 지원하지 않는다.

3. 호이스팅 소극적 지원

4. getter, setter
<pre><code>class myClass{    
    constructor(name){
        this.name = name;
    }
    get getName(){			// getter 함수
        return this.name;
    }

    set setName(eleName){   // setter 함수
        this.name = eleName;
    }
}

var instance = new myClass('class');

//getter은 일반 getter에 ()만 빼고 입력
console.log(instance.getName);

// setter은 값에 직접 대입하듯이 입력
instance.setName = 300000;
console.log(instance.getName);
</pre></code>

5. static method
- static method는 인스턴스 생성 없이 호출
<pre><code>class Person{
    constructor(name){
        this.name = name;
    }        
    static getProfile(){
        return 'My name is ' + this.name;
    }

    static getRoar(){
        return console.log('abcd!!!!!');
    }
}

console.log(Person.getProfile());
Person.getRoar();

let soonJae = new Person('soonJae');
// console.log(soonJae.getProfile);        // undefined
// console.log(soonJae.getProfile());      // TypeError: soonJae.getProfile is not a function
// soonJae.getRoar();                      // TypeError: soonJae.getProfile is not a function
</code></pre>
- 클래스의 인스턴스에서 호출할 수 **없음**
> 이유
> 1. 인스턴스는 prototype property를 가질 수 없다.
> 2. 클래스 함수의 프로토 타입(prototype)은, 해당 클래스로 만들어진 인스턴스의 부모(_proto_)와 같다.

### 3. 상속
class 개념을 통해 java 형식처럼 상속이 가능하다.
class가 돌아가는 기반은 함수이고, 기존 prototype를 활용하여 전 버전의 코드로 수정이 가능하다.

<pre><code>class Animal{
    constructor(name){
        this.name = name;
    }

    eat(){
        console.log('맛있게 먹는다');
    }
}

class Person extends Animal{
    constructor(name, iq){
        super(name);
        this.iq = iq;
    }

    eat(){
        console.log(this.name + '이 맛있게 먹는다.');
    }
    
    static speak(){
        console.log('말을 한다.');
    }
}

let dog = new Animal('진돗개');
dog.eat();

let IU = new Person('이지은',430);
Person.speak();
// IU.speak();	error
IU.eat();		
</code></pre>
