/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var len = nums.length
	var i = 0
	while(i<nums.length){
		if(nums[i] == 0){
			nums.splice(i,1)
			continue;
		}
		i++
	}
	var len2 = len-nums.length
	for(var j=1;j <=len2;j++){
		nums.push(0)
	}
};