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
var findFrequentTreeSum = function(root) {
	var countMax = 0
	sums = {}

	postOrder(root)

	var res = []
	for(let key in sums){
		if(sums[key] === countMax) {
			res.push(+key)
		}
	}
	return res

    
  function postOrder(root){
    if(root == null) return 0
    var left = postOrder(root.left)
    var right = postOrder(root.right)

    var sum = left + right + root.val
    var count = (sums[sum]||0) + 1
    sums[sum] = count

    countMax = Math.max(countMax,count)

    return sum
  }
};

