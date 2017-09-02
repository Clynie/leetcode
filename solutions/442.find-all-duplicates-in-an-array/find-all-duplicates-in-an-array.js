/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  nums.sort((a,b) => a-b)
  var res = []
  for(var i = 0;i < nums.length;i++){
	  if(nums[i] == nums[i+1]){
	    res.push(nums[i])
	    i++
	  }
	}
	return res
};