/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  var res =[]
  var n = nums.length
  for(var i = 0;i < n;i++){
  	nums[(nums[i] -1)% n] += n
  }
  for(var j = 0;j < n;j++){
  	if(nums[j] <= n) res.push(j+1)
  }
	return res
};