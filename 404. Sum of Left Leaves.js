/*
TestCase:
[3,9,20,null,null,15,7]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root, left = false) {
    if (!root) return 0;
    
    if (left && !root.left && !root.right) return root.val;

    return  sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false);
};