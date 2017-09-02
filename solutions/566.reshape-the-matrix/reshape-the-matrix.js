/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
	if(nums.length*nums[0].length != r*c){
		return nums
	}
	var newNums = nums.reduce(function(a,b){return a.concat(b)})
	var result = new Array(r)
	var k = 0
	for(var i = 0;i < r;i++){
		result[i] = new Array(c)
		for(var j = 0;j < c;j++){
			result[i][j] = newNums[k]
			k++
		}
	}
	return result    
};