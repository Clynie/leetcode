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
var constructMaximumBinaryTree = function(nums) {
	if(nums.length == 0){return null}
	var max = Math.max(...nums)
	var index = nums.indexOf(max)
	var tree = new TreeNode(max)
	tree.left = constructMaximumBinaryTree(nums.slice(0,index))
	tree.right = constructMaximumBinaryTree(nums.slice(index+1))
	return tree
};