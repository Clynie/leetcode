/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
  var res = 0,cur = 0
  for(var i = 2;i < A.length;i++) {
  	debugger
  	if(A[i] - A[i-1] == A[i-1]-A[i-2]){
  		cur += 1
  		res += cur
  	}else{
  		cur = 0
  	}
  }
  return res
};