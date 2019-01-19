/*
TestCase:
[4,2,7,1,3,6,9]
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root == null) return null;
    tmp = root.right;
    root.right = root.left;
    root.left = tmp;
    invertTree(root.right);
    invertTree(root.left);
    return root;
};