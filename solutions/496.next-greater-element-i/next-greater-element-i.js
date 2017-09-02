/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
	var res = []
	for(var i in findNums){
		for(var j = nums.indexOf(findNums[i])+1;j < nums.length;j++){
			if(nums[j] > findNums[i]){
				res[i] = nums[j]
				break
			}
		}
		if(res[i] == undefined){
			res[i] = -1
		}
	}
	return res    
};