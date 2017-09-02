/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  var n = nums.length,low = 0,high = Math.floor(n/2)
  while(low < high) {
  	debugger
  	var m = Math.floor((low + high)/2)
  	if(nums[2*m] != nums[2*m+1]){
  		high = m
  	}else {
  		low = m+1;
    }
  }
  return nums[2*low] 	
};