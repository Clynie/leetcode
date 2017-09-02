/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root){
        return []
    }
    var row = [root]
	var result = []
	var temp
	while(len = row.length) {
		temp = []
		for(var i = 0; i < len;i++){
			temp.push(row[i].val)
			if(row[i].left) row.push(row[i].left)
			if(row[i].right) row.push(row[i].right)
		}
		row.splice(0,len)
		result.push(temp)
	}
	return result
};