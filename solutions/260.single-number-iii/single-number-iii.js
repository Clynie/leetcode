/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  var diff = nums.reduce((acuu,curr) => acuu ^ curr) //这个diff就是两个单独数字a,b的异或值
  diff &= -diff //取最右端为1的位数，这个数将a,b分开
  var res = [0,0]
  for(let v of nums){
  	if(v & diff){//因为diff其实是a,b的后diff位异或而来，所以a,b和diff按位与肯定是一个0一个1
  		res[0] ^= v
  	}else{
  		res[1] ^= v
  	}
  }
  return res
};