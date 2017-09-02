/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    //recursively
    if(head == null || head.next == null){
		return head
	}
	return forReverseList(head,null)
	function forReverseList(curr,prev){
		if(curr.next == null){
			curr.next = prev
			return curr
		}
		var newCurr = curr.next
		curr.next = prev
		var newPrev = curr
		return forReverseList(newCurr,newPrev)
	}
};