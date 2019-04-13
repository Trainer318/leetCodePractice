/*
TestCase:
[3,2,0,-4]
1
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
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) return false;
    let cur = head;
    const set = new Set();
    while(cur.next)
    {
        if(set.has(cur.next))  return true; 
        else set.add(cur.next);
        cur=cur.next;
    }
    return false;
};