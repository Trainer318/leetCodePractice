/*
TestCase:
[3,9,20,15,7]
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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let output = [];
    let level = [];
    level.push(root);
    while (level.length > 0){
        let num = level.length, sum = 0;
        let i = num;
        while(i > 0){
            let node = level.shift();
            sum += node.val;
            if(node.left) 
                level.push(node.left);
            if(node.right)
                level.push(node.right);
            i--;
        }
        output.push(sum / num);
    }
    return output;
};