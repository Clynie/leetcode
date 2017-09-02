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
var postorderTraversal = function(root) {
    var result = []
	var stack = [root]
	var curr
	while(stack.length != 0) {
		curr = stack.pop()
		if(curr != null) {
			result.unshift(curr.val)
			stack.push(curr.left)
			stack.push(curr.right)
		}
	}
	return result
};