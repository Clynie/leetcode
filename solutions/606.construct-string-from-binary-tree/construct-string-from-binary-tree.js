/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
	if(t == null) return ""
	var res = "" + t.val
	var left = tree2str(t.left)
	var right = tree2str(t.right)
	if(left == "" && right == "") return res
	if(left == "") return res + `()(${right})`
	if(right == "") return res + `(${left})`
	return res+`(${left})(${right})`
};