/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
  var result = 0
  postOrder(root)
  return result 

  function postOrder(root){
    if(root == null) return 0

    var left = postOrder(root.left)
    var right = postOrder(root.right)

    result += Math.abs(left - right)
    return left + right + root.val
  }    
};