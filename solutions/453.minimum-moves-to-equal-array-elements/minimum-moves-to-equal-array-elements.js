/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    var min = Math.min(...nums)
	var count = 0
	for(var i = 0;i < nums.length;i++){
		count += nums[i] - min
	}
	return count
};