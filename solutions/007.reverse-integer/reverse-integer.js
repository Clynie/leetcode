/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x == 0){
        return 0
    }
    var arr = x.toString().split("")
	var l = arr.length
	for(var i=0;i<l/2;i++){
		var temp = arr[i]
		arr[i] = arr[l-i-1]
		arr[l-i-1] = temp
	}
	while(arr[0] == '0'){
		arr.shift()
	}
	var result = parseInt(arr.join(''))
	if(result > 2**31 - 1 || result < -2*31){
		return 0
	}else{
		return x>0?result:-result
	}
};