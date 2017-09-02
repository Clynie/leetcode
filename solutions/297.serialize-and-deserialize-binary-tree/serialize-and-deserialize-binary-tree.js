/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root,pos = 0,result = []) {
  if (root == null) return ''
  var q = []
  var res = ''
  q.push(root)
  while(q.length != 0){
    var node = q.shift()
    if(node == null) {
      res += 'n '
      continue;
    }
    res += node.val+' '
    q.push(node.left)
    q.push(node.right)
  } 
  return res
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if(data == '') return null
  var q = []
  var value = data.split(' ')
  debugger
  var root = new TreeNode(parseInt(value[0]))
  q.push(root)
  for(var i = 1;i < value.length - 1;i++) {
    var parent = q.shift()
    if(value[i] != 'n') {
      var left = new TreeNode(parseInt(value[i]))
      parent.left = left
      q.push(left)
    }
    if(value[++i] != 'n') {
      var right = new TreeNode(parseInt(value[i]))
      parent.right = right
      q.push(right)
    }
  }
  return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */