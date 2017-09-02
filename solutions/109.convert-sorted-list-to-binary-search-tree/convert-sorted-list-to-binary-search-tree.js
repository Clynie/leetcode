/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (head === null) return null
    debugger
    if (head.next === null) return new TreeNode(head.val)
    var mid = getMid(head)
    var node = mid.next
    mid.next = null
    var result = new TreeNode(node.val)
    result.left = sortedListToBST(head)
    result.right = sortedListToBST(node.next)
    return result
}

var getMid = function(head) {
	var slow = new ListNode(0)
	slow.next = head
	var fast = head
	while(fast && fast.next){
		slow = slow.next
		fast = fast.next.next
	}
	return slow
}
