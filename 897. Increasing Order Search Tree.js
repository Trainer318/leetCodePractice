/*
TestCase:
[5,3,6,2,4,null,8,1,null,null,null,7,9]
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
var increasingBST = function(root) {
    let value = [];
    let a = function dfs(node, value) {
        if (node != null){
            dfs(node.left, value);
            value.push(node.val);
            dfs(node.right, value);
        }
    }
    a(root, value);
    let output = new TreeNode(value[0]);
    let current = output;
    for(let i = 1; i < value.length; i++) {
        current.right = new TreeNode(value[i])
        current = current.right
    }
    return output;
};