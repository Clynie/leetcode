/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  nums.sort((a,b) => b-a)
  for(var i = 0,len = nums.length;i < len;i++){
    debugger
    if((nums.lastIndexOf(nums[i])-nums.indexOf(nums[i])) >= (len/2-1) ){
      return nums[i]
      break
    }
  }
};