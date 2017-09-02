/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  var index = []
  for(var i = 0,len = nums.length;i < len;i++) {
    index[i] = i
  }

  index.sort((a,b) => nums[b] - nums[a])

  var result = []

  for(var i = 0;i<len;i++){
    if(0 == i) {
      result[index[i]] = "Gold Medal"
    }else if (1 == i) {
      result[index[i]] = "Silver Medal"
    }else if(2 == i) {
      result[index[i]] = "Bronze Medal"
    }else{
      result[index[i]] = ""+(i+1)
    }
  }
  return result
};