/**
 * http://usejsdoc.org/
 */
var lottoNum = new Array();
var index = 0;
while(true){
	var num = Math.floor(Math.random()*45)+1; //로또 번호 생성
	if(isDuplicate(num)){
		lottoNum[index] = num;
		index++;
		if(index == 6)
			break;
	}
}
console.log(lottoNum);

function isDuplicate(num){
	for(i=0;i<lottoNum.length;i++){
		if(num == lottoNum[i]){
			return false;
		}
	}
	return true;
}