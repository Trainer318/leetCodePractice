/*
TestCase:
{"$id":"1","children":[{"$id":"2","children":[{"$id":"5","children":[],"val":5},{"$id":"6","children":[],"val":6}],"val":3},{"$id":"3","children":[],"val":2},{"$id":"4","children":[],"val":4}],"val":1}
*/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    let output = [];
    let levelCur = [];
    levelCur.push(root);
    while (levelCur.length > 0){
        let num = levelCur.length, sum = 0;
        let levelArray = [];
        let i = num;
        while(i > 0){
            let node = levelCur.shift();
            levelArray.push(node.val);
            if(node.children != null) 
                for (let element of node.children) {
                    levelCur.push(element);
                }
            i--;
        }
        output.push(levelArray);
    }
    return output;
};
        
        
    