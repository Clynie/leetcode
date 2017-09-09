/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums.sort((a,b) => a-b)
    var res = 0,
    mid = nums[parseInt(nums.length/2)]
    for(var num of nums){
        res += Math.abs(num - mid)
    }
    return res
};