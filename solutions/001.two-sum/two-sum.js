/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var m = {}
    var result = []
    for(var i = 0;i<nums.length;i++){
        if(m[target - nums[i]] !== undefined){
            result[0] = m[target - nums[i]]
            result[1] = i
            break
        }else{
            m[nums[i]] = i
        }
    }
    return result
};