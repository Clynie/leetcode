/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  	var result = []
	rightView(root,0)
	return result

	function rightView(curr,currDepth) {
		debugger
		if(curr == null){
			return
		}
		if(currDepth == result.length){
			result.push(curr.val)
		}
		rightView(curr.right,currDepth+1)
		rightView(curr.left,currDepth+1)
	}   
};