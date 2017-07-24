# 2. Node.js의 특징

서론
Google v8 engine를 이용해 만들어진 서버 사이드 개발 플랫폼
javascript 기반
javascript를 통해 **Web Browser 제어** 도 가능하고, **서버 기반의 웹 어플리케이션**도 제작이 가능하다.


### 1. Single Thread
- 동시에 실행되는 코드를 만들 수 없으며, 만약 중간에 버그가 있다면 그대로 서버가 죽는다.
<pre><code>// 만약 중간에 이런 코드가 있다면 해당 반복문이 끝나기 전까지 다른 요청 및 다음 명령 줄 작업을 하지 못한다.
while(true){ 
  console.log(' ');
}

console.log('ㅠㅠㅠㅠ');  // 절대로 도달할 수 없다.
</code></pre>


### 2. Non-blocking I/O
- 그러나 내 코드만 
- I/O 작업으로 인해 전체 프로세스를 중단시키지 않는다.

<pre><code>console.log("the first CPU Bound working");

setTimeout(function(){
  console.log("the second CPU Bound working");
}, 3000);

console.log("the third CPU Bound working");
</code></pre>

편의상 로그 문장을 서수로 표현하겠다.

Q. 만약 Blocking 작업이었다면?<br>
A. ~~first -> 2초뒤 second -> third~~

Q. 만약 Non-Blocking 작업이었다면?<br>
A. ~~first -> third -> (first로 부터) 2초 뒤 second~~


### 3. event-Driven
- javascript 개발 방식

I/O 작업의 예
- https://goo.gl/c1LpfV
- 정리하면 javascript의 코어 모듈과, C/C++ 영역을 거쳐 다시 javascript 영역으로 돌아온다.



> 단어 정리
> 런타임 : 컴퓨터 프로그램이 실행되고 있는 동안의 동작
