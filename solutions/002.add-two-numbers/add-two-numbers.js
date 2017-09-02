/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if(l1 == null && l2 == null){
  	return null
  }
  var head = new ListNode(0)
  var current = head
  var digit = 0
  while(true){
  	if(l1 != null){
  		digit += l1.val
  		l1 = l1.next
  	}
  	if(l2 != null){
  		digit += l2.val
  		l2 = l2.next
  	}
  	current.val = digit%10
  	digit = parseInt(digit/10)
  	if(l1 != null || l2 != null || digit !=0){
	  	current.next = new ListNode(0)
	  	current = current.next
  	}else{
  		break
  	}
  }
  return head
};
