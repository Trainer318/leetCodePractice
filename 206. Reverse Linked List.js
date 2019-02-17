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
var reverseList = function(head) {
    let pre = null;
    while (head) {
        const tempNext = head.next;
        head.next = pre;
        pre = head;
        head = tempNext;
    }
    return pre;
};