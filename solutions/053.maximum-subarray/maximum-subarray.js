/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var result = nums[0]
  var temp = nums[0]
  for(var i=1,len = nums.length; i<len; i++){
    temp = Math.max(nums[i], nums[i]+temp);
    result = Math.max(result,temp);
  }
  return result
};