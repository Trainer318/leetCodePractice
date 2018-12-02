/*
TestCase:[[1,1,0],[1,0,1],[0,0,0]]
*/

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    const output = [];
    for (let elementArray of A) {
        const outputArray = [];
        for (i = elementArray.length - 1; i>= 0 ;i--) {
          outputArray.push((elementArray[i] == 1) ? 0: 1);
        }
        output.push(outputArray)
    }
    return output;
};