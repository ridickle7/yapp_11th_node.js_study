var http = require('http');

// 숫자 생성 함수
var makingNumber = function(){
    return Math.floor(Math.random()*45);
}

// 들어가기에 적합한 숫자인지 확인 (적합할 경우 해당 수 추가)
var findDifferentNumber = function(tempNumber, numList){
    for(var key in numList)
        if(tempNumber == numList[key])
            return numList;

    numList.push(tempNumber);
}

var isEqual = function(numList){
    while(numList.length < 6){
        findDifferentNumber(makingNumber(), numList);
    }
    return numList;
}

var ascendingSort = function(a,b){
    return a-b; // 양수일 경우 swap
}

// 로또 번호 6개 뽑아내는 함수
var makingLotto = function(){
    var numList = [];
    isEqual(numList);

    return numList.sort(ascendingSort());
}

var server = http.createServer(function(request, response){
    response.writeHead(200, {'content-type':'text/plain; charset=utf-8'});
    response.write('로또 번호 : ' + makingLotto());
    response.end();
});

server.listen(8888, function(){
    console.log('server opened 8888');
});