/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if(root == null) return
  var curr = root
  do{
    if(curr.left != null){
      var end = curr.left
      while(end.right != null){
        end = end.right
      }
      var temp = curr.right
      curr.right = curr.left
      curr.left = null
      end.right = temp
    }

  }while(curr = curr.right)
};