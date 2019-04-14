/*
TestCase:
[5,3,6,2,4,null,7]
9
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const sortedArray = [];
    
    const toArray = node => {
        if(!node) return;
        toArray(node.left);
        sortedArray.push(node.val)
        toArray(node.right);
    };
    toArray(root);
    let low = 0, up = sortedArray.length - 1;
    while(low < up) {
        let sum = sortedArray[low] + sortedArray[up];
        if(sum < k){
            low++;
        } else if(sum > k){
            up--;
        } else {
            return true;
        }
    }
    return false;
};