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
var preorderTraversal = function(root) {
  if(root == null) return []
  var res = []
  var stack = [root]

  while(stack.length != 0) {
    var curr = stack.pop()
    res.push(curr.val)
    if(curr.right != null){
      stack.push(curr.right)
    }
    if(curr.left != null){
      stack.push(curr.left)
    }
  }
  return res
};