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
var largestValues = function(root) {
  if(root == null) return []
  var queue = [root]
  var res = []
  while(queue.length > 0){
  	var largest = -Infinity
  	var len = queue.length
  	for(var i = 0;i<len;i++){
  		var curr = queue.shift()
  		largest = Math.max(curr.val,largest)
  		if(curr.left != null) queue.push(curr.left)
  		if(curr.right != null) queue.push(curr.right)
  	}
  	res.push(largest)
  }
  return res
};