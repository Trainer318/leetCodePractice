/*
TestCase:
5
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const output = [];
    for (let i = 0; i < numRows; i++) {
        output[i] = [];
        for(let j = 0; j < i + 1; j++) {
            if(j == 0 || j == i) {
                output[i].push(1);
            } else {
                output[i].push((output[i - 1][j - 1] + output[i - 1][j]));
            }
        }
    }
    return output;
};