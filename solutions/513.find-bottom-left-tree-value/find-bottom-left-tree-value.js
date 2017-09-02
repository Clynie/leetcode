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
var findBottomLeftValue = function(root) {
    if(!root.left && !root.right){
        return root.val
    }else{
        return treeDepth(root.left) >= treeDepth(root.right)?(root.left && findBottomLeftValue(root.left)) : (root.right && findBottomLeftValue(root.right))
    }
};

function treeDepth(root){
    if(root){
        return 1 + Math.max(treeDepth(root.left),treeDepth(root.right))
    }else{
        return 0
    }
}