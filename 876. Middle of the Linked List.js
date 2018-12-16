/*
TestCase:
[1,2,3,4,5]
*/

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
var middleNode = function(head) {
    let skip = head;
    let doubleSkip = head;
    while (doubleSkip && doubleSkip.next) {
        skip = skip.next;
        doubleSkip = doubleSkip.next.next;
    }
    return skip
};
        
        
    