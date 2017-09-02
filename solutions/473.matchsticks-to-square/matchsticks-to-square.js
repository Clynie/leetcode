/**
 * @param {number[]} nums
 * @return {boolean}
 */
var makesquare = function(nums) {
	if(nums.length < 4) return false
	nums.sort(function(a,b){return b-a}) //从大到小排序
	var x = nums.reduce(function(res,v){return res+=v})/4//算出每条边长
	if(x%1 != 0) return false
	var square = new Array(4).fill(0)
	return forMakesquare(nums,square,0,x)
	function forMakesquare(nums,square,index,x){
		if(index == nums.length){
			return square[0] == x || square[1] == x || square[2] == x
		}
		for(var i = 0;i < 4;i++){
			if(square[i] + nums[index] > x){continue;}
			var j = i
			while(--j >= 0){
				if(square[i] == square[j]){
					break
				}
			}
			if(j != -1){continue}
			square[i] += nums[index]
			if(forMakesquare(nums,square,index+1,x)){return true}
			square[i] -= nums[index]
		}
		return false
	}
};