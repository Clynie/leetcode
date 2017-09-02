/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(inorder.length == 0){
        return null
    }
    var value = postorder[postorder.length - 1]
    var i = inorder.indexOf(value)
    var result = new TreeNode(value)
    result.left = buildTree(inorder.slice(0,i),postorder.slice(0,i))
    result.right = buildTree(inorder.slice(i+1),postorder.slice(i,-1))
    return result
};