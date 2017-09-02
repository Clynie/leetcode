/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
  var res = ""+nums[0]
  if(nums.length == 1) return res
  if(nums.length == 2) return res + "/" + nums[1]
  res += "/("+nums[1]
  for(var i =2;i < nums.length;i++){
  	res += "/"+nums[i]
  } 
  res += ")"
  return res
};