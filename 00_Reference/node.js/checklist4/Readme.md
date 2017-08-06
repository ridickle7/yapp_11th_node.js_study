# 4. Express Framework에 대해 설명하시오

- Node.js를 위한 빠르고 간편한 프레임워크
- http 모듈과 Connect 컴포넌트를 기반으로 하고 있는 프레임워크

주요 특징
### 1. Middleware (미들웨어)

1. 기능 컴포넌트
2. Express를 통해 만들어진 서버 객체(보통 app으로 명명)에 사용하고 싶은 기능을 추가해 나간다.


과정
1. Client로부터 Request를 받음
2. 서버 객체에 logger(‘dev’) 기능 추가
3. bodyParser.json() 기능 추가
4. bodyParser.urlencoded(…) 기능 추가 

..... 

6. 쭉 확인하고 들어온 URL 로직에 맞는 이벤트 처리 진행 (없으면 404 / 서버 내 오류나면 500)



### 2. 라우팅

URI(또는 경로) 및 특정한 HTTP 요청 메소드(GET, POST 등)인 
특정 엔드포인트에 대한 **클라이언트 요청**에 **응답**하는 방법을 결정

app.**METHOD**(**PATH**, **HANDLER (= CALLBACK)**);

> 라우터
> express.Router 클래스를 사용하면 모듈식 마운팅 가능한 핸들러를 작성할 수 있습니다.
> 각 모듈별 처리가 가능 (mini app이라고 비유할 수 있다.)


참고
- http://ithub.tistory.com/32
