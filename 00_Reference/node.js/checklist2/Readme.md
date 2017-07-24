# 2. Node.js의 특징

서론 <br>
Google v8 engine를 이용해 만들어진 javascript 기반 서버 사이드 개발 플랫폼 <br>
javascript를 통해 **Web Browser 제어** 도 가능하고, **서버 기반의 웹 어플리케이션**도 제작이 가능하다. <br>

node.js의 내부 구조<br>
![Image](https://github.com/ridickle7/yapp_11th_node.js_study/blob/7_LeeSangWoo/00_Reference/node.js/checklist2/node.js_architecture.png)


### 1. Single Thread
- 동시에 실행되는 코드를 만들 수 없으며, 만약 중간에 버그가 있다면 그대로 서버가 죽는다.
<pre><code>// 만약 중간에 이런 코드가 있다면 해당 반복문이 끝나기 전까지 다른 요청 및 다음 명령 줄 작업을 하지 못한다.
while(true){ 
  console.log(' ');
}

console.log('ㅠㅠㅠㅠ');  // 절대로 도달할 수 없다.
</code></pre>

> ※ Event Loop <br>
> 코드 외부의 이벤트(ex< IO 작업)들을 처리하고 그것의 결과를 callback으로 전달하는 객체 <br>
> IO 작업이 필요하게 될 시 코드에 callback을 등록하고, 작업을 CPU 작업(node.js 코드 단위 작업)으로 넘기게 된다. <br>
> 잊혀진(?) callback은 I/O콜이 완료된 순간 그 결과를 전달 받아 호출되게 된다

### 2. Non-blocking I/O
- 그러나 내 코드만 뺀 모든 작업들은 (IO 작업 등) 병렬적으로 실행된다.
- IO 작업으로 인해 전체 프로세스를 중단시키지 않는다.

<pre><code>console.log("the first CPU Bound working");

setTimeout(function(){
  console.log("the second CPU Bound working");
}, 3000);

console.log("the third CPU Bound working");
</code></pre>

편의상 로그 문장을 서수로 표현하겠다.

Q. 만약 Blocking 작업이었다면?<br>
A. first -> 3초 뒤 second -> third
![Image](https://github.com/ridickle7/yapp_11th_node.js_study/blob/7_LeeSangWoo/00_Reference/node.js/checklist2/blocking_IO.jpg)

Q. 만약 Non-Blocking 작업이었다면?<br>
A. first -> third -> (first로 부터) 3초 뒤 second
![Image](https://github.com/ridickle7/yapp_11th_node.js_study/blob/7_LeeSangWoo/00_Reference/node.js/checklist2/nonBlocking_IO.jpg)


### 3. event-Driven
- **Event**(사용자가 버튼을 누름, Client가 post방식으로 파일을 요청 등) 에 의해서 함수가 호출된다.
- javascript 개발 방식
- (잡지식) EventEmitter을 통해 Observer Pattern을 구현할 수도 있다.

I/O 작업의 예
- Input/Output 즉 Disk, Network, Database와 관련된 Task
- https://goo.gl/c1LpfV
- 정리하면 javascript의 코어 모듈과, C/C++ 영역을 거쳐 다시 javascript 영역으로 돌아온다.

![Image](https://github.com/ridickle7/yapp_11th_node.js_study/blob/7_LeeSangWoo/00_Reference/node.js/checklist2/cost_of_IO.png)



> 단어정리 <br>
> 런타임 : 컴퓨터 프로그램이 실행되고 있는 동안의 동작


> 참고자료
> Node.js의 이벤트 루프 이해 : http://la-stranger.blogspot.kr/2014/02/nodejs-nodejs.html <br>
> Node.js의 이벤트 처리 과정(자세히) : https://goo.gl/YJX9pM <br>
> Blocking과 NonBlocking의 이해 : http://ozt88.tistory.com/20 <br>
> Node.js의 비동기적 특성과 #1, #2 내용 : https://qkraudghgh.github.io/node/2016/10/23/node-async.html
