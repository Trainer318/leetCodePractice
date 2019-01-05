/*
TestCase:
[3,5,1,6,2,9,8,null,null,7,4]
[3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let a = function dfs(node, valueList){
        if(node != null){
            if (node.left == null && node.right == null) valueList.push(node.val);
            dfs(node.left, valueList);
            dfs(node.right, valueList);
        }
    }
        
    let l1 = [];
    let l2 = [];
    a(root1, l1);
    a(root2, l2);
    if (l1.length != l2.length) return false;
    else {
        for (i = 0; i < l1.length; i++) {
            if (l1[i]!=l2[i]) return false;
        }
        return true;
    }
};