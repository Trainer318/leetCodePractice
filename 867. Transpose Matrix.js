/*
TestCase:
[[1,2,3],[4,5,6],[7,8,9]]
*/

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    let output = [];
    for (let i = 0; i < A[0].length; i++) {
        let outputRow = [];
        for (let j = 0; j < A.length; j++) {
            outputRow.push(A[j][i]);
        }
        output.push(outputRow);
    }
    return output;
};
        
        
    