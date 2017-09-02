/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if(nums.length == 0){
  	return null
  }else{
  	var root = Math.ceil(nums.length/2-1)
  	var result = new TreeNode(nums[root])
  	result.left = sortedArrayToBST(nums.slice(0,root))
  	result.right = sortedArrayToBST(nums.slice(root+1,nums.length))
  }
  return result
};