/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    return treeHeight(root) !== -1
    function treeHeight(root){
        if(root === null) return 0
        var leftH = treeHeight(root.left)
        var rightH = treeHeight(root.right)
        if(leftH === -1 || rightH === -1 || Math.abs(leftH - rightH) > 1) return -1
        return Math.max(leftH, rightH) + 1
    }
};

