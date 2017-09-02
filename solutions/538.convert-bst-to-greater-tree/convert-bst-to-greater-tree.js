/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  var sum = 0
  traverse(root)
  return root

  function traverse(cur){
  	if(cur == null) return 
  	traverse(cur.right)
  	cur.val += sum
  	sum = cur.val
  	traverse(cur.left)
  }
};