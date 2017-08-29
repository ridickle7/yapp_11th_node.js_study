function longest_palindrom(s){
  var result = 0;
	var pal_str = "";
	var str = s.toString();
	// 맨앞을 기준으로 맨뒤부터 차례대로 비교
		for(var i=0; i<str.length-1; i++){
			for(var j=str.length-1; j>i; j--){
				//같은 문자면 그 사이만 빼내서 다시 비교
				if(str.charAt(i) == str.charAt(j)){
					result = j-i;
					//System.out.println("회문이네");
					for(var x=i+1; x<j; x++){
						pal_str += str.charAt(x);
					}
					if(pal_str.length>3){
						longest_palindrom(pal_str);
					}else{
						return result+1;
					}
					return result+1;
				// 회문이 아니면
				}else{
					result = j-i;
					//System.out.println("회문 아니네" + result);
					continue;
				}
			}
		}
  	return result;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( longest_palindrom("ababaaba") )
console.log( longest_palindrom("토마토맛있어") )