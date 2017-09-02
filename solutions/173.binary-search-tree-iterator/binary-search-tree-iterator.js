/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
  var nodeList = []
  inorderTraversal(nodeList,root)

  this.nodeList = nodeList
  this.index = -1 
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
  return this.nodeList[this.index+1]
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
  return this.nodeList[++ this.index].val
};

function inorderTraversal(nodeList,root) {
  if(root == null){
    return
  }
  if(root.left != null){
    inorderTraversal(nodeList,root.left)
  }
  nodeList.push(root)
  if(root.right != null) {
    inorderTraversal(nodeList,root.right)
  }
}

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/