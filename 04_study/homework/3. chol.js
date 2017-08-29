function longest_palindrom(s){
  var result = 1;
  var frontStr = 0;
  var backStr = 0;
  
  // 함수를 완성하세요
  for(i=0;i<s.length;i++){
	  frontStr = s.substring(0,i+1);
	  for(j=i;j>=0;j--){
		  backStr += frontStr.charAt(j);
	  }
	  if(frontStr == backStr){
		  result = frontStr.length;
	  }
	  backStr="";
  }
  return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( longest_palindrom("타타타타") )
console.log( longest_palindrom("abcbaaba") )