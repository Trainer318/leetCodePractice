/*
TestCase:
[1,2,2,3]
*/

/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    if (A.length <= 2) return true;
    let isIncrease;
    for (let i = 1; i < A.length; i++) {
        if (A[i]-A[i-1] > 0) {
            if (isIncrease === 2) return false;
            isIncrease = 1;
        }
        else if(A[i]-A[i-1] < 0){
            if (isIncrease === 1) return false;
            isIncrease = 2;
        }
    }
    return true;
};