/*
TestCase:
[[1,2,3,4],[5,1,2,3],[9,5,1,2]]
*/

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let borLenR = matrix.length - 1;
    let borLenC = matrix[0].length - 1;
    
    if (borLenR === 0 && borLenC === 0) return true;
    let a = function(i, j) {
        let init = matrix[i][j];
        while(++i <= borLenR && ++j <= borLenC) {
            if (matrix[i][j] != init) return false;
        }
        return true;
    }
    for (let i = borLenR - 1; i >= 0; i--) {
        if (!a(i, 0)) return false;
    }
    for (let i = borLenC - 1; i >= 0; i--) {
        if (!a(0, i)) return false;
    }
    return true;
};
        
        
    