/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if(root == null) return []
  var result = []
  var stack = [[root,'']]
  while(stack.length != 0) {
    [curr,path] = stack.pop()
    debugger
    if(curr.left == null && curr.right == null){
      result.push(path+curr.val)
    }
    if(curr.right){
      stack.push([curr.right,path+curr.val+"->"])
    }
    if(curr.left){
      stack.push([curr.left,path+curr.val+"->"])
    }
  }
  return result
};