console.log("전역 컨텍스트 입니다");  

function Func1(){  
    console.log("첫 번째 함수입니다.");
};

function Func2(){  
    Func1();
    console.log("두 번째 함수입니다.");
};

Func2(); 
