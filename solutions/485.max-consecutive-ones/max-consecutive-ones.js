/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  var len = nums.length
  var count = 0
  var max = 0
  for(var i = 0;i < len;i++){
    if(!nums[i]){
      if(count > max) max = count
      count = 0
    }else{
      count++
    }
  }
  if(count > max){
    return count  
  }else{
    return max
  } 
};