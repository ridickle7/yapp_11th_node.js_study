function getMax(numA, numList){
	for(var i = 0 ; i<numList.length ; i++){
  	if(numA < numList[i])
      numA = numList[i];
  } 
  return numA;
}

function isEqual(strA, strB){
	return strA == strB;
}

function isNear(string, index){
  var flag = 0;
  if(string.charAt(index) == string.charAt(index+1))
    flag++;

  return flag;
}

function noneEqual(string, index){
  var count = 1;
  for(var i = 1 ; index-i >= 0 ; i++){
    if(isEqual(string.charAt(index-i), string.charAt(index+i)))
      count = count + 2;
    else 
      break;
  }
  return count;
}

function existEqual(string, index){
  var count = 2;
  var pivot1 = index, pivot2 = index+1;
  
  for(var i = 1 ; pivot1-i >= 0 ; i++){
    if(isEqual(string.charAt(pivot1-i), string.charAt(pivot2+i)))
      count = count + 2;
    else 
      break;
  }
  return count;
}

function getPalindromeSize(string, index){
  var sizeList = [];
  sizeList.push(noneEqual(string, index));
  
  if(isNear(string, index) == 1){
    sizeList.push(existEqual(string, index));
  } 
  
  return sizeList;
}

function longest_palindrom(s){
  var result = 1;

  // 함수를 완성하세요
  for(var i = 0 ; i<s.length ; i++){
    result = getMax(result, getPalindromeSize(s, i));
  }

  return result;
}




// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( longest_palindrom("zzaabbccbb") )
console.log( longest_palindrom("토마토맛있어") )